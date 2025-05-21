import {
  ClassType,
  IBlueprint,
  isNotEmpty,
  Promiseable,
  hasMetadata,
  getMetadata,
  isMatchedAdapter,
  BlueprintContext
} from '@stone-js/core'
import {
  REACT_PAGE_KEY,
  STONE_REACT_APP_KEY,
  REACT_ERROR_PAGE_KEY,
  REACT_PAGE_LAYOUT_KEY,
  REACT_ADAPTER_ERROR_PAGE_KEY
} from '../decorators/constants'
import { MetaPipe, NextPipe } from '@stone-js/pipeline'
import { onPreparingResponse } from '../UseReactPageHooks'
import { BROWSER_PLATFORM } from '@stone-js/browser-adapter'
import { UseReactEventHandler } from '../UseReactEventHandler'
import { UseReactKernelErrorHandler } from '../UseReactKernelErrorHandler'
import { UseReactServerErrorHandler } from '../UseReactServerErrorHandler'
import { MetaBrowserResponseMiddleware } from './BrowserResponseMiddleware'
import { UseReactBrowserErrorHandler } from '../UseReactBrowserErrorHandler'
import { NODE_CONSOLE_PLATFORM, PageRouteDefinition } from '@stone-js/router'
import { MetaCompressionMiddleware, MetaStaticFileMiddleware } from '@stone-js/http-core'
import { ErrorPageOptions, AdapterErrorPageOptions, PageLayoutOptions } from '../declarations'

/**
 * Blueprint middleware to dynamically set lifecycle hooks for react.
 *
 * @param context - The configuration context containing modules and blueprint.
 * @param next - The next pipeline function to continue processing.
 * @returns The updated blueprint or a promise resolving to it.
 *
 * @example
 * ```typescript
 * SetUseReactHooksMiddleware(context, next)
 * ```
 */
export const SetUseReactHooksMiddleware = (
  context: BlueprintContext<IBlueprint, ClassType>,
  next: NextPipe<BlueprintContext<IBlueprint, ClassType>, IBlueprint>
): Promiseable<IBlueprint> => {
  if (context.blueprint.get<string>('stone.adapter.platform') !== NODE_CONSOLE_PLATFORM) {
    context
      .blueprint
      .add('stone.lifecycleHooks.onPreparingResponse', [onPreparingResponse])
  }

  return next(context)
}

/**
 * Blueprint middleware to set BrowserResponseMiddleware for the Browser adapter.
 *
 * The MetaBrowserResponseMiddleware is an adapter middleware and is useful
 * for handling outgoing responses and rendering them in the browser.
 *
 * @param context - The configuration context containing modules and blueprint.
 * @param next - The next pipeline function to continue processing.
 * @returns The updated blueprint or a promise resolving to it.
 *
 * @example
 * ```typescript
 * SetBrowserResponseMiddlewareMiddleware(context, next)
 * ```
 */
export const SetBrowserResponseMiddlewareMiddleware = async (
  context: BlueprintContext<IBlueprint, ClassType>,
  next: NextPipe<BlueprintContext<IBlueprint, ClassType>, IBlueprint>
): Promise<IBlueprint> => {
  if (context.blueprint.get<string>('stone.adapter.platform') === BROWSER_PLATFORM) {
    context.blueprint.add('stone.adapter.middleware', [MetaBrowserResponseMiddleware])
  }

  return await next(context)
}

/**
 * Blueprint middleware to process and register kernel error page definitions from modules.
 *
 * @param context - The configuration context containing modules and blueprint.
 * @param next - The next pipeline function to continue processing.
 * @returns The updated blueprint or a promise resolving to it.
 *
 * @example
 * ```typescript
 * SetReactKernelErrorPageMiddleware(context, next)
 * ```
 */
