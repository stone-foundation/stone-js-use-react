[**Use React Documentation v0.0.2**](../../../README.md)

***

[Use React Documentation](../../../modules.md) / [errors/UseReactError](../README.md) / UseReactError

# Class: UseReactError

Defined in: [use-react/src/errors/UseReactError.ts:6](https://github.com/stonemjs/use-react/blob/a85b32b76e105a7bc655ce084e0841ade8b0df8a/src/errors/UseReactError.ts#L6)

Custom error for react operations.

## Extends

- `InitializationError`

## Constructors

### new UseReactError()

> **new UseReactError**(`message`, `options`?): [`UseReactError`](UseReactError.md)

Defined in: [use-react/src/errors/UseReactError.ts:7](https://github.com/stonemjs/use-react/blob/a85b32b76e105a7bc655ce084e0841ade8b0df8a/src/errors/UseReactError.ts#L7)

#### Parameters

##### message

`string`

##### options?

`ErrorOptions`

#### Returns

[`UseReactError`](UseReactError.md)

#### Overrides

`InitializationError.constructor`

## Properties

### cause?

> `readonly` `optional` **cause**: `Error`

Defined in: core/dist/index.d.ts:3101

#### Inherited from

`InitializationError.cause`

***

### code?

> `readonly` `optional` **code**: `string`

Defined in: core/dist/index.d.ts:3100

#### Inherited from

`InitializationError.code`

***

### metadata?

> `readonly` `optional` **metadata**: `unknown`

Defined in: core/dist/index.d.ts:3102

#### Inherited from

`InitializationError.metadata`

## Methods

### toString()

> **toString**(`multiline`?): `string`

Defined in: core/dist/index.d.ts:3123

Converts the error to a formatted string representation.

#### Parameters

##### multiline?

`boolean`

Determine if output value must be multiline or not.

#### Returns

`string`

A formatted error string.

#### Inherited from

`InitializationError.toString`

***

### create()

> `static` **create**\<`T`\>(`message`, `options`?): `T`

Defined in: core/dist/index.d.ts:3109

Create a RuntimeError.

#### Type Parameters

• **T** *extends* `RuntimeError` = `RuntimeError`

#### Parameters

##### message

`string`

##### options?

`ErrorOptions`

The options to create a RuntimeError.

#### Returns

`T`

A new RuntimeError instance.

#### Inherited from

`InitializationError.create`
