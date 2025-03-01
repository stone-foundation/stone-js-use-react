[**Use React Documentation v0.0.2**](../../../README.md)

***

[Use React Documentation](../../../modules.md) / [decorators/ErrorHandler](../README.md) / ErrorHandler

# Function: ErrorHandler()

> **ErrorHandler**\<`T`\>(`options`): `ClassDecorator`

Defined in: use-react/src/decorators/ErrorHandler.ts:30

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