export const SetReactKernelErrorPageMiddleware = (
  context: BlueprintContext<IBlueprint, ClassType>,
  next: NextPipe<BlueprintContext<IBlueprint, ClassType>, IBlueprint>
): Promiseable<IBlueprint> => {
  context
    .blueprint
    .set('stone.kernel.errorHandlers.default', { module: UseReactKernelErrorHandler, isClass: true })

  context
    .modules
    .filter(module => hasMetadata(module, REACT_ERROR_PAGE_KEY))
    .forEach(module => {
      const { error, layout } = getMetadata<ClassType, ErrorPageOptions>(module, REACT_ERROR_PAGE_KEY, { error: 'default' })
      Array(error).flat().forEach(name => {
        context
          .blueprint
          .set(`stone.useReact.errorHandlers.${name}`, { layout, module, isClass: true })
          .set(`stone.kernel.errorHandlers.${name}`, { module: UseReactKernelErrorHandler, isClass: true })
      })
    })

  return next(context)
}

/**
 * Blueprint middleware to process and register adapter error page definitions from modules.
 *
 * @param context - The configuration context containing modules and blueprint.
 * @param next - The next pipeline function to continue processing.
 * @returns The updated blueprint or a promise resolving to it.
 *
 * @example
 * ```typescript
 * SetReactAdapterErrorPageMiddleware(context, next)
 * ```
 */
export const SetReactAdapterErrorPageMiddleware = (
  context: BlueprintContext<IBlueprint, ClassType>,
  next: NextPipe<BlueprintContext<IBlueprint, ClassType>, IBlueprint>
): Promiseable<IBlueprint> => {
  const UseReactAdapterErrorHandler = import.meta.env.SSR
    ? UseReactServerErrorHandler
    : UseReactBrowserErrorHandler

  context
    .blueprint
    .set('stone.adapter.errorHandlers.default', { module: UseReactAdapterErrorHandler, isClass: true })

  context
    .modules
    .filter(module => hasMetadata(module, REACT_ADAPTER_ERROR_PAGE_KEY))
    .forEach(module => {
      const { error, layout, adapterAlias, platform } = getMetadata<ClassType, AdapterErrorPageOptions>(
        module, REACT_ADAPTER_ERROR_PAGE_KEY, { error: 'default' }
      )
      if (isMatchedAdapter(context.blueprint, platform, adapterAlias)) {
        Array(error).flat().forEach(name => {
          context
            .blueprint
            .set(`stone.useReact.adapterErrorHandlers.${name}`, { isClass: true, layout, module })
            .set(`stone.adapter.errorHandlers.${name}`, { module: UseReactAdapterErrorHandler, isClass: true })
        })
      }
    })

  return next(context)
}

/**
 * Blueprint middleware to set StaticFileMiddleware for SSR adapter.
 *
 * @param context - The configuration context containing modules and blueprint.
 * @param next - The next pipeline function to continue processing.
 * @returns The updated blueprint or a promise resolving to it.
 *
 * @example
 * ```typescript
 * SetSSRStaticFileMiddleware(context, next)
 * ```
 */
export const SetSSRStaticFileMiddleware = async (
  context: BlueprintContext<IBlueprint, ClassType>,
  next: NextPipe<BlueprintContext<IBlueprint, ClassType>, IBlueprint>
): Promise<IBlueprint> => {
  import.meta.env.SSR && context.blueprint.add(
    'stone.kernel.middleware',
    [MetaStaticFileMiddleware]
  )

  return await next(context)
}

/**
 * Blueprint middleware to set CompressionMiddleware for SSR adapter.
 *
 * @param context - The configuration context containing modules and blueprint.
 * @param next - The next pipeline function to continue processing.
 * @returns The updated blueprint or a promise resolving to it.
 *
 * @example
 * ```typescript
 * SetSSRCompressionMiddleware(context, next)
 * ```
 */
export const SetSSRCompressionMiddleware = async (
  context: BlueprintContext<IBlueprint, ClassType>,
  next: NextPipe<BlueprintContext<IBlueprint, ClassType>, IBlueprint>
): Promise<IBlueprint> => {
  import.meta.env.SSR && context.blueprint.add(
    'stone.kernel.middleware',
    [MetaCompressionMiddleware]
  )

  return await next(context)
}

