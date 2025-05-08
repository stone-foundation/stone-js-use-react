[**Use React Documentation v0.0.2**](../../README.md)

***

[Use React Documentation](../../modules.md) / [UseReactComponentUtils](../README.md) / resolveComponentEventHandler

# Function: resolveComponentEventHandler()

> **resolveComponentEventHandler**(`container`, `metaComponent`?): `Promise`\<`undefined` \| [`IComponentEventHandler`](../../declarations/interfaces/IComponentEventHandler.md)\<[`ReactIncomingEvent`](../../declarations/type-aliases/ReactIncomingEvent.md)\>\>

Defined in: [use-react/src/UseReactComponentUtils.ts:189](https://github.com/stonemjs/use-react/blob/50c96852bd65a75b7f2a00786393fb0c90af6da8/src/UseReactComponentUtils.ts#L189)

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
