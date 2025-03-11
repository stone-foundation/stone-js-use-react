import { MetaErrorManager } from '../ErrorManager'
import { AppConfig, StoneBlueprint } from '@stone-js/core'
import { MetaComponentEventHandler } from '@stone-js/router'
import { MetaUseReactBlueprintMiddleware } from '../middleware/BlueprintMiddleware'
import { MetaComponentErrorHandler, ReactIncomingEvent, ReactOutgoingResponse } from '../declarations'

/**
 * Configuration options for integrating React with Stone.js.
 */
export interface UseReactConfig {
  /**
   * The ID of the root DOM element where React will be mounted.
   */
  rootElementId?: string

  /**
   * Path to the HTML template used for server-side rendering.
   */
  htmlTemplatePath?: string

  /**
   * Handles incoming events for the root React component.
   */
  componentEventHandler?: MetaComponentEventHandler<ReactIncomingEvent>

  /**
   * A map of layout components with their respective event handlers.
   */
  layout?: Record<string, MetaComponentEventHandler<ReactIncomingEvent>>

  /**
   * A map of error handlers for specific components.
   */
  errorHandlers?: Record<string, MetaComponentErrorHandler<ReactIncomingEvent>>

  /**
   * A map of error handlers for adapter-level errors.
   */
  adapterErrorHandlers?: Record<string, MetaComponentErrorHandler<ReactIncomingEvent>>
}

/**
 * Application-level configuration that extends `AppConfig` with React-specific settings.
 */
export interface UseReactAppConfig extends Partial<AppConfig<ReactIncomingEvent, ReactOutgoingResponse>> {
  /**
   * React integration settings, extending the base application config.
   */
  useReact: UseReactConfig
}

/**
 * Stone.js blueprint for a React-based application.
 */
export interface UseReactBlueprint extends StoneBlueprint<ReactIncomingEvent, ReactOutgoingResponse> {
  /**
   * Contains the full application configuration, including middleware,
   * lifecycle hooks, and React integration settings.
   */
  stone: UseReactAppConfig
}

/**
 * Default blueprint for a React-based Stone.js application.
 *
 * - Defines middleware, lifecycle hooks, and the default HTML template path.
 */
export const useReactBlueprint: UseReactBlueprint = {
  stone: {
    builder: {
      middleware: MetaUseReactBlueprintMiddleware
    },
    useReact: {
      htmlTemplatePath: './template.mjs'
    },
    services: [MetaErrorManager]
  }
}
