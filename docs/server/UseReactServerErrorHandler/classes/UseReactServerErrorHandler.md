[**Use React Documentation v0.0.2**](../../../README.md)

***

[Use React Documentation](../../../modules.md) / [server/UseReactServerErrorHandler](../README.md) / UseReactServerErrorHandler

# Class: UseReactServerErrorHandler

Defined in: [use-react/src/server/UseReactServerErrorHandler.ts:19](https://github.com/stonemjs/use-react/blob/35b6e6a63b128df8b7d2db68dda3eb3286adfc69/src/server/UseReactServerErrorHandler.ts#L19)

Class representing an UseReactServerErrorHandler.

Adapter level error handler for React applications.

## Implements

- `IAdapterErrorHandler`\<`unknown`, `unknown`, `unknown`\>

## Constructors

### new UseReactServerErrorHandler()

> **new UseReactServerErrorHandler**(`options`): [`UseReactServerErrorHandler`](UseReactServerErrorHandler.md)

Defined in: [use-react/src/server/UseReactServerErrorHandler.ts:28](https://github.com/stonemjs/use-react/blob/35b6e6a63b128df8b7d2db68dda3eb3286adfc69/src/server/UseReactServerErrorHandler.ts#L28)

Create an UseReactServerErrorHandler.

#### Parameters

##### options

[`UseReactServerErrorHandlerOptions`](../interfaces/UseReactServerErrorHandlerOptions.md)

UseReactServerErrorHandler options.

#### Returns

[`UseReactServerErrorHandler`](UseReactServerErrorHandler.md)

## Methods

### handle()

> **handle**(`error`, `context`): `Promise`\<`unknown`\>

Defined in: [use-react/src/server/UseReactServerErrorHandler.ts:40](https://github.com/stonemjs/use-react/blob/35b6e6a63b128df8b7d2db68dda3eb3286adfc69/src/server/UseReactServerErrorHandler.ts#L40)

Handle an error.

#### Parameters

##### error

`any`

The error to handle.

##### context

`AdapterErrorContext`\<`unknown`, `unknown`, `unknown`\>

The context of the adapter.

#### Returns

`Promise`\<`unknown`\>

The raw response.

#### Implementation of

`IAdapterErrorHandler.handle`
