[**Use React Documentation v0.0.2**](../../../README.md)

***

[Use React Documentation](../../../modules.md) / [middleware/configMiddleware](../README.md) / ReactPageLayoutMiddleware

# Function: ReactPageLayoutMiddleware()

> **ReactPageLayoutMiddleware**(`context`, `next`): `Promiseable`\<`IBlueprint`\>

Defined in: [use-react/src/middleware/configMiddleware.ts:158](https://github.com/stonemjs/use-react/blob/35b6e6a63b128df8b7d2db68dda3eb3286adfc69/src/middleware/configMiddleware.ts#L158)

Middleware to process and register layout definitions from modules.

## Parameters

### context

`ConfigContext`\<`IBlueprint`, `ClassType`\>

The configuration context containing modules and blueprint.

### next

`NextPipe`\<`ConfigContext`\<`IBlueprint`, `ClassType`\>, `IBlueprint`\>

The next pipeline function to continue processing.

## Returns

`Promiseable`\<`IBlueprint`\>

The updated blueprint or a promise resolving to it.

## Example

```typescript
ReactPageLayoutMiddleware(context, next)
```
