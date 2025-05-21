[**Use React Documentation v0.0.2**](../../README.md)

***

[Use React Documentation](../../modules.md) / [UseReactComponentUtils](../README.md) / resolveComponent

# Function: resolveComponent()

> **resolveComponent**\<`T`\>(`container`, `metaComponent`?): `Promise`\<`undefined` \| `T`\>

Defined in: [use-react/src/UseReactComponentUtils.ts:187](https://github.com/stonemjs/use-react/blob/9a749b225241b8e0ac2a5483904ca8322927b1d4/src/UseReactComponentUtils.ts#L187)

Resolve the event handler for the component.

Can also resolve dynamically loaded components.

## Type Parameters

• **T** = [`IPageLayout`](../../declarations/interfaces/IPageLayout.md) \| [`IPage`](../../declarations/interfaces/IPage.md)\<[`ReactIncomingEvent`](../../declarations/type-aliases/ReactIncomingEvent.md)\> \| [`IErrorPage`](../../declarations/interfaces/IErrorPage.md)\<[`ReactIncomingEvent`](../../declarations/type-aliases/ReactIncomingEvent.md)\>

## Parameters

### container

`Container`

The service container.

### metaComponent?

The meta component event handler.

[`MetaPageLayout`](../../declarations/interfaces/MetaPageLayout.md) | [`MetaPage`](../../declarations/interfaces/MetaPage.md)\<[`ReactIncomingEvent`](../../declarations/type-aliases/ReactIncomingEvent.md)\> | [`MetaErrorPage`](../../declarations/interfaces/MetaErrorPage.md)\<[`ReactIncomingEvent`](../../declarations/type-aliases/ReactIncomingEvent.md)\>

## Returns

`Promise`\<`undefined` \| `T`\>

The resolved element type.
