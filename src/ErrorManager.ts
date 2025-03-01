import { IncomingBrowserEvent } from '@stone-js/browser-core'
import { IBlueprint, IContainer, isEmpty, isObjectLikeModule } from '@stone-js/core'
import { IComponentErrorHandler, MetaComponentErrorHandler, ReactIncomingEvent } from './declarations'
import { buildAppComponent, renderReactApp, resolveComponentErrorHandler } from './UseReactComponentUtils'

/**
 * ErrorManagerOptions
*/
export interface ErrorManagerOptions {
  blueprint: IBlueprint
  container: IContainer
}

/**
 * Class representing an ErrorManager.
 *
 * This class can be used to execute error handling logic
 * Out of the Stone.js's lifecycle.
 * After the component has been rendered.
*/
export class ErrorManager {
  private readonly container: IContainer
  private readonly blueprint: IBlueprint

  /**
   * Create an ErrorManager.
   *
   * @param options - ErrorManager options.
  */
  constructor ({ container, blueprint }: ErrorManagerOptions) {
    this.container = container
    this.blueprint = blueprint
  }

  /**
   * Throw an error.
   *
   * This method will handle the error and render the error component.
   * If no error handler is found, the error will be thrown.
   *
   * @param error - The error to throw.
   * @param statusCode - The status code to return.
   * @returns void
   * @throws error
  */
  public async throwError (error: any, statusCode: number = 500): Promise<void> {
    const metavalue = this.blueprint.get<MetaComponentErrorHandler<ReactIncomingEvent>>(
      `stone.useReact.errorHandlers.${String(error.name ?? 'default')}`
    )

    if (isEmpty(metavalue)) {
      throw error
    }

    await this.renderErrorComponent(error, metavalue, statusCode)
  }

  /**
   * Render an error component.
   *
   * This method will render the error component.
   *
   * @param error - The error to render.
   * @param metavalue - The meta value to render.
   * @param statusCode - The status code to return.
   * @returns void
  */
  private async renderErrorComponent (
    error: Error,
    metavalue: MetaComponentErrorHandler<ReactIncomingEvent>,
    statusCode: number = 500
  ): Promise<void> {
    let data: any
    const event = this.container.make<ReactIncomingEvent>('event')
    const handler = await resolveComponentErrorHandler(this.container, { ...metavalue, error })

    if (isObjectLikeModule<IComponentErrorHandler<IncomingBrowserEvent>>(handler)) {
      const response: any = await handler.handle?.(error, event)
      data = response?.content ?? response
      statusCode = response?.statusCode ?? statusCode
    }

    const componentType = handler?.render.bind(handler)
    const appComponent = await buildAppComponent(
      event,
      this.container,
      componentType,
      metavalue.layout,
      data,
      statusCode,
      error
    )

    // Render the component
    renderReactApp(appComponent, this.blueprint)
  }
}

/**
 * MetaErrorManager
*/
export const MetaErrorManager = { module: ErrorManager, isClass: true, alias: 'errorManager', singleton: true }
