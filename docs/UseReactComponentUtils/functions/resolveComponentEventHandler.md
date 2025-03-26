[**Use React Documentation v0.0.2**](../../README.md)

***

[Use React Documentation](../../modules.md) / [UseReactComponentUtils](../README.md) / resolveComponentEventHandler

# Function: resolveComponentEventHandler()

> **resolveComponentEventHandler**(`container`, `metaComponent`?): `Promise`\<`undefined` \| [`IComponentEventHandler`](../../declarations/interfaces/IComponentEventHandler.md)\<[`ReactIncomingEvent`](../../declarations/type-aliases/ReactIncomingEvent.md)\>\>

Defined in: [use-react/src/UseReactComponentUtils.ts:191](https://github.com/stonemjs/use-react/blob/27c0c592da81eceb639bfca4a4a8f24a448ad89c/src/UseReactComponentUtils.ts#L191)

Resolve the event handler for the component.

Can also resolve dynamically loaded components.

## Parameters

### container

`Container`

The service container.

### metaComponent?

`MetaComponentEventHandler`\<[`ReactIncomingEvent`](../../declarations/type-aliases/ReactIncomingEvent.md)\>

The meta component event handler.

## Returns

`Promise`\<`undefined` \| [`IComponentEventHandler`](../../declarations/interfaces/IComponentEventHandler.md)\<[`ReactIncomingEvent`](../../declarations/type-aliases/ReactIncomingEvent.md)\>\>

The resolved element type.
