[**Use React Documentation v0.0.2**](../../README.md)

***

[Use React Documentation](../../modules.md) / [ErrorManager](../README.md) / ErrorManager

# Class: ErrorManager

Defined in: [use-react/src/ErrorManager.ts:21](https://github.com/stonemjs/use-react/blob/27c0c592da81eceb639bfca4a4a8f24a448ad89c/src/ErrorManager.ts#L21)

Class representing an ErrorManager.

This class can be used to execute error handling logic
Out of the Stone.js's lifecycle.
After the component has been rendered.

## Constructors

### new ErrorManager()

> **new ErrorManager**(`options`): [`ErrorManager`](ErrorManager.md)

Defined in: [use-react/src/ErrorManager.ts:30](https://github.com/stonemjs/use-react/blob/27c0c592da81eceb639bfca4a4a8f24a448ad89c/src/ErrorManager.ts#L30)

Create an ErrorManager.

#### Parameters

##### options

[`ErrorManagerOptions`](../interfaces/ErrorManagerOptions.md)

ErrorManager options.

#### Returns

[`ErrorManager`](ErrorManager.md)

## Methods

### throwError()

> **throwError**(`error`, `statusCode`): `Promise`\<`void`\>

Defined in: [use-react/src/ErrorManager.ts:46](https://github.com/stonemjs/use-react/blob/27c0c592da81eceb639bfca4a4a8f24a448ad89c/src/ErrorManager.ts#L46)

Throw an error.

This method will handle the error and render the error component.
If no error handler is found, the error will be thrown.

#### Parameters

##### error

`any`

The error to throw.

##### statusCode

`number` = `500`

The status code to return.

#### Returns

`Promise`\<`void`\>

void

#### Throws

error
