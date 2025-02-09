import { createRoot } from 'react-dom/client'
import { UseReactError } from './errors/UseReactError'
import { buildAdapterErrorComponent, getAppRootElement } from './utils'
import { AdapterErrorContext, IAdapterErrorHandler, IBlueprint, ILogger } from '@stone-js/core'

/**
 * UseReactBrowserErrorHandler options.
 */
export interface UseReactBrowserErrorHandlerOptions {
  logger: ILogger
  blueprint: IBlueprint
}

/**
 * Class representing an UseReactBrowserErrorHandler.
 *
 * Adapter level error handler for React applications.
 */
export class UseReactBrowserErrorHandler implements IAdapterErrorHandler<unknown, unknown, unknown> {
  private readonly logger: ILogger
  private readonly blueprint: IBlueprint

  /**
   * Create an UseReactBrowserErrorHandler.
   *
   * @param options - UseReactBrowserErrorHandler options.
   */
  constructor ({ blueprint, logger }: UseReactBrowserErrorHandlerOptions) {
    if (logger === undefined) {
      throw new UseReactError('Logger is required to create an UseReactBrowserErrorHandler instance.')
    }
    if (blueprint === undefined) {
      throw new UseReactError('Blueprint is required to create an UseReactBrowserErrorHandler instance.')
    }

    this.logger = logger
    this.blueprint = blueprint
  }

  /**
   * Handle an error.
   *
   * @param error - The error to handle.
   * @param context - The context of the adapter.
   * @returns The raw response.
   */
  public async handle (error: any, context: AdapterErrorContext<unknown, unknown, unknown>): Promise<unknown> {
    this.logger.error(error.message, { error })

    return context
      .rawResponseBuilder
      .add('render', async () => await this.renderError(error))
      .build()
      .respond()
  }

  private async renderError (error: any): Promise<void> {
    const ClientApp = await buildAdapterErrorComponent(this.blueprint, error.statusCode ?? 500, error)
    createRoot(getAppRootElement(this.blueprint)).render(ClientApp)
  }
}
