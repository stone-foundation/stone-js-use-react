import { MetaReactRuntime } from '../ReactRuntime'
import { AppConfig, StoneBlueprint } from '@stone-js/core'
import { MetaUseReactServiceProvider } from '../UseReactServiceProvider'
import { metaUseReactBlueprintMiddleware } from '../middleware/BlueprintMiddleware'
import { MetaAdapterErrorPage, MetaErrorPage, MetaPage, MetaPageLayout, ReactIncomingEvent, ReactOutgoingResponse } from '../declarations'

/**
 * Configuration options for integrating React with Stone.js.
 */
export interface UseReactConfig {
  /**
   * The ID of the root DOM element where React will be mounted.
   */
  rootElementId?: string

  /**
   * The content of the HTML template as a string.
   * This can be used to define the structure of the HTML document.
   * This is useful for inline templates or when the template is dynamically generated.
   * Note: This is not a file path, but the actual HTML content.
   */
  htmlTemplateContent?: string

  /**
   * A map of layout components with their respective event handlers.
   */
  layout?: Record<string, MetaPageLayout>

  /**
   * Handles incoming events for the root React component.
   */
  componentEventHandler?: MetaPage<ReactIncomingEvent>

  /**
   * A map of error pages for specific components.
   */
  errorPages?: Record<string, MetaErrorPage<ReactIncomingEvent>>

  /**
   * A map of error pages for adapter-level errors.
   */
  adapterErrorPages?: Record<string, MetaAdapterErrorPage<unknown, unknown, unknown>>
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
    useReact: {},
    blueprint: {
      middleware: metaUseReactBlueprintMiddleware
    },
    services: [MetaReactRuntime],
    providers: [MetaUseReactServiceProvider]
  }
}
