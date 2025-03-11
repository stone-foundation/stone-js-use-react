[**Use React Documentation v0.0.2**](../../README.md)

***

[Use React Documentation](../../modules.md) / [UseReactComponentUtils](../README.md) / buildPageComponent

# Function: buildPageComponent()

> **buildPageComponent**(`event`, `container`, `component`?, `data`?, `statusCode`?, `error`?): `ReactNode`

Defined in: [use-react/src/UseReactComponentUtils.ts:116](https://github.com/stonemjs/use-react/blob/4786d31a3beb1c9f15eb30e2c9c2b12c786b755a/src/UseReactComponentUtils.ts#L116)

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

The status code of the error.

### error?

`any`

The error object.

## Returns

`ReactNode`

The resolved component element.
