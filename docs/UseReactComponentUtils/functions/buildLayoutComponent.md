[**Use React Documentation v0.0.2**](../../README.md)

***

[Use React Documentation](../../modules.md) / [UseReactComponentUtils](../README.md) / buildLayoutComponent

# Function: buildLayoutComponent()

> **buildLayoutComponent**(`container`, `children`, `layoutName`?): `Promise`\<`ReactNode`\>

Defined in: [use-react/src/UseReactComponentUtils.ts:76](https://github.com/stonemjs/use-react/blob/9a749b225241b8e0ac2a5483904ca8322927b1d4/src/UseReactComponentUtils.ts#L76)

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
