[**Use React Documentation v0.0.2**](../../../README.md)

***

[Use React Documentation](../../../modules.md) / [middleware/BlueprintMiddleware](../README.md) / SetUseReactResponseResolverMiddleware

# Function: SetUseReactResponseResolverMiddleware()

> **SetUseReactResponseResolverMiddleware**(`context`, `next`): `Promiseable`\<`IBlueprint`\>

Defined in: use-react/src/middleware/BlueprintMiddleware.ts:46

Blueprint middleware to dynamically set response resolver for react.

## Parameters

### context

`BlueprintContext`\<`IBlueprint`, `ClassType`\>

The configuration context containing modules and blueprint.

### next

`NextPipe`\<`BlueprintContext`\<`IBlueprint`, `ClassType`\>, `IBlueprint`\>

The next pipeline function to continue processing.

## Returns

`Promiseable`\<`IBlueprint`\>

The updated blueprint or a promise resolving to it.

## Example

```typescript
SetUseReactResponseResolverMiddleware(context, next)
```
