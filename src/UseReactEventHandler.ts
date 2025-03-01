import { ReactIncomingEvent } from './declarations'
import { UseReactError } from './errors/UseReactError'
import { MetaComponentEventHandler } from '@stone-js/router'
import { IBlueprint, IEventHandler, isEmpty } from '@stone-js/core'

/**
 * A useReact event handler for processing incoming events
 * For single event handler.
 *
 * Multiple event handlers will be processed by the router.
 *
 * @template IncomingEventType - The type representing the incoming event.
 * @template OutgoingResponseType - The type representing the outgoing response.
 */
export class UseReactEventHandler<
  IncomingEventType extends ReactIncomingEvent = ReactIncomingEvent
> implements IEventHandler<IncomingEventType, MetaComponentEventHandler<IncomingEventType>> {
  private readonly blueprint: IBlueprint

  /**
   * Constructs a `UseReactEventHandler` instance.
   *
   * @param options - The UseReactEventHandler options including blueprint.
   */
  protected constructor ({ blueprint }: { blueprint: IBlueprint }) {
    this.blueprint = blueprint
  }

  /**
   * Handle an incoming event.
   *
   * @returns The outgoing response.
   */
  handle (): MetaComponentEventHandler<IncomingEventType> {
    return this.getComponentEventHandler()
  }

  /**
   * Get the component event handler.
   *
   * @returns The component event handler.
   * @throws {UseReactError} If the component event handler is missing.
   */
  private getComponentEventHandler (): MetaComponentEventHandler<IncomingEventType> {
    const handler = this.blueprint.get<MetaComponentEventHandler<IncomingEventType>>(
      'stone.useReact.componentEventHandler'
    )

    if (isEmpty(handler)) {
      throw new UseReactError('The component event handler is missing.')
    }

    return handler
  }
}
