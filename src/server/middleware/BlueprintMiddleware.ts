import {
  ClassType,
  IBlueprint,
  Promiseable,
  hasMetadata,
  getMetadata,
  NextMiddleware,
  MetaMiddleware,
  isMatchedAdapter,
  BlueprintContext
} from '@stone-js/core'
import {
  SetUseReactHooksMiddleware,
  SetReactPageLayoutMiddleware,
  SetUseReactEventHandlerMiddleware,
  SetReactKernelErrorPageMiddleware,
  SetReactRouteDefinitionsMiddleware
} from '../../middleware/BlueprintMiddleware'
import { AdapterErrorPageOptions } from '../../declarations'
import { REACT_ADAPTER_ERROR_PAGE_KEY } from '../../decorators/constants'
import { UseReactServerErrorHandler } from '../UseReactServerErrorHandler'
import { MetaCompressionMiddleware, MetaStaticFileMiddleware } from '@stone-js/http-core'

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
  next: NextMiddleware<BlueprintContext<IBlueprint, ClassType>, IBlueprint>
): Promiseable<IBlueprint> => {
  context
    .blueprint
    .set('stone.adapter.errorHandlers.default', { module: UseReactServerErrorHandler, isClass: true })

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
            .set(`stone.useReact.adapterErrorPages.${name}`, { isClass: true, layout, module })
        })
      }
    })

  // Process both eager and lazy loaded error pages
  Object
    .keys(context.blueprint.get('stone.useReact.adapterErrorPages', {}))
    .forEach((name) => {
      context
        .blueprint
        .set(`stone.adapter.errorHandlers.${name}`, { module: UseReactServerErrorHandler, isClass: true })
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
  next: NextMiddleware<BlueprintContext<IBlueprint, ClassType>, IBlueprint>
): Promise<IBlueprint> => {
  context.blueprint.add('stone.kernel.middleware', [MetaStaticFileMiddleware])

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
  next: NextMiddleware<BlueprintContext<IBlueprint, ClassType>, IBlueprint>
): Promise<IBlueprint> => {
  context.blueprint.add('stone.kernel.middleware', [MetaCompressionMiddleware])

  return await next(context)
}

/**
 * Configuration for react processing middleware.
 *
 * This array defines a list of middleware pipes, each with a `pipe` function and a `priority`.
 * These pipes are executed in the order of their priority values, with lower values running first.
 */
export const metaUseReactBlueprintMiddleware: Array<MetaMiddleware<BlueprintContext<IBlueprint, ClassType>, IBlueprint>> = [
  { module: SetSSRStaticFileMiddleware, priority: 10 },
  { module: SetUseReactHooksMiddleware, priority: 10 },
  { module: SetSSRCompressionMiddleware, priority: 10 },
  { module: SetReactPageLayoutMiddleware, priority: 10 },
  { module: SetUseReactEventHandlerMiddleware, priority: 2 },
  { module: SetReactKernelErrorPageMiddleware, priority: 10 },
  { module: SetReactAdapterErrorPageMiddleware, priority: 10 },
  { module: SetReactRouteDefinitionsMiddleware, priority: 10 }
]