/**
 * Blueprint middleware to process and register route definitions from modules.
 *
 * @param context - The configuration context containing modules and blueprint.
 * @param next - The next pipeline function to continue processing.
 * @returns The updated blueprint or a promise resolving to it.
 *
 * @example
 * ```typescript
 * SetReactRouteDefinitionsMiddleware(context, next)
 * ```
 */
export const SetReactRouteDefinitionsMiddleware = (
  context: BlueprintContext<IBlueprint, ClassType>,
  next: NextPipe<BlueprintContext<IBlueprint, ClassType>, IBlueprint>
): Promiseable<IBlueprint> => {
  context
    .modules
    .filter(module => hasMetadata(module, REACT_PAGE_KEY))
    .forEach(module => {
      const options = getMetadata<ClassType, PageRouteDefinition>(module, REACT_PAGE_KEY, { path: '/' } as any)
      const definition = {
        ...options,
        handler: { ...options.handler, module }
      }
      context.blueprint.add('stone.router.definitions', [definition])
    })

  return next(context)
}

/**
 * Blueprint middleware to process and register layout definitions from modules.
 *
 * @param context - The configuration context containing modules and blueprint.
 * @param next - The next pipeline function to continue processing.
 * @returns The updated blueprint or a promise resolving to it.
 *
 * @example
 * ```typescript
 * SetReactPageLayoutMiddleware(context, next)
 * ```
 */
export const SetReactPageLayoutMiddleware = (
  context: BlueprintContext<IBlueprint, ClassType>,
  next: NextPipe<BlueprintContext<IBlueprint, ClassType>, IBlueprint>
): Promiseable<IBlueprint> => {
  context
    .modules
    .filter(module => hasMetadata(module, REACT_PAGE_LAYOUT_KEY))
    .forEach(module => {
      const { name = 'default' } = getMetadata<ClassType, PageLayoutOptions>(module, REACT_PAGE_LAYOUT_KEY, { name: 'default' })
      context.blueprint.set(`stone.useReact.layout.${name}`, { isClass: true, module })
    })

  return next(context)
}

/**
 * Blueprint middleware to set the UseReact as the main event handler for the application.
 *
 * Set as fallback event handler if none of the other event handlers are registered.
 *
 * @param context - The configuration context containing modules and blueprint.
 * @param next - The next function in the pipeline.
 * @returns The updated blueprint.
 *
 * @example
 * ```typescript
 * SetUseReactEventHandlerMiddleware({ modules, blueprint }, next);
 * ```
 */
export async function SetUseReactEventHandlerMiddleware (
  context: BlueprintContext<IBlueprint, ClassType>,
  next: NextPipe<BlueprintContext<IBlueprint, ClassType>, IBlueprint>
): Promise<IBlueprint> {
  const blueprint = await next(context)
  const module = context.modules.find(module => hasMetadata(module, STONE_REACT_APP_KEY))

  blueprint.setIf('stone.kernel.eventHandler', { module: UseReactEventHandler, isClass: true })

  if (isNotEmpty<ClassType>(module)) {
    blueprint.set('stone.useReact.componentEventHandler', { module, isComponent: true, isClass: true })
  }

  return blueprint
}

/**
 * Configuration for react processing middleware.
 *
 * This array defines a list of middleware pipes, each with a `pipe` function and a `priority`.
 * These pipes are executed in the order of their priority values, with lower values running first.
 */
export const metaUseReactBlueprintMiddleware: Array<MetaPipe<BlueprintContext<IBlueprint, ClassType>, IBlueprint>> = [
  { module: SetSSRStaticFileMiddleware, priority: 10 },
  { module: SetUseReactHooksMiddleware, priority: 10 },
  { module: SetSSRCompressionMiddleware, priority: 10 },
  { module: SetReactPageLayoutMiddleware, priority: 10 },
  { module: SetUseReactEventHandlerMiddleware, priority: 2 },
  { module: SetReactKernelErrorPageMiddleware, priority: 10 },
  { module: SetReactAdapterErrorPageMiddleware, priority: 10 },
  { module: SetReactRouteDefinitionsMiddleware, priority: 10 },
  { module: SetBrowserResponseMiddlewareMiddleware, priority: 10 }
]
