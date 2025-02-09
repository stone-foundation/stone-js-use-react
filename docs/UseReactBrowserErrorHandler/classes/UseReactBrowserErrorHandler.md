[**Use React Documentation v0.0.2**](../../README.md)

***

[Use React Documentation](../../modules.md) / [UseReactBrowserErrorHandler](../README.md) / UseReactBrowserErrorHandler

# Class: UseReactBrowserErrorHandler

Defined in: use-react/src/UseReactBrowserErrorHandler.ts:19

Class representing an UseReactBrowserErrorHandler.

Adapter level error handler for React applications.

## Implements

- `IAdapterErrorHandler`\<`unknown`, `unknown`, `unknown`\>

## Constructors

### new UseReactBrowserErrorHandler()

> **new UseReactBrowserErrorHandler**(`options`): [`UseReactBrowserErrorHandler`](UseReactBrowserErrorHandler.md)

Defined in: use-react/src/UseReactBrowserErrorHandler.ts:28

Create an UseReactBrowserErrorHandler.

#### Parameters

##### options

[`UseReactBrowserErrorHandlerOptions`](../interfaces/UseReactBrowserErrorHandlerOptions.md)

UseReactBrowserErrorHandler options.

#### Returns

[`UseReactBrowserErrorHandler`](UseReactBrowserErrorHandler.md)

## Methods

### handle()

> **handle**(`error`, `context`): `Promise`\<`unknown`\>

Defined in: use-react/src/UseReactBrowserErrorHandler.ts:47

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
