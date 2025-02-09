import { REACT_PAGE_KEY } from './constants'
import { HeadersType } from '../declarations'
import { DecoratorPageRouteDefinition, GET } from '@stone-js/router'
import { setMetadata, classDecoratorLegacyWrapper, ClassType } from '@stone-js/core'

/**
 * Options for configuring the `Page` decorator.
 * Extends `PageRouteDefinition` but excludes the `methods` property,
 * as it is predefined as `'GET'` by the decorator.
 */
export interface PageOptions extends DecoratorPageRouteDefinition {
  layout?: string
  headers?: HeadersType
}

/**
 * A class decorator for defining a class as a React Page route action.
 * Uses the `Match` decorator internally to register the route with the HTTP `GET` method.
 *
 * @param options - Configuration options for the route definition, excluding the `methods` property.
 * @returns A method decorator to be applied to a class method.
 *
 * @example
 * ```typescript
 * import { Page } from '@stone-js/use-react';
 *
 * @Page('/user-profile')
 * class UserPage {
 *   handle({ event }): Record<string, string> {
 *     return { name: 'Jane Doe' };
 *   }
 *
 *   render({ data }) {
 *     return <h1>User name: {data.name}</h1>;
 *   }
 * }
 * ```
 */
export const Page = <T extends ClassType = ClassType>(path: string, options: PageOptions = {}): ClassDecorator => {
  return classDecoratorLegacyWrapper((target: T, context: ClassDecoratorContext<T>): undefined => {
    setMetadata(
      context,
      REACT_PAGE_KEY,
      {
        ...options,
        path,
        method: GET,
        methods: [],
        handler: { isClass: true, isComponent: true, layout: options.layout, module: target }
      }
    )
  })
}
