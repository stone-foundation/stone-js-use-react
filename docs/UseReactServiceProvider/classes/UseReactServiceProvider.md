[**Use React Documentation v0.0.2**](../../README.md)

***

[Use React Documentation](../../modules.md) / [UseReactServiceProvider](../README.md) / UseReactServiceProvider

# Class: UseReactServiceProvider

Defined in: [use-react/src/UseReactServiceProvider.ts:9](https://github.com/stonemjs/use-react/blob/48b0fa89405b138aef5b9a5bc1a85e12108c1404/src/UseReactServiceProvider.ts#L9)

Class representing a UseReactServiceProvider.

## Author

Mr. Stone <evensstone@gmail.com>

## Implements

- `IServiceProvider`\<[`ReactIncomingEvent`](../../declarations/type-aliases/ReactIncomingEvent.md), [`ReactOutgoingResponse`](../../declarations/type-aliases/ReactOutgoingResponse.md)\>

## Constructors

### new UseReactServiceProvider()

> **new UseReactServiceProvider**(): [`UseReactServiceProvider`](UseReactServiceProvider.md)

#### Returns

[`UseReactServiceProvider`](UseReactServiceProvider.md)

## Methods

### mustSkip()

> **mustSkip**(): `boolean`

Defined in: [use-react/src/UseReactServiceProvider.ts:16](https://github.com/stonemjs/use-react/blob/48b0fa89405b138aef5b9a5bc1a85e12108c1404/src/UseReactServiceProvider.ts#L16)

Determines if the provider should be skipped.

#### Returns

`boolean`

True if the provider should be skipped, false otherwise

#### Remarks

This method is used to skip the provider during SSR.

#### Implementation of

`IServiceProvider.mustSkip`

***

### onPrepare()

> **onPrepare**(): `Promise`\<`void`\>

Defined in: [use-react/src/UseReactServiceProvider.ts:26](https://github.com/stonemjs/use-react/blob/48b0fa89405b138aef5b9a5bc1a85e12108c1404/src/UseReactServiceProvider.ts#L26)

Hook that runs once after the context is created.

The browser adapter only execute onInit and onPrepare hooks we first loaded.
As Stone.js is an event-driven framework, we need to dispatch an event to continue with the flow.

#### Returns

`Promise`\<`void`\>

#### Implementation of

`IServiceProvider.onPrepare`
