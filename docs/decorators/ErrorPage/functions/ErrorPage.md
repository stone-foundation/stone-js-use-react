[**Use React Documentation v0.0.2**](../../../README.md)

***

[Use React Documentation](../../../modules.md) / [decorators/ErrorPage](../README.md) / ErrorPage

# Function: ErrorPage()

> **ErrorPage**\<`T`\>(`options`): `ClassDecorator`

Defined in: [use-react/src/decorators/ErrorPage.ts:29](https://github.com/stonemjs/use-react/blob/35b6e6a63b128df8b7d2db68dda3eb3286adfc69/src/decorators/ErrorPage.ts#L29)

A class decorator for defining a class as a React Page layout.

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
