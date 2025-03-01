[**Use React Documentation v0.0.2**](../../README.md)

***

[Use React Documentation](../../modules.md) / [UseReactKernelErrorHandler](../README.md) / UseReactKernelErrorHandler

# Class: UseReactKernelErrorHandler

Defined in: [use-react/src/UseReactKernelErrorHandler.ts:16](https://github.com/stonemjs/use-react/blob/d8ec502192c16b8752fc9e1bf85bd5600bcf9813/src/UseReactKernelErrorHandler.ts#L16)

Class representing an UseReactUseReactKernelErrorHandler.

Kernel level error handler for React applications.

## Implements

- `IErrorHandler`\<[`ReactIncomingEvent`](../../declarations/type-aliases/ReactIncomingEvent.md), `Partial`\<[`MetaComponentErrorHandler`](../../declarations/interfaces/MetaComponentErrorHandler.md)\<[`ReactIncomingEvent`](../../declarations/type-aliases/ReactIncomingEvent.md)\>\>\>

## Constructors

### new UseReactKernelErrorHandler()

> **new UseReactKernelErrorHandler**(`options`): [`UseReactKernelErrorHandler`](UseReactKernelErrorHandler.md)

Defined in: [use-react/src/UseReactKernelErrorHandler.ts:27](https://github.com/stonemjs/use-react/blob/d8ec502192c16b8752fc9e1bf85bd5600bcf9813/src/UseReactKernelErrorHandler.ts#L27)

Create an UseReactUseReactKernelErrorHandler.

#### Parameters

##### options

[`UseReactKernelErrorHandlerOptions`](../interfaces/UseReactKernelErrorHandlerOptions.md)

UseReactUseReactKernelErrorHandler options.

#### Returns

[`UseReactKernelErrorHandler`](UseReactKernelErrorHandler.md)

## Methods

### handle()

> **handle**(`error`): `Partial`\<[`MetaComponentErrorHandler`](../../declarations/interfaces/MetaComponentErrorHandler.md)\<[`ReactIncomingEvent`](../../declarations/type-aliases/ReactIncomingEvent.md)\>\>

Defined in: [use-react/src/UseReactKernelErrorHandler.ts:37](https://github.com/stonemjs/use-react/blob/d8ec502192c16b8752fc9e1bf85bd5600bcf9813/src/UseReactKernelErrorHandler.ts#L37)

Handle an error.

#### Parameters

##### error

`any`

The error to handle.

#### Returns

`Partial`\<[`MetaComponentErrorHandler`](../../declarations/interfaces/MetaComponentErrorHandler.md)\<[`ReactIncomingEvent`](../../declarations/type-aliases/ReactIncomingEvent.md)\>\>

The outgoing http response.

#### Implementation of

`IErrorHandler.handle`
