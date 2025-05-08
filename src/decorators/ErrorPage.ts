import { REACT_ERROR_HANDLER_KEY } from './constants'
import { setMetadata, classDecoratorLegacyWrapper, ClassType } from '@stone-js/core'

/**
 * Options for configuring the `ErrorPage` decorator.
 */
export interface ErrorPageOptions {
  layout?: string
  error: string | string[]
}

/**
 * A class decorator for defining a class as a React Handler layout.
 *
 * @param options - Configuration options for the layout definition.
 * @returns A method decorator to be applied to a class method.
 *
 * @example
 * ```typescript
 * import { ErrorPage } from '@stone-js/use-react';
 *
 * @ErrorPage({ error: 'UserNotFoundError' })
 * class UserErrorPage {
 *   render({ error }) {
 *     return <h1>User name: {error.message}</h1>;
 *   }
 * }
 * ```
 */
export const ErrorPage = <T extends ClassType = ClassType>(options: ErrorPageOptions): ClassDecorator => {
  return classDecoratorLegacyWrapper((_target: T, context: ClassDecoratorContext<T>): undefined => {
    setMetadata(context, REACT_ERROR_HANDLER_KEY, { ...options, isClass: true })
  })
}
