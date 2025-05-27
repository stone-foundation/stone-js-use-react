[**Use React Documentation v0.0.2**](../../../README.md)

***

[Use React Documentation](../../../modules.md) / [middleware/BlueprintMiddleware](../README.md) / SetReactPageLayoutMiddleware

# Function: SetReactPageLayoutMiddleware()

> **SetReactPageLayoutMiddleware**(`context`, `next`): `Promiseable`\<`IBlueprint`\>

Defined in: [use-react/src/middleware/BlueprintMiddleware.ts:268](https://github.com/stonemjs/use-react/blob/a85b32b76e105a7bc655ce084e0841ade8b0df8a/src/middleware/BlueprintMiddleware.ts#L268)

Blueprint middleware to process and register layout definitions from modules.

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
SetReactPageLayoutMiddleware(context, next)
```
