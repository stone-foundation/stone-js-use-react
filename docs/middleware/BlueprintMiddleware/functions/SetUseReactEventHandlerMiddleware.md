[**Use React Documentation v0.0.2**](../../../README.md)

***

[Use React Documentation](../../../modules.md) / [middleware/BlueprintMiddleware](../README.md) / SetUseReactEventHandlerMiddleware

# Function: SetUseReactEventHandlerMiddleware()

> **SetUseReactEventHandlerMiddleware**(`context`, `next`): `Promise`\<`IBlueprint`\>

Defined in: [use-react/src/middleware/BlueprintMiddleware.ts:297](https://github.com/stonemjs/use-react/blob/0635de04acc6b3a5c28dcf07d1e12a39a8b5e0b9/src/middleware/BlueprintMiddleware.ts#L297)

Blueprint middleware to set the UseReact as the main event handler for the application.

Set as fallback event handler if none of the other event handlers are registered.

## Parameters

### context

`BlueprintContext`\<`IBlueprint`, `ClassType`\>

The configuration context containing modules and blueprint.

### next

`NextPipe`\<`BlueprintContext`\<`IBlueprint`, `ClassType`\>, `IBlueprint`\>

The next function in the pipeline.

## Returns

`Promise`\<`IBlueprint`\>

The updated blueprint.

## Example

```typescript
SetUseReactEventHandlerMiddleware({ modules, blueprint }, next);
```
