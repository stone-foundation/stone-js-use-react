[**Use React Documentation v0.0.2**](../../README.md)

***

[Use React Documentation](../../modules.md) / [utils](../README.md) / resolveComponentEventHandler

# Function: resolveComponentEventHandler()

> **resolveComponentEventHandler**(`container`, `metaComponent`?): `Promise`\<`undefined` \| `IComponentEventHandler`\<[`ReactIncomingEvent`](../../declarations/type-aliases/ReactIncomingEvent.md)\>\>

Defined in: [use-react/src/utils.ts:182](https://github.com/stonemjs/use-react/blob/35b6e6a63b128df8b7d2db68dda3eb3286adfc69/src/utils.ts#L182)

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
