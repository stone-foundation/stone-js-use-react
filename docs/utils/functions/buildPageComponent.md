[**Use React Documentation v0.0.2**](../../README.md)

***

[Use React Documentation](../../modules.md) / [utils](../README.md) / buildPageComponent

# Function: buildPageComponent()

> **buildPageComponent**(`event`, `container`, `component`?, `data`?, `statusCode`?, `error`?): `ReactNode`

Defined in: [use-react/src/utils.ts:101](https://github.com/stonemjs/use-react/blob/35b6e6a63b128df8b7d2db68dda3eb3286adfc69/src/utils.ts#L101)

Get response component in the current route.
If not defined, return an empty object.

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

### data?

`any`

The data to pass to the component.

### statusCode?

`number`

### error?

`any`

## Returns

`ReactNode`

The resolved component element.
