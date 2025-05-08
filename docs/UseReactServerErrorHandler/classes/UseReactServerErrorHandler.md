[**Use React Documentation v0.0.2**](../../README.md)

***

[Use React Documentation](../../modules.md) / [UseReactServerErrorHandler](../README.md) / UseReactServerErrorHandler

# Class: UseReactServerErrorHandler

Defined in: [use-react/src/UseReactServerErrorHandler.ts:26](https://github.com/stonemjs/use-react/blob/50c96852bd65a75b7f2a00786393fb0c90af6da8/src/UseReactServerErrorHandler.ts#L26)

Class representing an UseReactServerErrorHandler.

Adapter level error handler for React applications.

## Implements

- `IAdapterErrorHandler`\<`unknown`, `unknown`, `unknown`\>

## Constructors

### new UseReactServerErrorHandler()

> **new UseReactServerErrorHandler**(`options`): [`UseReactServerErrorHandler`](UseReactServerErrorHandler.md)

Defined in: [use-react/src/UseReactServerErrorHandler.ts:35](https://github.com/stonemjs/use-react/blob/50c96852bd65a75b7f2a00786393fb0c90af6da8/src/UseReactServerErrorHandler.ts#L35)

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

Defined in: [use-react/src/UseReactServerErrorHandler.ts:47](https://github.com/stonemjs/use-react/blob/50c96852bd65a75b7f2a00786393fb0c90af6da8/src/UseReactServerErrorHandler.ts#L47)

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
