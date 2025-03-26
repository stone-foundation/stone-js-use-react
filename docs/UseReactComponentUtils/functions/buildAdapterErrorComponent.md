[**Use React Documentation v0.0.2**](../../README.md)

***

[Use React Documentation](../../modules.md) / [UseReactComponentUtils](../README.md) / buildAdapterErrorComponent

# Function: buildAdapterErrorComponent()

> **buildAdapterErrorComponent**(`blueprint`, `statusCode`, `error`): `Promise`\<`ReactNode`\>

Defined in: [use-react/src/UseReactComponentUtils.ts:141](https://github.com/stonemjs/use-react/blob/27c0c592da81eceb639bfca4a4a8f24a448ad89c/src/UseReactComponentUtils.ts#L141)

Get adapter error component.

This error handler is different from the kernel error handler.
Because there is no container at adapter level.

## Parameters

### blueprint

`IBlueprint`

The blueprint.

### statusCode

`number`

The status code of the error.

### error

`any`

The error object.

## Returns

`Promise`\<`ReactNode`\>

The resolved layout element.
