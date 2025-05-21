[**Use React Documentation v0.0.2**](../../../README.md)

***

[Use React Documentation](../../../modules.md) / [middleware/BlueprintMiddleware](../README.md) / SetUseReactEventHandlerMiddleware

# Function: SetUseReactEventHandlerMiddleware()

> **SetUseReactEventHandlerMiddleware**(`context`, `next`): `Promise`\<`IBlueprint`\>

Defined in: [use-react/src/middleware/BlueprintMiddleware.ts:281](https://github.com/stonemjs/use-react/blob/9a749b225241b8e0ac2a5483904ca8322927b1d4/src/middleware/BlueprintMiddleware.ts#L281)

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
