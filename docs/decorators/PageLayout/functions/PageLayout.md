[**Use React Documentation v0.0.2**](../../../README.md)

***

[Use React Documentation](../../../modules.md) / [decorators/PageLayout](../README.md) / PageLayout

# Function: PageLayout()

> **PageLayout**\<`T`\>(`options`): `ClassDecorator`

Defined in: [use-react/src/decorators/PageLayout.ts:29](https://github.com/stonemjs/use-react/blob/35b6e6a63b128df8b7d2db68dda3eb3286adfc69/src/decorators/PageLayout.ts#L29)

A class decorator for defining a class as a React Page layout.

## Type Parameters

• **T** *extends* `ClassType` = `ClassType`

## Parameters

### options

[`PageLayoutOptions`](../interfaces/PageLayoutOptions.md)

Configuration options for the layout definition.

## Returns

`ClassDecorator`

A method decorator to be applied to a class method.

## Example

```typescript
import { PageLayout } from '@stone-js/use-react';

@PageLayout({ name: 'UserPageLayout' })
class UserPageLayout {
  render({ data }) {
    return <h1>User name: {data.name}</h1>;
  }
}
```
