[**Use React Documentation v0.0.2**](../../../README.md)

***

[Use React Documentation](../../../modules.md) / [errors/UseReactError](../README.md) / UseReactError

# Class: UseReactError

Defined in: [use-react/src/errors/UseReactError.ts:6](https://github.com/stonemjs/use-react/blob/9a749b225241b8e0ac2a5483904ca8322927b1d4/src/errors/UseReactError.ts#L6)

Custom error for react operations.

## Extends

- `InitializationError`

## Constructors

### new UseReactError()

> **new UseReactError**(`message`, `options`?): [`UseReactError`](UseReactError.md)

Defined in: [use-react/src/errors/UseReactError.ts:7](https://github.com/stonemjs/use-react/blob/9a749b225241b8e0ac2a5483904ca8322927b1d4/src/errors/UseReactError.ts#L7)

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

Defined in: core/dist/index.d.ts:3555

#### Inherited from

`InitializationError.cause`

***

### code?

> `readonly` `optional` **code**: `string`

Defined in: core/dist/index.d.ts:3554

#### Inherited from

`InitializationError.code`

***

### metadata?

> `readonly` `optional` **metadata**: `unknown`

Defined in: core/dist/index.d.ts:3556

#### Inherited from

`InitializationError.metadata`

## Methods

### toString()

> **toString**(`multiline`?): `string`

Defined in: core/dist/index.d.ts:3577

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

Defined in: core/dist/index.d.ts:3563

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
