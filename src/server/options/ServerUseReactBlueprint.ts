import { NODE_CONSOLE_PLATFORM } from '@stone-js/router'
import { metaUseReactBlueprintMiddleware } from '../middleware/BlueprintMiddleware'
import { internalUseReactBlueprint, UseReactBlueprint } from '../../options/UseReactBlueprint'

/**
 * Middleware for the React blueprint.
 */
internalUseReactBlueprint.stone.useReact.ignorePlatforms = [NODE_CONSOLE_PLATFORM]
internalUseReactBlueprint.stone.blueprint = { middleware: metaUseReactBlueprintMiddleware }

/**
 * Default blueprint for a React-based Stone.js application.
 *
 * - Defines middleware, lifecycle hooks, and the default HTML template path.
 */
export const useReactBlueprint: UseReactBlueprint = internalUseReactBlueprint
