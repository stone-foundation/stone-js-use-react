[**Use React Documentation v0.0.2**](../../README.md)

***

[Use React Documentation](../../modules.md) / [UseReactPageInternals](../README.md) / resolveLazyComponent

# Function: resolveLazyComponent()

> **resolveLazyComponent**(`metaComponent`?): `Promise`\<`undefined` \| [`MetaPageLayout`](../../declarations/interfaces/MetaPageLayout.md) \| [`MetaPage`](../../declarations/interfaces/MetaPage.md)\<[`ReactIncomingEvent`](../../declarations/type-aliases/ReactIncomingEvent.md)\> \| [`MetaErrorPage`](../../declarations/interfaces/MetaErrorPage.md)\<[`ReactIncomingEvent`](../../declarations/type-aliases/ReactIncomingEvent.md)\> \| [`MetaAdapterErrorPage`](../../declarations/interfaces/MetaAdapterErrorPage.md)\<`any`, `any`, `any`\>\>

Defined in: [use-react/src/UseReactPageInternals.ts:221](https://github.com/stonemjs/use-react/blob/0635de04acc6b3a5c28dcf07d1e12a39a8b5e0b9/src/UseReactPageInternals.ts#L221)

Resolve lazy loaded components.

## Parameters

### metaComponent?

The meta component event handler.

[`MetaPageLayout`](../../declarations/interfaces/MetaPageLayout.md) | [`MetaPage`](../../declarations/interfaces/MetaPage.md)\<[`ReactIncomingEvent`](../../declarations/type-aliases/ReactIncomingEvent.md)\> | [`MetaErrorPage`](../../declarations/interfaces/MetaErrorPage.md)\<[`ReactIncomingEvent`](../../declarations/type-aliases/ReactIncomingEvent.md)\> | [`MetaAdapterErrorPage`](../../declarations/interfaces/MetaAdapterErrorPage.md)\<`any`, `any`, `any`\>

## Returns

`Promise`\<`undefined` \| [`MetaPageLayout`](../../declarations/interfaces/MetaPageLayout.md) \| [`MetaPage`](../../declarations/interfaces/MetaPage.md)\<[`ReactIncomingEvent`](../../declarations/type-aliases/ReactIncomingEvent.md)\> \| [`MetaErrorPage`](../../declarations/interfaces/MetaErrorPage.md)\<[`ReactIncomingEvent`](../../declarations/type-aliases/ReactIncomingEvent.md)\> \| [`MetaAdapterErrorPage`](../../declarations/interfaces/MetaAdapterErrorPage.md)\<`any`, `any`, `any`\>\>

The resolved element type.
