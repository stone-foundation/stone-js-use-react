[**Use React Documentation v0.0.2**](../../README.md)

***

[Use React Documentation](../../modules.md) / [UseReactBrowserErrorHandler](../README.md) / UseReactBrowserErrorHandler

# Class: UseReactBrowserErrorHandler

Defined in: [use-react/src/UseReactBrowserErrorHandler.ts:27](https://github.com/stonemjs/use-react/blob/9a749b225241b8e0ac2a5483904ca8322927b1d4/src/UseReactBrowserErrorHandler.ts#L27)

Class representing an UseReactBrowserErrorHandler.

Adapter level error handler for React applications.

## Implements

- `IAdapterErrorHandler`\<`unknown`, `unknown`, `unknown`\>

## Constructors

### new UseReactBrowserErrorHandler()

> **new UseReactBrowserErrorHandler**(`options`): [`UseReactBrowserErrorHandler`](UseReactBrowserErrorHandler.md)

Defined in: [use-react/src/UseReactBrowserErrorHandler.ts:36](https://github.com/stonemjs/use-react/blob/9a749b225241b8e0ac2a5483904ca8322927b1d4/src/UseReactBrowserErrorHandler.ts#L36)

Create an UseReactBrowserErrorHandler.

#### Parameters

##### options

[`UseReactBrowserErrorHandlerOptions`](../interfaces/UseReactBrowserErrorHandlerOptions.md)

UseReactBrowserErrorHandler options.

#### Returns

[`UseReactBrowserErrorHandler`](UseReactBrowserErrorHandler.md)

## Methods

### handle()

> **handle**(`error`, `context`): `Promise`\<`AdapterEventBuilderType`\<`unknown`\>\>

Defined in: [use-react/src/UseReactBrowserErrorHandler.ts:48](https://github.com/stonemjs/use-react/blob/9a749b225241b8e0ac2a5483904ca8322927b1d4/src/UseReactBrowserErrorHandler.ts#L48)

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
