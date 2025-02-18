[**Use React Documentation v0.0.2**](../../README.md)

***

[Use React Documentation](../../modules.md) / [utils](../README.md) / buildAppComponent

# Function: buildAppComponent()

> **buildAppComponent**(`event`, `container`, `component`?, `layout`?, `data`?, `statusCode`?, `error`?): `Promise`\<`ReactNode`\>

Defined in: [use-react/src/utils.ts:38](https://github.com/stonemjs/use-react/blob/35b6e6a63b128df8b7d2db68dda3eb3286adfc69/src/utils.ts#L38)

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
