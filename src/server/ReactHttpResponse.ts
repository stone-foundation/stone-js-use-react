import { ReactNode } from 'react'
import { renderToString } from 'react-dom/server'
import { htmlTemplate, renderStoneSnapshot } from './utils'
import { StoneErrorComponent } from '../components/StoneErrorComponent'
import { IComponentEventHandler, MetaComponentEventHandler } from '@stone-js/router'
import { IBlueprint, IContainer, isFunction, isObjectLikeModule, isNotEmpty } from '@stone-js/core'
import { buildAppComponent, resolveComponentEventHandler, resolveComponentErrorHandler } from '../utils'
import { ResponseSnapshotType, HeadersType, IComponentErrorHandler, ISnapshot, MetaComponentErrorHandler, ReactIncomingEvent } from '../declarations'
import { OutgoingHttpResponse as OutgoingHttpResponseType, IncomingHttpEvent, OutgoingHttpResponseOptions, OutgoingHttpResponse } from '@stone-js/http-core'

/**
 * Options for creating a React HTTP Response.
 */
export interface ReactHttpResponseOptions extends OutgoingHttpResponseOptions {}

/**
 * Class representing a ReactHttpResponse.
 *
 * @author Mr. Stone <evensstone@gmail.com>
 */
export class ReactHttpResponse extends OutgoingHttpResponse {
  static REACT_HTTP_RESPONSE = 'stonejs@react_http_response'

  /**
   * Create an instance of OutgoingHttpResponse.
   *
   * @param options - Options for the outgoing HTTP response.
   * @returns A new instance of OutgoingHttpResponse.
   */
  static create<T extends OutgoingHttpResponseType = ReactHttpResponse>(options: ReactHttpResponseOptions): T {
    return new ReactHttpResponse(options) as unknown as T
  }

  /**
   * Constructor for ReactHttpResponse.
   *
   * @param options - Options for the React HTTP response.
   */
  constructor (options: ReactHttpResponseOptions) {
    super({ ...options, type: ReactHttpResponse.REACT_HTTP_RESPONSE })
  }

  /**
   * Prepare the response before sending.
   *
   * @param event - The incoming HTTP event.
   * @param container - The service container.
   * @returns The current instance of the response for chaining.
   */
  async prepare (event: IncomingHttpEvent, container: IContainer): Promise<this> {
    if (isNotEmpty<MetaComponentErrorHandler<ReactIncomingEvent>>(this.content) && isNotEmpty(this.content.error)) {
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
    event: IncomingHttpEvent,
    container: IContainer,
    content: MetaComponentEventHandler<ReactIncomingEvent>
  ): Promise<void> {
    const layout = content.layout
    const handler = await resolveComponentEventHandler(container, content)
    const componentType = handler?.render.bind(handler)
    const data = await this.extractDataFromHandler(event, handler)
    const AppComponent = await buildAppComponent(event, container, componentType, layout, data, this.statusCode)

    await this.hydrateContent(AppComponent, { data }, container, event)
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
    event: IncomingHttpEvent,
    container: IContainer,
    content: MetaComponentErrorHandler<ReactIncomingEvent>
  ): Promise<void> {
    const { error, layout } = content
    const handler = await resolveComponentErrorHandler(container, content)
    const componentType = handler?.render.bind(handler)
    const data = await this.extractDataFromHandler(event, handler, error)
    const AppComponent = await buildAppComponent(event, container, componentType, layout, data, this.statusCode, error)

    await this.hydrateContent(AppComponent, { data, error, layout, statusCode: this.statusCode }, container, event)
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
    event: IncomingHttpEvent,
    handler?: (IComponentEventHandler<ReactIncomingEvent> | IComponentErrorHandler<ReactIncomingEvent>),
    error?: any
  ): Promise<any> {
    let response: any

    if (isNotEmpty<Error>(error) && isObjectLikeModule<IComponentErrorHandler<ReactIncomingEvent>>(handler)) {
      response = await handler.handle?.(error, event)
    } else if (isObjectLikeModule<IComponentEventHandler<ReactIncomingEvent>>(handler)) {
      response = await handler.handle?.(event)
    }

    if (isNotEmpty<{ statusCode: number }>(response)) {
      this.setStatus(response.statusCode ?? this.statusCode ?? 200)
    }
    if (isNotEmpty<{ headers: HeadersType }>(response) && isNotEmpty(response.headers)) {
      this.setHeaders(response.headers)
    }
    if (isNotEmpty<{ content: any }>(response) && isNotEmpty(response.content)) {
      return response.content
    }

    return response
  }

  /**
   * Prepare the fallback error page to render.
   *
   * We prepare a fallback error page if no event nor error handler is provided.
   *
   * @param event - The incoming HTTP event.
   * @param container - The service container.
   */
  private async prepareFallbackErrorPage (event: IncomingHttpEvent, container: IContainer): Promise<void> {
    const error = this.content instanceof Error ? this.content : new Error('An error occurred.')
    const metavalue = container.make<IBlueprint>('blueprint').get<MetaComponentErrorHandler<ReactIncomingEvent>>(
      'stone.useReact.errorHandlers.default',
      { module: () => ({ render: StoneErrorComponent }), isFactory: true }
    )

    await this
      .setStatus(500)
      .prepareErrorPage(event, container, { ...metavalue, error })
  }

  /**
   * Hydrate the content of the response.
   *
   * @param component - The React component to hydrate.
   * @param data - The data to pass to the components.
   * @param container - The service container.
   * @returns A promise that resolves when the content is hydrated.
   */
  private async hydrateContent (
    component: ReactNode,
    data: Partial<ResponseSnapshotType>,
    container: IContainer,
    event: IncomingHttpEvent
  ): Promise<void> {
    const html = renderToString(component).concat('\n<!--app-html-->')
    const template = await htmlTemplate(container.make<IBlueprint>('blueprint'))
    const snapshot = this.snapshotResponse(event, container, data).concat('\n<!--app-head-->')

    this.setContent(
      template
        .replace('<!--app-html-->', html)
        .replace('<!--app-head-->', snapshot)
    )
  }

  /**
   * Snapshot the response data.
   *
   * @param event - The incoming HTTP event.
   * @param container - The service container.
   * @param data - The data to snapshot.
   */
  private snapshotResponse (event: IncomingHttpEvent, container: IContainer, data: Partial<ResponseSnapshotType>): string {
    const snapshot = container.make<ISnapshot>('snapshot')
    return renderStoneSnapshot(snapshot.set(event.fingerprint(), { ...data, ssr: true }).toJson())
  }
}
