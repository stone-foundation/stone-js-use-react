[**Use React Documentation v0.0.2**](../../README.md)

***

[Use React Documentation](../../modules.md) / [utils](../README.md) / buildLayoutComponent

# Function: buildLayoutComponent()

> **buildLayoutComponent**(`event`, `container`, `children`, `layoutName`?, `data`?, `statusCode`?, `error`?): `Promise`\<`ReactNode`\>

Defined in: [use-react/src/utils.ts:70](https://github.com/stonemjs/use-react/blob/48b0fa89405b138aef5b9a5bc1a85e12108c1404/src/utils.ts#L70)

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
