[**Use React Documentation v0.0.2**](../../../README.md)

***

[Use React Documentation](../../../modules.md) / [middleware/BlueprintMiddleware](../README.md) / SetReactAdapterErrorPageMiddleware

# Function: SetReactAdapterErrorPageMiddleware()

> **SetReactAdapterErrorPageMiddleware**(`context`, `next`): `Promiseable`\<`IBlueprint`\>

Defined in: [use-react/src/middleware/BlueprintMiddleware.ts:138](https://github.com/stonemjs/use-react/blob/4786d31a3beb1c9f15eb30e2c9c2b12c786b755a/src/middleware/BlueprintMiddleware.ts#L138)

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
