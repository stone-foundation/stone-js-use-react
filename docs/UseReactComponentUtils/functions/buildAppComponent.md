[**Use React Documentation v0.0.2**](../../README.md)

***

[Use React Documentation](../../modules.md) / [UseReactComponentUtils](../README.md) / buildAppComponent

# Function: buildAppComponent()

> **buildAppComponent**(`event`, `container`, `component`?, `layout`?, `data`?, `statusCode`?, `error`?): `Promise`\<`ReactNode`\>

Defined in: [use-react/src/UseReactComponentUtils.ts:49](https://github.com/stonemjs/use-react/blob/27c0c592da81eceb639bfca4a4a8f24a448ad89c/src/UseReactComponentUtils.ts#L49)

Build the React application for the current route.
Or for the main handler if the route is not defined.

## Parameters

### event

[`ReactIncomingEvent`](../../declarations/type-aliases/ReactIncomingEvent.md)

ReactIncomingEvent

### container

`Container`

Service Container

### component?

`unknown`

The component response.

### layout?

`unknown`

The layout response.

### data?

`any`

The data to pass to the component.

### statusCode?

`number`

### error?

`any`

## Returns

`Promise`\<`ReactNode`\>

The resolved ReactNode.
