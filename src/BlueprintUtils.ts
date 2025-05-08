import {
  ComponentEventHandlerClass,
  FactoryComponentEventHandler,
  LazyComponentEventHandlerClass,
  LazyFactoryComponentEventHandler
} from '@stone-js/router'
import { ReactIncomingEvent } from './declarations'
import { UseReactBlueprint } from './options/UseReactBlueprint'

/**
 * Utility function to define a factory-based Stone component.
 *
 * @param module - The factory component module.
 * @param isFactory - Indicates if the handler is a factory function. e.g. `true` for a factory function.
 * @param options - The options for the component.
 * @returns The meta component event handler.
 */
export function defineComponentEventHandler (
  module: FactoryComponentEventHandler<ReactIncomingEvent>,
  isFactory?: true,
  options?: { lazy?: false, layout?: unknown },
): Partial<UseReactBlueprint>

/**
 * Utility function to define a lazy factory-based Stone component.
 *
 * @param module - The factory component module.
 * @param isFactory - Indicates if the handler is a factory function. e.g. `true` for a factory function.
 * @param options - The options for the component.
 * @returns The meta component event handler.
 */
export function defineComponentEventHandler (
  module: LazyFactoryComponentEventHandler<ReactIncomingEvent>,
  isFactory?: true,
  options?: { lazy?: true, layout?: unknown },
): Partial<UseReactBlueprint>

/**
 * Utility function to define a class-based Stone component.
 *
 * @param module - The factory component module.
 * @param isFactory - Indicates if the handler is a factory function. e.g. `false` for a class.
 * @param options - The options for the component.
 * @returns The meta component event handler.
 */
export function defineComponentEventHandler (
  module: ComponentEventHandlerClass<ReactIncomingEvent>,
  isFactory?: false,
  options?: { lazy?: false, layout?: unknown },
): Partial<UseReactBlueprint>

/**
 * Utility function to define a lazy class-based Stone component.
 *
 * @param module - The factory component module.
 * @param isFactory - Indicates if the handler is a factory function. e.g. `false` for a class.
 * @param options - The options for the component.
 * @returns The meta component event handler.
 */
export function defineComponentEventHandler (
  module: LazyComponentEventHandlerClass<ReactIncomingEvent>,
  isFactory?: false,
  options?: { lazy?: true, layout?: unknown },
): Partial<UseReactBlueprint>

/**
 * Utility function to define a Stone component.
 *
 * @param module - The factory component module.
 * @param isFactory - Indicates if the handler is a factory function. e.g. `true` for a factory function, `false` for a class.
 * @param options - The options for the component.
 * @returns The meta component event handler.
 */
export function defineComponentEventHandler (
  module:
  | FactoryComponentEventHandler<ReactIncomingEvent>
  | LazyFactoryComponentEventHandler<ReactIncomingEvent>
  | ComponentEventHandlerClass<ReactIncomingEvent>
  | LazyComponentEventHandlerClass<ReactIncomingEvent>,
  isFactory: boolean = true,
  options?: { lazy?: boolean, layout?: unknown }
): Partial<UseReactBlueprint> {
  return {
    stone: {
      useReact: {
        componentEventHandler: {
          ...options,
          module,
          isFactory,
          isComponent: true,
          isClass: !isFactory
        }
      }
    }
  }
}
