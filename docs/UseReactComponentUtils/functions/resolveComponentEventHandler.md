[**Use React Documentation v0.0.2**](../../README.md)

***

[Use React Documentation](../../modules.md) / [UseReactComponentUtils](../README.md) / resolveComponentEventHandler

# Function: resolveComponentEventHandler()

> **resolveComponentEventHandler**(`container`, `metaComponent`?): `Promise`\<`undefined` \| `IComponentEventHandler`\<[`ReactIncomingEvent`](../../declarations/type-aliases/ReactIncomingEvent.md)\>\>

Defined in: [use-react/src/UseReactComponentUtils.ts:191](https://github.com/stonemjs/use-react/blob/4786d31a3beb1c9f15eb30e2c9c2b12c786b755a/src/UseReactComponentUtils.ts#L191)

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

`Promise`\<`undefined` \| `IComponentEventHandler`\<[`ReactIncomingEvent`](../../declarations/type-aliases/ReactIncomingEvent.md)\>\>

The resolved element type.
