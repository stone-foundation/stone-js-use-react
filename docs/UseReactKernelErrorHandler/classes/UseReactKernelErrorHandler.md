[**Use React Documentation v0.0.2**](../../README.md)

***

[Use React Documentation](../../modules.md) / [UseReactKernelErrorHandler](../README.md) / UseReactKernelErrorHandler

# Class: UseReactKernelErrorHandler

Defined in: [use-react/src/UseReactKernelErrorHandler.ts:17](https://github.com/stonemjs/use-react/blob/0635de04acc6b3a5c28dcf07d1e12a39a8b5e0b9/src/UseReactKernelErrorHandler.ts#L17)

Class representing an UseReactUseReactKernelErrorHandler.

Kernel level error handler for React applications.

## Implements

- `IErrorHandler`\<[`ReactIncomingEvent`](../../declarations/type-aliases/ReactIncomingEvent.md), [`UseReactErrorResponseType`](../type-aliases/UseReactErrorResponseType.md)\>

## Constructors

### new UseReactKernelErrorHandler()

> **new UseReactKernelErrorHandler**(`options`): [`UseReactKernelErrorHandler`](UseReactKernelErrorHandler.md)

Defined in: [use-react/src/UseReactKernelErrorHandler.ts:28](https://github.com/stonemjs/use-react/blob/0635de04acc6b3a5c28dcf07d1e12a39a8b5e0b9/src/UseReactKernelErrorHandler.ts#L28)

Create an UseReactUseReactKernelErrorHandler.

#### Parameters

##### options

UseReactUseReactKernelErrorHandler options.

###### blueprint

`IBlueprint`

#### Returns

[`UseReactKernelErrorHandler`](UseReactKernelErrorHandler.md)

## Methods

### handle()

> **handle**(`error`): [`UseReactErrorResponseType`](../type-aliases/UseReactErrorResponseType.md)

Defined in: [use-react/src/UseReactKernelErrorHandler.ts:38](https://github.com/stonemjs/use-react/blob/0635de04acc6b3a5c28dcf07d1e12a39a8b5e0b9/src/UseReactKernelErrorHandler.ts#L38)

Handle an error.

#### Parameters

##### error

`any`

The error to handle.

#### Returns

[`UseReactErrorResponseType`](../type-aliases/UseReactErrorResponseType.md)

The outgoing http response.

#### Implementation of

`IErrorHandler.handle`
