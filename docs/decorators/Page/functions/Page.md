[**Use React Documentation v0.0.2**](../../../README.md)

***

[Use React Documentation](../../../modules.md) / [decorators/Page](../README.md) / Page

# Function: Page()

> **Page**\<`T`\>(`path`, `options`): `ClassDecorator`

Defined in: [use-react/src/decorators/Page.ts:39](https://github.com/stonemjs/use-react/blob/35b6e6a63b128df8b7d2db68dda3eb3286adfc69/src/decorators/Page.ts#L39)

A class decorator for defining a class as a React Page route action.
Uses the `Match` decorator internally to register the route with the HTTP `GET` method.

## Type Parameters

• **T** *extends* `ClassType` = `ClassType`

## Parameters

### path

`string`

### options

[`PageOptions`](../interfaces/PageOptions.md) = `{}`

Configuration options for the route definition, excluding the `methods` property.

## Returns

`ClassDecorator`

A method decorator to be applied to a class method.

## Example

```typescript
import { Page } from '@stone-js/use-react';

@Page('/user-profile')
class UserPage {
  handle({ event }): Record<string, string> {
    return { name: 'Jane Doe' };
  }

  render({ data }) {
    return <h1>User name: {data.name}</h1>;
  }
}
```
