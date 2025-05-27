[**Use React Documentation v0.0.2**](../../README.md)

***

[Use React Documentation](../../modules.md) / [UseReactServerErrorHandler](../README.md) / UseReactServerErrorHandler

# Class: UseReactServerErrorHandler

Defined in: [use-react/src/UseReactServerErrorHandler.ts:25](https://github.com/stonemjs/use-react/blob/0635de04acc6b3a5c28dcf07d1e12a39a8b5e0b9/src/UseReactServerErrorHandler.ts#L25)

Class representing an UseReactServerErrorHandler.

Adapter level error handler for React applications.

## Implements

- `IAdapterErrorHandler`\<`unknown`, `unknown`, `unknown`\>

## Constructors

### new UseReactServerErrorHandler()

> **new UseReactServerErrorHandler**(`options`): [`UseReactServerErrorHandler`](UseReactServerErrorHandler.md)

Defined in: [use-react/src/UseReactServerErrorHandler.ts:34](https://github.com/stonemjs/use-react/blob/0635de04acc6b3a5c28dcf07d1e12a39a8b5e0b9/src/UseReactServerErrorHandler.ts#L34)

Create an UseReactServerErrorHandler.

#### Parameters

##### options

[`UseReactServerErrorHandlerOptions`](../interfaces/UseReactServerErrorHandlerOptions.md)

UseReactServerErrorHandler options.

#### Returns

[`UseReactServerErrorHandler`](UseReactServerErrorHandler.md)

## Methods

### handle()

> **handle**(`error`, `context`): `Promise`\<`AdapterEventBuilderType`\<`unknown`\>\>

Defined in: [use-react/src/UseReactServerErrorHandler.ts:46](https://github.com/stonemjs/use-react/blob/0635de04acc6b3a5c28dcf07d1e12a39a8b5e0b9/src/UseReactServerErrorHandler.ts#L46)

Handle an error.

#### Parameters

##### error

`any`

The error to handle.

##### context

`AdapterErrorContext`\<`unknown`, `unknown`, `unknown`\>

The context of the adapter.

#### Returns

`Promise`\<`AdapterEventBuilderType`\<`unknown`\>\>

The raw response.

#### Implementation of

`IAdapterErrorHandler.handle`
