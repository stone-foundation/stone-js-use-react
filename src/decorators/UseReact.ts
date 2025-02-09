import { addBlueprint, classDecoratorLegacyWrapper, ClassType } from '@stone-js/core'
import { UseReactBlueprint, useReactBlueprint, UseReactConfig } from '../options/UseReactBlueprint'

/**
 * UseReact decorator options.
 */
export interface UseReactOptions extends Partial<UseReactConfig> {}

/**
 * UseReact decorator.
 *
 * UseReact is a class decorator that allows you to use React components in your Stone application.
 * The decorator is used to define the React configuration for the class.
 *
 * @param options - UseReactOptions
 * @returns ClassDecorator
 */
export const UseReact = <T extends ClassType = ClassType>(options: UseReactOptions = {}): ClassDecorator => {
  return classDecoratorLegacyWrapper<T>((target: T, context: ClassDecoratorContext<T>): undefined => {
    const blueprint: UseReactBlueprint = { stone: { useReact: options } }

    // Add the modified blueprint to the target class.
    addBlueprint(target, context, useReactBlueprint, blueprint)
  })
}
