[**Use React Documentation v0.0.2**](../../README.md)

***

[Use React Documentation](../../modules.md) / [UseReactPageInternals](../README.md) / buildAppComponent

# Function: buildAppComponent()

> **buildAppComponent**(`event`, `container`, `component`?, `layout`?, `data`?, `statusCode`?, `error`?): `Promise`\<`ReactNode`\>

Defined in: [use-react/src/UseReactPageInternals.ts:64](https://github.com/stonemjs/use-react/blob/0635de04acc6b3a5c28dcf07d1e12a39a8b5e0b9/src/UseReactPageInternals.ts#L64)

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

`ElementType`

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
