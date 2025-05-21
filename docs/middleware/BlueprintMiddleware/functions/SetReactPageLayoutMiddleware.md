[**Use React Documentation v0.0.2**](../../../README.md)

***

[Use React Documentation](../../../modules.md) / [middleware/BlueprintMiddleware](../README.md) / SetReactPageLayoutMiddleware

# Function: SetReactPageLayoutMiddleware()

> **SetReactPageLayoutMiddleware**(`context`, `next`): `Promiseable`\<`IBlueprint`\>

Defined in: [use-react/src/middleware/BlueprintMiddleware.ts:252](https://github.com/stonemjs/use-react/blob/9a749b225241b8e0ac2a5483904ca8322927b1d4/src/middleware/BlueprintMiddleware.ts#L252)

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
