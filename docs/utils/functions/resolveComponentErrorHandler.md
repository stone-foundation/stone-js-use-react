[**Use React Documentation v0.0.2**](../../README.md)

***

[Use React Documentation](../../modules.md) / [utils](../README.md) / resolveComponentErrorHandler

# Function: resolveComponentErrorHandler()

> **resolveComponentErrorHandler**(`container`, `metaComponent`?): `Promise`\<`undefined` \| [`IComponentErrorHandler`](../../declarations/interfaces/IComponentErrorHandler.md)\<[`ReactIncomingEvent`](../../declarations/type-aliases/ReactIncomingEvent.md)\>\>

Defined in: [use-react/src/utils.ts:209](https://github.com/stonemjs/use-react/blob/35b6e6a63b128df8b7d2db68dda3eb3286adfc69/src/utils.ts#L209)

Resolve the error handler for the component.

Can also resolve dynamically loaded components.

## Parameters

### container

`Container`

The service container.

### metaComponent?

[`MetaComponentErrorHandler`](../../declarations/interfaces/MetaComponentErrorHandler.md)\<[`ReactIncomingEvent`](../../declarations/type-aliases/ReactIncomingEvent.md)\>

The meta component error handler.

## Returns

`Promise`\<`undefined` \| [`IComponentErrorHandler`](../../declarations/interfaces/IComponentErrorHandler.md)\<[`ReactIncomingEvent`](../../declarations/type-aliases/ReactIncomingEvent.md)\>\>

The resolved error handler.
