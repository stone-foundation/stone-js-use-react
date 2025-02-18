[**Use React Documentation v0.0.2**](../../../README.md)

***

[Use React Documentation](../../../modules.md) / [middleware/configMiddleware](../README.md) / metaUseReactConfigMiddleware

# Variable: metaUseReactConfigMiddleware

> `const` **metaUseReactConfigMiddleware**: `MetaPipe`\<`ConfigContext`\<`IBlueprint`, `ClassType`\>, `IBlueprint`\>[]

Defined in: [use-react/src/middleware/configMiddleware.ts:214](https://github.com/stonemjs/use-react/blob/35b6e6a63b128df8b7d2db68dda3eb3286adfc69/src/middleware/configMiddleware.ts#L214)

Configuration for react processing middleware.

This array defines a list of middleware pipes, each with a `pipe` function and a `priority`.
These pipes are executed in the order of their priority values, with lower values running first.
