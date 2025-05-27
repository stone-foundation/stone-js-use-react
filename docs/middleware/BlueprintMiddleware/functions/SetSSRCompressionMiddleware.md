[**Use React Documentation v0.0.2**](../../../README.md)

***

[Use React Documentation](../../../modules.md) / [middleware/BlueprintMiddleware](../README.md) / SetSSRCompressionMiddleware

# Function: SetSSRCompressionMiddleware()

> **SetSSRCompressionMiddleware**(`context`, `next`): `Promise`\<`IBlueprint`\>

Defined in: [use-react/src/middleware/BlueprintMiddleware.ts:213](https://github.com/stonemjs/use-react/blob/0635de04acc6b3a5c28dcf07d1e12a39a8b5e0b9/src/middleware/BlueprintMiddleware.ts#L213)

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
