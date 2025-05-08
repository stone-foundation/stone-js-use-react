[**Use React Documentation v0.0.2**](../../README.md)

***

[Use React Documentation](../../modules.md) / [UseReactComponentUtils](../README.md) / buildPageComponent

# Function: buildPageComponent()

> **buildPageComponent**(`event`, `container`, `component`?, `data`?, `statusCode`?, `error`?): `ReactNode`

Defined in: [use-react/src/UseReactComponentUtils.ts:114](https://github.com/stonemjs/use-react/blob/50c96852bd65a75b7f2a00786393fb0c90af6da8/src/UseReactComponentUtils.ts#L114)

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
