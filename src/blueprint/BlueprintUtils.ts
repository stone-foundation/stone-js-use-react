import { FactoryPage, PageClass, ReactIncomingEvent } from '../declarations'
import { mergeBlueprints, stoneBlueprint, StoneBlueprint } from '@stone-js/core'
import { UseReactAppConfig, useReactBlueprint } from '../options/UseReactBlueprint'

/**
 * Declares a complete Stone-React application blueprint using a factory-based event handler.
 *
 * @param module - A factory function that returns an event handler.
 * @param options - Application-level configuration.
 * @param blueprints - Additional partial blueprints to merge.
 * @returns A fully merged Stone blueprint.
 */
export function defineStoneReactApp<U extends ReactIncomingEvent = ReactIncomingEvent> (
  module: FactoryPage<U>,
  options?: Partial<UseReactAppConfig>,
  blueprints?: Array<StoneBlueprint<any, any> & Record<string, any>>
): StoneBlueprint<U>

/**
 * Declares a complete Stone-React application blueprint using a class-based event handler.
 *
 * @param module - A class constructor for the event handler.
 * @param options - Application-level configuration.
 * @param blueprints - Additional partial blueprints to merge.
 * @returns A fully merged Stone blueprint.
 */
export function defineStoneReactApp<U extends ReactIncomingEvent = ReactIncomingEvent> (
  module: PageClass<U>,
  options: Partial<UseReactAppConfig> & { isClass: true },
  blueprints?: Array<StoneBlueprint<any, any> & Record<string, any>>
): StoneBlueprint<U>

/**
 * Declares a complete Stone-React application blueprint.
 *
 * This utility combines a main event handler with additional blueprints and configuration options
 * to define a full application. The event handler can be class-based, or factory-based.
 *
 * @param module - A factory, or class that handles incoming events.
 * @param options - Optional application-level configuration (log level, middleware, lifecycle, etc.)
 * @param blueprints - Additional partial blueprints to merge into the final one.
 * @returns A fully merged Stone blueprint representing the application.
 */
export function defineStoneReactApp<U extends ReactIncomingEvent = ReactIncomingEvent> (
  module: PageClass<U> | FactoryPage<U>,
  options: Partial<UseReactAppConfig> & { isClass?: boolean } = {},
  blueprints: Array<StoneBlueprint<any, any> & Record<string, any>> = []
): StoneBlueprint<ReactIncomingEvent> {
  return mergeBlueprints<ReactIncomingEvent>(
    stoneBlueprint,
    useReactBlueprint,
    ...blueprints,
    {
      stone: {
        ...options,
        useReact: {
          ...options.useReact,
          componentEventHandler: {
            module,
            isComponent: true,
            isClass: options.isClass,
            isFactory: options.isClass !== true
          }
        }
      }
    }
  )
}
