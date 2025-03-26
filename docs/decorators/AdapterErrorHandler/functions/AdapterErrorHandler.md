[**Use React Documentation v0.0.2**](../../../README.md)

***

[Use React Documentation](../../../modules.md) / [decorators/AdapterErrorHandler](../README.md) / AdapterErrorHandler

# Function: AdapterErrorHandler()

> **AdapterErrorHandler**\<`T`\>(`options`): `ClassDecorator`

Defined in: [use-react/src/decorators/AdapterErrorHandler.ts:30](https://github.com/stonemjs/use-react/blob/27c0c592da81eceb639bfca4a4a8f24a448ad89c/src/decorators/AdapterErrorHandler.ts#L30)

A class decorator for defining a class as a React Handler layout.

## Type Parameters

• **T** *extends* `ClassType` = `ClassType`

## Parameters

### options

[`AdapterErrorHandlerOptions`](../interfaces/AdapterErrorHandlerOptions.md)

Configuration options for the layout definition.

## Returns

`ClassDecorator`

A method decorator to be applied to a class method.

## Example

```typescript
import { AdapterErrorHandler } from '@stone-js/use-react';

@AdapterErrorHandler({ error: 'UserNotFoundError' })
class UserAdapterErrorHandler {
  render({ error }) {
    return <h1>User name: {error.message}</h1>;
  }
}
```
