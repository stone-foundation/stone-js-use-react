[**Use React Documentation v0.0.2**](../../README.md)

***

[Use React Documentation](../../modules.md) / [UseReactPageInternals](../README.md) / buildPageComponent

# Function: buildPageComponent()

> **buildPageComponent**(`event`, `container`, `component`?, `data`?, `statusCode`?, `error`?): `ReactNode`

Defined in: [use-react/src/UseReactPageInternals.ts:123](https://github.com/stonemjs/use-react/blob/0635de04acc6b3a5c28dcf07d1e12a39a8b5e0b9/src/UseReactPageInternals.ts#L123)

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

`ElementType`

The component response.

### data?

`any`

The data to pass to the component.

### statusCode?

`number`

The status code of the error.

### error?

`any`

The error object.

## Returns

`ReactNode`

The resolved component element.
