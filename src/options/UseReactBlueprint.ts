import { AppConfig, StoneBlueprint } from '@stone-js/core'
import { MetaComponentEventHandler } from '@stone-js/router'
import { UseReactServiceProvider } from '../UseReactServiceProvider'
import { metaUseReactConfigMiddleware } from '../middleware/configMiddleware'
import { MetaComponentErrorHandler, ReactIncomingEvent, ReactOutgoingResponse } from '../declarations'

export interface UseReactConfig {
  rootElementId?: string
  htmlTemplatePath?: string
  layout?: Record<string, MetaComponentEventHandler<ReactIncomingEvent>>
  errorHandlers?: Record<string, MetaComponentErrorHandler<ReactIncomingEvent>>
}

export interface UseReactAppConfig extends Partial<AppConfig<ReactIncomingEvent, ReactOutgoingResponse> > {
  useReact: UseReactConfig
}

export interface UseReactBlueprint extends StoneBlueprint<ReactIncomingEvent, ReactOutgoingResponse> {
  stone: UseReactAppConfig
}

export const useReactBlueprint: UseReactBlueprint = {
  stone: {
    builder: {
      middleware: metaUseReactConfigMiddleware
    },
    useReact: {
      htmlTemplatePath: './index.html'
    },
    providers: [UseReactServiceProvider]
  }
}
