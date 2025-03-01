[**Use React Documentation v0.0.2**](../../../README.md)

***

[Use React Documentation](../../../modules.md) / [middleware/BlueprintMiddleware](../README.md) / SetSSRCompressionMiddleware

# Function: SetSSRCompressionMiddleware()

> **SetSSRCompressionMiddleware**(`context`, `next`): `Promise`\<`IBlueprint`\>

Defined in: use-react/src/middleware/BlueprintMiddleware.ts:206

Blueprint middleware to set CompressionMiddleware for SSR adapter.

## Parameters

### context

`BlueprintContext`\<`IBlueprint`, `ClassType`\>

The configuration context containing modules and blueprint.

### next

`NextPipe`\<`BlueprintContext`\<`IBlueprint`, `ClassType`\>, `IBlueprint`\>

The next pipeline function to continue processing.

## Returns

`Promise`\<`IBlueprint`\>

The updated blueprint or a promise resolving to it.

## Example

```typescript
SetSSRCompressionMiddleware(context, next)
```
