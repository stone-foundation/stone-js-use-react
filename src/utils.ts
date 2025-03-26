import { ReactIncomingEvent, ReactOutgoingResponse } from './declarations'
import { FactoryComponentEventHandler, MetaComponentEventHandler } from '@stone-js/router'

/**
 * Define a factory component event handler.
 *
 * @param module - The factory component event handler module.
 * @returns The meta component event handler.
*/
export const defineFactoryComponentEventHandler = <U extends ReactIncomingEvent = ReactIncomingEvent, V = ReactOutgoingResponse>(
  module: FactoryComponentEventHandler<U, V>
): MetaComponentEventHandler<U, V> => {
  return { module, isFactory: true }
}
