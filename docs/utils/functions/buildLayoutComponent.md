[**Use React Documentation v0.0.2**](../../README.md)

***

[Use React Documentation](../../modules.md) / [utils](../README.md) / buildLayoutComponent

# Function: buildLayoutComponent()

> **buildLayoutComponent**(`event`, `container`, `children`, `layoutName`?, `data`?, `statusCode`?, `error`?): `Promise`\<`ReactNode`\>

Defined in: [use-react/src/utils.ts:68](https://github.com/stonemjs/use-react/blob/35b6e6a63b128df8b7d2db68dda3eb3286adfc69/src/utils.ts#L68)

Get response layout in the current route for mutli pages application.
Or get it from the blueprint configuration for single page application.
Or get the default layout defined by the user.
If not defined, return undefined.

## Parameters

### event

[`ReactIncomingEvent`](../../declarations/type-aliases/ReactIncomingEvent.md)

ReactIncomingEvent

### container

`Container`

Service Container

### children

`ReactNode`

The children to render.

### layoutName?

`unknown`

The layout name.

### data?

`any`

The data to pass to the layout.

### statusCode?

`number`

### error?

`any`

## Returns

`Promise`\<`ReactNode`\>

The resolved layout element.
