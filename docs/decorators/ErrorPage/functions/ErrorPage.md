[**Use React Documentation v0.0.2**](../../../README.md)

***

[Use React Documentation](../../../modules.md) / [decorators/ErrorPage](../README.md) / ErrorPage

# Function: ErrorPage()

> **ErrorPage**\<`T`\>(`options`): `ClassDecorator`

Defined in: [use-react/src/decorators/ErrorPage.ts:23](https://github.com/stonemjs/use-react/blob/0635de04acc6b3a5c28dcf07d1e12a39a8b5e0b9/src/decorators/ErrorPage.ts#L23)

A class decorator for defining a class as a React Handler layout.

## Type Parameters

• **T** *extends* `ClassType` = `ClassType`

## Parameters

### options

[`ErrorPageOptions`](../../../declarations/interfaces/ErrorPageOptions.md)

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
