[**Use React Documentation v0.0.2**](../../README.md)

***

[Use React Documentation](../../modules.md) / [UseReactPageInternals](../README.md) / buildLayoutComponent

# Function: buildLayoutComponent()

> **buildLayoutComponent**(`container`, `children`, `layoutName`?): `Promise`\<`ReactNode`\>

Defined in: [use-react/src/UseReactPageInternals.ts:92](https://github.com/stonemjs/use-react/blob/0635de04acc6b3a5c28dcf07d1e12a39a8b5e0b9/src/UseReactPageInternals.ts#L92)

Get response layout in the current route for mutli pages application.
Or get it from the blueprint configuration for single page application.
Or get the default layout defined by the user.
If not defined, return undefined.

## Parameters

### container

`Container`

Service Container.

### children

`ReactNode`

The children to render.

### layoutName?

`unknown`

The layout name.

## Returns

`Promise`\<`ReactNode`\>

The resolved layout element.
