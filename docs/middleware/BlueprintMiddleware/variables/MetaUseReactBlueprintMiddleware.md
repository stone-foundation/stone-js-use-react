[**Use React Documentation v0.0.2**](../../../README.md)

***

[Use React Documentation](../../../modules.md) / [middleware/BlueprintMiddleware](../README.md) / metaUseReactBlueprintMiddleware

# Variable: metaUseReactBlueprintMiddleware

> `const` **metaUseReactBlueprintMiddleware**: `MetaPipe`\<`BlueprintContext`\<`IBlueprint`, `ClassType`\>, `IBlueprint`\>[]

Defined in: [use-react/src/middleware/BlueprintMiddleware.ts:303](https://github.com/stonemjs/use-react/blob/9a749b225241b8e0ac2a5483904ca8322927b1d4/src/middleware/BlueprintMiddleware.ts#L303)

Configuration for react processing middleware.

This array defines a list of middleware pipes, each with a `pipe` function and a `priority`.
These pipes are executed in the order of their priority values, with lower values running first.
