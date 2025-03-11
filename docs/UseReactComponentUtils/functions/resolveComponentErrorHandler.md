[**Use React Documentation v0.0.2**](../../README.md)

***

[Use React Documentation](../../modules.md) / [UseReactComponentUtils](../README.md) / resolveComponentErrorHandler

# Function: resolveComponentErrorHandler()

> **resolveComponentErrorHandler**(`container`, `metaComponent`?): `Promise`\<`undefined` \| [`IComponentErrorHandler`](../../declarations/interfaces/IComponentErrorHandler.md)\<[`ReactIncomingEvent`](../../declarations/type-aliases/ReactIncomingEvent.md)\>\>

Defined in: [use-react/src/UseReactComponentUtils.ts:219](https://github.com/stonemjs/use-react/blob/4786d31a3beb1c9f15eb30e2c9c2b12c786b755a/src/UseReactComponentUtils.ts#L219)

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
