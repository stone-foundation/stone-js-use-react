import { renderToString } from 'react-dom/server'
import { buildAdapterErrorComponent } from '../utils'
import { UseReactError } from '../errors/UseReactError'
import { AdapterErrorContext, IAdapterErrorHandler, ILogger, IBlueprint } from '@stone-js/core'

/**
 * UseReactServerErrorHandler options.
 */
export interface UseReactServerErrorHandlerOptions {
  logger: ILogger
  blueprint: IBlueprint
}

/**
 * Class representing an UseReactServerErrorHandler.
 *
 * Adapter level error handler for React applications.
 */
export class UseReactServerErrorHandler implements IAdapterErrorHandler<unknown, unknown, unknown> {
  private readonly logger: ILogger
  private readonly blueprint: IBlueprint

  /**
   * Create an UseReactServerErrorHandler.
   *
   * @param options - UseReactServerErrorHandler options.
   */
  constructor ({ blueprint, logger }: UseReactServerErrorHandlerOptions) {
    if (logger === undefined) {
      throw new UseReactError('Logger is required to create an UseReactServerErrorHandler instance.')
    }
    if (blueprint === undefined) {
      throw new UseReactError('Blueprint is required to create an UseReactServerErrorHandler instance.')
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
      .add('statusCode', error.statusCode ?? 500)
      .add('body', await this.getErrorBody(error))
      .add('headers', new Headers({ 'Content-Type': 'text/html' }))
      .build()
      .respond()
  }

  private async getErrorBody (error: any): Promise<string> {
    const { htmlTemplate, renderStoneGlobalData } = await import('./utils')
    const statusCode = error.statusCode ?? 500
    const globalData = renderStoneGlobalData({ error, statusCode, ssr: true })
    const ClientApp = await buildAdapterErrorComponent(this.blueprint, statusCode, error)
    const template = await htmlTemplate(this.blueprint)
    const html = renderToString(ClientApp)

    return template
      .replace('<!--app-html-->', html)
      .replace('<!--app-head-->', globalData)
  }
}
