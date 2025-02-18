[**Use React Documentation v0.0.2**](../../README.md)

***

[Use React Documentation](../../modules.md) / [UseReactServiceProvider](../README.md) / UseReactServiceProvider

# Class: UseReactServiceProvider

Defined in: [use-react/src/UseReactServiceProvider.ts:12](https://github.com/stonemjs/use-react/blob/35b6e6a63b128df8b7d2db68dda3eb3286adfc69/src/UseReactServiceProvider.ts#L12)

Class representing a UseReactServiceProvider.

## Author

Mr. Stone <evensstone@gmail.com>

## Implements

- `IServiceProvider`\<[`ReactIncomingEvent`](../../declarations/type-aliases/ReactIncomingEvent.md), [`ReactOutgoingResponse`](../../declarations/type-aliases/ReactOutgoingResponse.md)\>

## Constructors

### new UseReactServiceProvider()

> **new UseReactServiceProvider**(`container`): [`UseReactServiceProvider`](UseReactServiceProvider.md)

Defined in: [use-react/src/UseReactServiceProvider.ts:16](https://github.com/stonemjs/use-react/blob/35b6e6a63b128df8b7d2db68dda3eb3286adfc69/src/UseReactServiceProvider.ts#L16)

Create a new UseReactServiceProvider.

#### Parameters

##### container

`Container`

#### Returns

[`UseReactServiceProvider`](UseReactServiceProvider.md)

## Methods

### isSSR()

> **isSSR**(): `boolean`

Defined in: [use-react/src/UseReactServiceProvider.ts:23](https://github.com/stonemjs/use-react/blob/35b6e6a63b128df8b7d2db68dda3eb3286adfc69/src/UseReactServiceProvider.ts#L23)

Determine if the application is running on the server side.

#### Returns

`boolean`

True if the application is running on the server side, false otherwise.

***

### onPrepare()

> **onPrepare**(): `void`

Defined in: [use-react/src/UseReactServiceProvider.ts:33](https://github.com/stonemjs/use-react/blob/35b6e6a63b128df8b7d2db68dda3eb3286adfc69/src/UseReactServiceProvider.ts#L33)

Hook that runs once after the context is created.

The browser adapter only execute onStart and onPrepare hooks when first loaded.
As Stone.js is an event-driven framework, we need to dispatch an event to continue with the flow.

#### Returns

`void`

#### Implementation of

`IServiceProvider.onPrepare`
