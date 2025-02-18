import { ReactNode } from 'react'
import { StoneErrorComponent } from './components/StoneErrorComponent'
import { IComponentEventHandler, MetaComponentEventHandler } from '@stone-js/router'
import { IBlueprint, IContainer, isFunction, isNotEmpty, isObjectLikeModule } from '@stone-js/core'
import { IncomingBrowserEvent, OutgoingBrowserResponse, OutgoingBrowserResponseOptions } from '@stone-js/browser-core'
import { buildAppComponent, buildPageComponent, resolveComponentErrorHandler, resolveComponentEventHandler } from './utils'
import { BrowserResponseContent, ResponseSnapshotType, IComponentErrorHandler, MetaComponentErrorHandler, ReactIncomingEvent, ISnapshot } from './declarations'

/**
 * Options for creating a React browser Response.
 */
export interface ReactBrowserResponseOptions extends OutgoingBrowserResponseOptions {}

/**
 * Class representing a ReactBrowserResponse.
 *
 * @author Mr. Stone <evensstone@gmail.com>
 */
export class ReactBrowserResponse extends OutgoingBrowserResponse {
  static REACT_BROWSER_RESPONSE = 'stonejs@react_browser_response'

  private snapshot?: ResponseSnapshotType

  /**
   * Create an instance of OutgoingHttpResponse.
   *
   * @param options - Options for the outgoing browser response.
   * @returns A new instance of OutgoingHttpResponse.
   */
  static create<T extends OutgoingBrowserResponse = ReactBrowserResponse>(options: ReactBrowserResponseOptions): T {
    return new ReactBrowserResponse(options) as unknown as T
  }

  /**
   * Constructor for ReactBrowserResponse.
   *
   * @param options - Options for the React browser response.
   */
  constructor (options: ReactBrowserResponseOptions) {
    super({ ...options, type: ReactBrowserResponse.REACT_BROWSER_RESPONSE })
  }

  /**
   * The content to be rendered by the React component.
   */
  get content (): BrowserResponseContent {
    return this._content as BrowserResponseContent
  }

  /**
   * Prepare the response before sending.
   *
   * @param event - The incoming Browser event.
   * @param container - The service container.
   * @returns The current instance of the response for chaining.
   */
  async prepare (event: IncomingBrowserEvent, container: IContainer): Promise<this> {
    this.snapshot = this.getResponseSnapshot(event, container)

    if (isNotEmpty<Error>(this.snapshot?.error)) {
      await this.prepareFallbackErrorPage(event, container, this.snapshot.error)
    } else if (isNotEmpty<MetaComponentErrorHandler<ReactIncomingEvent>>(this.content) && isNotEmpty(this.content.error)) {
      await this.prepareErrorPage(event, container, this.content)
    } else if (isNotEmpty<MetaComponentEventHandler<ReactIncomingEvent>>(this.content) && isFunction(this.content.module)) {
      await this.preparePage(event, container, this.content)
    } else {
      await this.prepareFallbackErrorPage(event, container)
    }

    return await super.prepare(event, container)
  }

  /**
   * Prepare the page to render.
   *
   * Here we prepare the page to render by resolving
   * the handler, handler the event, and rendering the component.
   *
   * @param event - The incoming HTTP event.
   * @param container - The service container.
   * @param content - The content to render.
   */
  private async preparePage (
    event: IncomingBrowserEvent,
    container: IContainer,
    content: MetaComponentEventHandler<ReactIncomingEvent>
  ): Promise<void> {
    const { layout } = content
    const handler = await resolveComponentEventHandler(container, content)
    const componentType = handler?.render.bind(handler)
    const data = await this.extractDataFromHandler(event, handler)
    const component = await buildPageComponent(event, container, componentType, data, this.statusCode)
    const appComponent = await buildAppComponent(event, container, componentType, layout, data, this.statusCode)

    this.hydrateContent(appComponent, component, isNotEmpty(layout))
  }

  /**
   * Prepare the error page to render.
   *
   * Error pages are prepared sepatately because their handler
   * is different from the normal page handler.
   * Their handler takes an error as the first argument and the event as the second.
   *
   * @param event - The incoming HTTP event.
   * @param container - The service container.
   * @param content - The error content.
   */
  private async prepareErrorPage (
    event: IncomingBrowserEvent,
    container: IContainer,
    content: MetaComponentErrorHandler<ReactIncomingEvent>
  ): Promise<void> {
    const { error, layout } = content
    const handler = await resolveComponentErrorHandler(container, content)
    const componentType = handler?.render.bind(handler)
    const data = await this.extractDataFromHandler(event, handler, error)
    const component = await buildPageComponent(event, container, componentType, data, this.statusCode, error)
    const appComponent = await buildAppComponent(event, container, componentType, layout, data, this.statusCode, error)

    this.hydrateContent(appComponent, component, true)
  }

  /**
   * Prepare the fallback error page to render.
   *
   * We prepare a fallback error page if no event nor error handler is provided.
   *
   * @param event - The incoming event.
   * @param container - The service container.
   */
  private async prepareFallbackErrorPage (event: IncomingBrowserEvent, container: IContainer, error?: any): Promise<void> {
    const { layout } = this.snapshot ?? {}
    error = error ?? (this.content instanceof Error ? this.content : new Error('An error occurred.'))
    const metavalue = container.make<IBlueprint>('blueprint').get<MetaComponentErrorHandler<ReactIncomingEvent>>(
      `stone.useReact.errorHandlers.${String(error.name ?? 'default')}`,
      { module: () => ({ render: StoneErrorComponent }), isFactory: true }
    )

    await this.prepareErrorPage(event, container, { ...metavalue, error, layout })
  }

  /**
   * Get the data from the handler.
   *
   * This method extracts the data from the response object.
   * Set the status code and headers if they are present.
   *
   * @param response - The response object.
   * @returns The data from the response.
   */
  private async extractDataFromHandler (
    event: IncomingBrowserEvent,
    handler?: (IComponentEventHandler<IncomingBrowserEvent> | IComponentErrorHandler<IncomingBrowserEvent>),
    error?: any
  ): Promise<any> {
    let response: any

    if (this.snapshot?.ssr === true) {
      response = this.snapshot.data
      this._statusCode = this.snapshot.statusCode ?? this.statusCode
    } else {
      if (isNotEmpty<Error>(error) && isObjectLikeModule<IComponentErrorHandler<IncomingBrowserEvent>>(handler)) {
        response = await handler.handle?.(error, event)
      } else if (isObjectLikeModule<IComponentEventHandler<IncomingBrowserEvent>>(handler)) {
        response = await handler.handle?.(event)
      }
    }

    if (isNotEmpty<{ statusCode: number }>(response)) {
      this._statusCode = response?.statusCode ?? this.statusCode ?? 200
    }
    if (isNotEmpty<{ content: any }>(response) && isNotEmpty(response?.content)) {
      response = response.content
    }

    return response
  }

  /**
   * Hydrate the content to be rendered by the React component.
   *
   * @param app - The app component to render.
   * @param component - The component to render.
   * @param fullRender - If the component should be fully rendered.
   */
  private hydrateContent (app: ReactNode, component: ReactNode, fullRender: boolean): void {
    this._content = { app, component, fullRender, ssr: this.snapshot?.ssr === true }
  }

  /**
   * Get the response snapshot.
   *
   * @param event - The incoming browser event.
   * @param container - The service container.
   * @returns The response snapshot.
   */
  private getResponseSnapshot (event: IncomingBrowserEvent, container: IContainer): ResponseSnapshotType | undefined {
    return container.make<ISnapshot>('snapshot').get(event.fingerprint())
  }
}
