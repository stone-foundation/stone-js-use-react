[**Use React Documentation v0.0.2**](../../../README.md)

***

[Use React Documentation](../../../modules.md) / [middleware/BlueprintMiddleware](../README.md) / SetReactAdapterErrorPageMiddleware

# Function: SetReactAdapterErrorPageMiddleware()

> **SetReactAdapterErrorPageMiddleware**(`context`, `next`): `Promiseable`\<`IBlueprint`\>

Defined in: [use-react/src/middleware/BlueprintMiddleware.ts:138](https://github.com/stonemjs/use-react/blob/50c96852bd65a75b7f2a00786393fb0c90af6da8/src/middleware/BlueprintMiddleware.ts#L138)

Blueprint middleware to process and register adapter error page definitions from modules.

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
SetReactAdapterErrorPageMiddleware(context, next)
```
