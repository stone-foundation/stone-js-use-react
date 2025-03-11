import {
  ILogger,
  IBlueprint,
  LoggerResolver,
  AdapterErrorContext,
  IAdapterErrorHandler,
  defaultLoggerResolver,
  AdapterEventBuilderType
} from '@stone-js/core'
import { renderToString } from 'react-dom/server'
import { buildAdapterErrorComponent, htmlTemplate } from './UseReactComponentUtils'

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
  constructor ({ blueprint }: UseReactServerErrorHandlerOptions) {
    this.blueprint = blueprint
    this.logger = blueprint.get<LoggerResolver>('stone.logger.resolver', defaultLoggerResolver)(blueprint)
  }

  /**
   * Handle an error.
   *
   * @param error - The error to handle.
   * @param context - The context of the adapter.
   * @returns The raw response.
   */
  public async handle (
    error: any,
    context: AdapterErrorContext<unknown, unknown, unknown>
  ): Promise<AdapterEventBuilderType<unknown>> {
    this.logger.error(error.message, { error })

    return context
      .rawResponseBuilder
      .add('statusCode', error.statusCode ?? 500)
      .add('body', await this.getErrorBody(error))
      .add('headers', new Headers({ 'Content-Type': 'text/html' }))
  }

  /**
   * Get the error body.
   *
   * @param error - The error to handle.
   * @returns The error body.
  */
  private async getErrorBody (error: any): Promise<string> {
    const statusCode = error.statusCode ?? 500
    const template = await htmlTemplate(this.blueprint)
    const ClientApp = await buildAdapterErrorComponent(this.blueprint, statusCode, error)

    return template.replace('<!--app-html-->', renderToString(ClientApp))
  }
}
