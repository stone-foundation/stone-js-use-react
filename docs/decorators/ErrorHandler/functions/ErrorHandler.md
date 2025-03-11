[**Use React Documentation v0.0.2**](../../../README.md)

***

[Use React Documentation](../../../modules.md) / [decorators/ErrorHandler](../README.md) / ErrorHandler

# Function: ErrorHandler()

> **ErrorHandler**\<`T`\>(`options`): `ClassDecorator`

Defined in: [use-react/src/decorators/ErrorHandler.ts:30](https://github.com/stonemjs/use-react/blob/4786d31a3beb1c9f15eb30e2c9c2b12c786b755a/src/decorators/ErrorHandler.ts#L30)

A class decorator for defining a class as a React Handler layout.

## Type Parameters

• **T** *extends* `ClassType` = `ClassType`

## Parameters

### options

[`ErrorHandlerOptions`](../interfaces/ErrorHandlerOptions.md)

Configuration options for the layout definition.

## Returns

`ClassDecorator`

A method decorator to be applied to a class method.

## Example

```typescript
import { ErrorHandler } from '@stone-js/use-react';

@ErrorHandler({ error: 'UserNotFoundError' })
class UserErrorHandler {
  render({ error }) {
    return <h1>User name: {error.message}</h1>;
  }
}
```
