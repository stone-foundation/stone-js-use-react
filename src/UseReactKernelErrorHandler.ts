import { IntegrationError, IErrorHandler, IBlueprint } from '@stone-js/core'
import { MetaComponentErrorHandler, ReactIncomingEvent } from './declarations'

/**
 * UseReactUseReactKernelErrorHandler options.
 */
export interface UseReactKernelErrorHandlerOptions {
  blueprint: IBlueprint
}

/**
 * Class representing an UseReactUseReactKernelErrorHandler.
 *
 * Kernel level error handler for React applications.
 */
export class UseReactKernelErrorHandler implements IErrorHandler<ReactIncomingEvent, Partial<MetaComponentErrorHandler<ReactIncomingEvent>>> {
  private readonly blueprint: IBlueprint

  /**
   * Create an UseReactUseReactKernelErrorHandler.
   *
   * @param options - UseReactUseReactKernelErrorHandler options.
   */
  constructor ({ blueprint }: UseReactKernelErrorHandlerOptions) {
    if (blueprint === undefined) { throw new IntegrationError('Blueprint is required to create an UseReactUseReactKernelErrorHandler instance.') }

    this.blueprint = blueprint
  }

  /**
   * Handle an error.
   *
   * @param error - The error to handle.
   * @param _event - The incoming http event.
   * @returns The outgoing http response.
   */
  public handle (error: any, _event: ReactIncomingEvent): Partial<MetaComponentErrorHandler<ReactIncomingEvent>> {
    const metavalue = this.blueprint.get<MetaComponentErrorHandler<ReactIncomingEvent>>(
      `stone.useReact.errorHandlers.${String(error?.name ?? 'default')}`
    )

    return { ...metavalue, error }
  }
}
