[**Use React Documentation v0.0.2**](../../../README.md)

***

[Use React Documentation](../../../modules.md) / [middleware/BlueprintMiddleware](../README.md) / SetBrowserResponseMiddlewareMiddleware

# Function: SetBrowserResponseMiddlewareMiddleware()

> **SetBrowserResponseMiddlewareMiddleware**(`context`, `next`): `Promise`\<`IBlueprint`\>

Defined in: [use-react/src/middleware/BlueprintMiddleware.ts:70](https://github.com/stonemjs/use-react/blob/0635de04acc6b3a5c28dcf07d1e12a39a8b5e0b9/src/middleware/BlueprintMiddleware.ts#L70)

Blueprint middleware to set BrowserResponseMiddleware for the Browser adapter.

The MetaBrowserResponseMiddleware is an adapter middleware and is useful
for handling outgoing responses and rendering them in the browser.

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
SetBrowserResponseMiddlewareMiddleware(context, next)
```
