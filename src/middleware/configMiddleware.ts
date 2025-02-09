import { reactResponse } from '../ReactResponse'
import { PageRouteDefinition } from '@stone-js/router'
import { MetaPipe, NextPipe } from '@stone-js/pipeline'
import { ErrorPageOptions } from '../decorators/ErrorPage'
import { PageLayoutOptions } from '../decorators/PageLayout'
import { ReactOutgoingResponseOptions } from '../declarations'
import { UseReactKernelErrorHandler } from '../UseReactKernelErrorHandler'
import { MetaBrowserResponseMiddleware } from './BrowserResponseMiddleware'
import { UseReactBrowserErrorHandler } from '../UseReactBrowserErrorHandler'
import { UseReactServerErrorHandler } from '../server/UseReactServerErrorHandler'
import { BROWSER_PLATFORM, BrowserAdapterAdapterConfig } from '@stone-js/browser-adapter'
import { REACT_ERROR_PAGE_KEY, REACT_PAGE_KEY, REACT_PAGE_LAYOUT_KEY } from '../decorators/constants'
import {
  ClassType,
  IBlueprint,
  Promiseable,
  hasMetadata,
  getMetadata,
  ConfigContext,
  classMiddleware,
  defineErrorHandler,
  defineAdapterErrorHandler
} from '@stone-js/core'

/**
 * Middleware to dynamically set response resolver for react.
 *
 * @param context - The configuration context containing modules and blueprint.
 * @param next - The next pipeline function to continue processing.
 * @returns The updated blueprint or a promise resolving to it.
 *
 * @example
 * ```typescript
 * SetResponseResolverMiddleware(context, next)
 * ```
 */
export const SetResponseResolverMiddleware = (
  context: ConfigContext<IBlueprint, ClassType>,
  next: NextPipe<ConfigContext<IBlueprint, ClassType>, IBlueprint>
): Promiseable<IBlueprint> => {
  context.blueprint.set(
    'stone.kernel.responseResolver',
    async (options: ReactOutgoingResponseOptions) => await reactResponse(options)
  )

  return next(context)
}

/**
 * Middleware to dynamically set error handlers for react.
 *
 * @param context - The configuration context containing modules and blueprint.
 * @param next - The next pipeline function to continue processing.
 * @returns The updated blueprint or a promise resolving to it.
 *
 * @example
 * ```typescript
 * SetErrorHandlersMiddleware(context, next)
 * ```
 */
export const SetErrorHandlersMiddleware = async (
  context: ConfigContext<IBlueprint, ClassType>,
  next: NextPipe<ConfigContext<IBlueprint, ClassType>, IBlueprint>
): Promise<IBlueprint> => {
  const adapterErrorHandlers = import.meta.env.SSR
    ? UseReactServerErrorHandler
    : UseReactBrowserErrorHandler

  import.meta.env.SSR && context.blueprint.add(
    'stone.kernel.middleware',
    [classMiddleware(await import('@stone-js/http-core').then(m => m.StaticFileMiddleware))]
  )

  context.blueprint
    .set(
      'stone.kernel.errorHandlers.default',
      defineErrorHandler(UseReactKernelErrorHandler, { isClass: true })
    )
    .set(
      'stone.adapter.errorHandlers.default',
      defineAdapterErrorHandler(adapterErrorHandlers, { isClass: true })
    )

  return await next(context)
}

/**
 * Middleware to set BrowserResponseMiddleware for Browser adapter.
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
  context: ConfigContext<IBlueprint, ClassType>,
  next: NextPipe<ConfigContext<IBlueprint, ClassType>, IBlueprint>
): Promise<IBlueprint> => {
  context
    .blueprint
    .get<BrowserAdapterAdapterConfig[]>('stone.adapters', [])
    .filter(adapter => adapter.platform === BROWSER_PLATFORM)
    .map(adapter => {
      adapter.middleware.push(MetaBrowserResponseMiddleware)
      return adapter
    })

  return await next(context)
}

/**
 * Middleware to process and register route definitions from modules.
 *
 * @param context - The configuration context containing modules and blueprint.
 * @param next - The next pipeline function to continue processing.
 * @returns The updated blueprint or a promise resolving to it.
 *
 * @example
 * ```typescript
 * ReactRouteDefinitionsMiddleware(context, next)
 * ```
 */
export const ReactRouteDefinitionsMiddleware = (
  context: ConfigContext<IBlueprint, ClassType>,
  next: NextPipe<ConfigContext<IBlueprint, ClassType>, IBlueprint>
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
 * Middleware to process and register layout definitions from modules.
 *
 * @param context - The configuration context containing modules and blueprint.
 * @param next - The next pipeline function to continue processing.
 * @returns The updated blueprint or a promise resolving to it.
 *
 * @example
 * ```typescript
 * ReactPageLayoutMiddleware(context, next)
 * ```
 */
export const ReactPageLayoutMiddleware = (
  context: ConfigContext<IBlueprint, ClassType>,
  next: NextPipe<ConfigContext<IBlueprint, ClassType>, IBlueprint>
): Promiseable<IBlueprint> => {
  context
    .modules
    .filter(module => hasMetadata(module, REACT_PAGE_LAYOUT_KEY))
    .forEach(module => {
      const { name } = getMetadata<ClassType, PageLayoutOptions>(module, REACT_PAGE_LAYOUT_KEY, { name: 'default' })
      context.blueprint.set(`stone.useReact.layout.${name}`, { isClass: true, module })
    })

  return next(context)
}

/**
 * Middleware to process and register error page definitions from modules.
 *
 * @param context - The configuration context containing modules and blueprint.
 * @param next - The next pipeline function to continue processing.
 * @returns The updated blueprint or a promise resolving to it.
 *
 * @example
 * ```typescript
 * ReactErrorPageMiddleware(context, next)
 * ```
 */
export const ReactErrorPageMiddleware = (
  context: ConfigContext<IBlueprint, ClassType>,
  next: NextPipe<ConfigContext<IBlueprint, ClassType>, IBlueprint>
): Promiseable<IBlueprint> => {
  context
    .modules
    .filter(module => hasMetadata(module, REACT_ERROR_PAGE_KEY))
    .forEach(module => {
      const { error } = getMetadata<ClassType, ErrorPageOptions>(module, REACT_ERROR_PAGE_KEY, { error: 'default' })
      Array(error).flat().forEach(name => {
        context
          .blueprint
          .set(`stone.useReact.errorHandlers.${name}`, { isClass: true, module })
          .set(
            `stone.kernel.errorHandlers.${name}`,
            defineErrorHandler(UseReactKernelErrorHandler, { isClass: true })
          )
      })
    })

  return next(context)
}

/**
 * Configuration for react processing middleware.
 *
 * This array defines a list of middleware pipes, each with a `pipe` function and a `priority`.
 * These pipes are executed in the order of their priority values, with lower values running first.
 */
export const metaUseReactConfigMiddleware: Array<MetaPipe<ConfigContext<IBlueprint, ClassType>, IBlueprint>> = [
  { module: ReactErrorPageMiddleware, priority: 10 },
  { module: ReactPageLayoutMiddleware, priority: 10 },
  { module: SetErrorHandlersMiddleware, priority: 10 },
  { module: SetResponseResolverMiddleware, priority: 10 },
  { module: SetResponseResolverMiddleware, priority: 10 },
  { module: ReactRouteDefinitionsMiddleware, priority: 10 },
  { module: SetBrowserResponseMiddlewareMiddleware, priority: 10 }
]
