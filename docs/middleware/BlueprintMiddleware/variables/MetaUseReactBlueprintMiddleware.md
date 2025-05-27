[**Use React Documentation v0.0.2**](../../../README.md)

***

[Use React Documentation](../../../modules.md) / [middleware/BlueprintMiddleware](../README.md) / metaUseReactBlueprintMiddleware

# Variable: metaUseReactBlueprintMiddleware

> `const` **metaUseReactBlueprintMiddleware**: `MetaPipe`\<`BlueprintContext`\<`IBlueprint`, `ClassType`\>, `IBlueprint`\>[]

Defined in: [use-react/src/middleware/BlueprintMiddleware.ts:319](https://github.com/stonemjs/use-react/blob/0635de04acc6b3a5c28dcf07d1e12a39a8b5e0b9/src/middleware/BlueprintMiddleware.ts#L319)

Configuration for react processing middleware.

This array defines a list of middleware pipes, each with a `pipe` function and a `priority`.
These pipes are executed in the order of their priority values, with lower values running first.
