[**Use React Documentation v0.0.2**](../../README.md)

***

[Use React Documentation](../../modules.md) / [UseReactComponentUtils](../README.md) / buildAppComponent

# Function: buildAppComponent()

> **buildAppComponent**(`event`, `container`, `component`?, `layout`?, `data`?, `statusCode`?, `error`?): `Promise`\<`ReactNode`\>

Defined in: [use-react/src/UseReactComponentUtils.ts:49](https://github.com/stonemjs/use-react/blob/4786d31a3beb1c9f15eb30e2c9c2b12c786b755a/src/UseReactComponentUtils.ts#L49)

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
