[**Use React Documentation v0.0.2**](../../README.md)

***

[Use React Documentation](../../modules.md) / [ReactRuntime](../README.md) / ReactRuntime

# Class: ReactRuntime

Defined in: use-react/src/ReactRuntime.ts:23

Class representing a ReactRuntime.

This class is responsible for handling the React runtime environment,
including create snapshots and managing errors.

## Constructors

### new ReactRuntime()

> **new ReactRuntime**(`options`): [`ReactRuntime`](ReactRuntime.md)

Defined in: use-react/src/ReactRuntime.ts:33

Create a ReactRuntime.

#### Parameters

##### options

[`ReactRuntimeOptions`](../interfaces/ReactRuntimeOptions.md)

ReactRuntime options.

#### Returns

[`ReactRuntime`](ReactRuntime.md)

## Methods

### head()

> **head**(`value`): `void`

Defined in: use-react/src/ReactRuntime.ts:70

Set html head tags.

This method will set the head elements in the document.

#### Parameters

##### value

[`HeadContext`](../../declarations/interfaces/HeadContext.md)

The head context to set.

#### Returns

`void`

***

### snapshot()

> **snapshot**\<`T`\>(`key`, `handler`): `Promise`\<`T`\>

Defined in: use-react/src/ReactRuntime.ts:50

Create a snapshot.

This method will create a snapshot of the current event.
If the environment is server, it will create a snapshot.
If the environment is client, it will return the snapshot.

#### Type Parameters

• **T**

#### Parameters

##### key

`string`

The key to store the snapshot.

##### handler

(`container`?) => `Promiseable`\<`T`\>

The handler to create the snapshot.

#### Returns

`Promise`\<`T`\>

The snapshot value.

***

### throwError()

> **throwError**(`error`, `statusCode`): `Promise`\<`void`\>

Defined in: use-react/src/ReactRuntime.ts:85

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
