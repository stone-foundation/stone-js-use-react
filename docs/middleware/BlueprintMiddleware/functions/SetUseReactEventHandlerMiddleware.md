[**Use React Documentation v0.0.2**](../../../README.md)

***

[Use React Documentation](../../../modules.md) / [middleware/BlueprintMiddleware](../README.md) / SetUseReactEventHandlerMiddleware

# Function: SetUseReactEventHandlerMiddleware()

> **SetUseReactEventHandlerMiddleware**(`context`, `next`): `Promise`\<`IBlueprint`\>

Defined in: use-react/src/middleware/BlueprintMiddleware.ts:290

Blueprint middleware to set the UseReact as the main event handler for the application.

The SetRouterEventHandlerMiddleware takes precedence over the SetUseReactEventHandlerMiddleware.

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
