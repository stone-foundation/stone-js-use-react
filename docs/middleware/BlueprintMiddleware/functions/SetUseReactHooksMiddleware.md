[**Use React Documentation v0.0.2**](../../../README.md)

***

[Use React Documentation](../../../modules.md) / [middleware/BlueprintMiddleware](../README.md) / SetUseReactHooksMiddleware

# Function: SetUseReactHooksMiddleware()

> **SetUseReactHooksMiddleware**(`context`, `next`): `Promiseable`\<`IBlueprint`\>

Defined in: [use-react/src/middleware/BlueprintMiddleware.ts:42](https://github.com/stonemjs/use-react/blob/9a749b225241b8e0ac2a5483904ca8322927b1d4/src/middleware/BlueprintMiddleware.ts#L42)

Blueprint middleware to dynamically set lifecycle hooks for react.

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
SetUseReactHooksMiddleware(context, next)
```
