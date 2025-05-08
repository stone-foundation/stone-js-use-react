[**Use React Documentation v0.0.2**](../../../README.md)

***

[Use React Documentation](../../../modules.md) / [decorators/ErrorPage](../README.md) / ErrorPage

# Function: ErrorPage()

> **ErrorPage**\<`T`\>(`options`): `ClassDecorator`

Defined in: use-react/src/decorators/ErrorPage.ts:30

A class decorator for defining a class as a React Handler layout.

## Type Parameters

• **T** *extends* `ClassType` = `ClassType`

## Parameters

### options

[`ErrorPageOptions`](../interfaces/ErrorPageOptions.md)

Configuration options for the layout definition.

## Returns

`ClassDecorator`

A method decorator to be applied to a class method.

## Example

```typescript
import { ErrorPage } from '@stone-js/use-react';

@ErrorPage({ error: 'UserNotFoundError' })
class UserErrorPage {
  render({ error }) {
    return <h1>User name: {error.message}</h1>;
  }
}
```
