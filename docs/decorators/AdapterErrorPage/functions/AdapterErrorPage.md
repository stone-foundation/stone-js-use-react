[**Use React Documentation v0.0.2**](../../../README.md)

***

[Use React Documentation](../../../modules.md) / [decorators/AdapterErrorPage](../README.md) / AdapterErrorPage

# Function: AdapterErrorPage()

> **AdapterErrorPage**\<`T`\>(`options`): `ClassDecorator`

Defined in: [use-react/src/decorators/AdapterErrorPage.ts:23](https://github.com/stonemjs/use-react/blob/9a749b225241b8e0ac2a5483904ca8322927b1d4/src/decorators/AdapterErrorPage.ts#L23)

A class decorator for defining a class as a React Handler layout.

## Type Parameters

• **T** *extends* `ClassType` = `ClassType`

## Parameters

### options

[`AdapterErrorPageOptions`](../../../declarations/interfaces/AdapterErrorPageOptions.md)

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
