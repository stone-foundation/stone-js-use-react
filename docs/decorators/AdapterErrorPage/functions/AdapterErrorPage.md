[**Use React Documentation v0.0.2**](../../../README.md)

***

[Use React Documentation](../../../modules.md) / [decorators/AdapterErrorPage](../README.md) / AdapterErrorPage

# Function: AdapterErrorPage()

> **AdapterErrorPage**\<`T`\>(`options`): `ClassDecorator`

Defined in: use-react/src/decorators/AdapterErrorPage.ts:30

A class decorator for defining a class as a React Handler layout.

## Type Parameters

• **T** *extends* `ClassType` = `ClassType`

## Parameters

### options

[`AdapterErrorPageOptions`](../interfaces/AdapterErrorPageOptions.md)

Configuration options for the layout definition.

## Returns

`ClassDecorator`

A method decorator to be applied to a class method.

## Example

```typescript
import { AdapterErrorPage } from '@stone-js/use-react';

@AdapterErrorPage({ error: 'UserNotFoundError' })
class UserAdapterErrorPage {
  render({ error }) {
    return <h1>User name: {error.message}</h1>;
  }
}
```
