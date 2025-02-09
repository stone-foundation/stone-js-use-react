[**Use React Documentation v0.0.2**](../../../README.md)

***

[Use React Documentation](../../../modules.md) / [middleware/configMiddleware](../README.md) / SetBrowserResponseMiddlewareMiddleware

# Function: SetBrowserResponseMiddlewareMiddleware()

> **SetBrowserResponseMiddlewareMiddleware**(`context`, `next`): `Promise`\<`IBlueprint`\>

Defined in: [use-react/src/middleware/configMiddleware.ts:99](https://github.com/stonemjs/use-react/blob/48b0fa89405b138aef5b9a5bc1a85e12108c1404/src/middleware/configMiddleware.ts#L99)

Middleware to set BrowserResponseMiddleware for Browser adapter.

## Parameters

### context

`ConfigContext`\<`IBlueprint`, `ClassType`\>

The configuration context containing modules and blueprint.

### next

`NextPipe`\<`ConfigContext`\<`IBlueprint`, `ClassType`\>, `IBlueprint`\>

The next pipeline function to continue processing.

## Returns

`Promise`\<`IBlueprint`\>

The updated blueprint or a promise resolving to it.

## Example

```typescript
SetBrowserResponseMiddlewareMiddleware(context, next)
```
