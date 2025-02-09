[**Use React Documentation v0.0.2**](../../README.md)

***

[Use React Documentation](../../modules.md) / [utils](../README.md) / resolveComponentErrorHandler

# Function: resolveComponentErrorHandler()

> **resolveComponentErrorHandler**(`container`, `metaComponent`?): `Promise`\<`undefined` \| [`IComponentErrorHandler`](../../declarations/interfaces/IComponentErrorHandler.md)\<[`ReactIncomingEvent`](../../declarations/type-aliases/ReactIncomingEvent.md)\>\>

Defined in: [use-react/src/utils.ts:221](https://github.com/stonemjs/use-react/blob/48b0fa89405b138aef5b9a5bc1a85e12108c1404/src/utils.ts#L221)

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
