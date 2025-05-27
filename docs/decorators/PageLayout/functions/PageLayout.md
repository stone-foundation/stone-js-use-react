[**Use React Documentation v0.0.2**](../../../README.md)

***

[Use React Documentation](../../../modules.md) / [decorators/PageLayout](../README.md) / PageLayout

# Function: PageLayout()

> **PageLayout**\<`T`\>(`options`): `ClassDecorator`

Defined in: [use-react/src/decorators/PageLayout.ts:23](https://github.com/stonemjs/use-react/blob/0635de04acc6b3a5c28dcf07d1e12a39a8b5e0b9/src/decorators/PageLayout.ts#L23)

A class decorator for defining a class as a React Page layout.

## Type Parameters

• **T** *extends* `ClassType` = `ClassType`

## Parameters

### options

[`PageLayoutOptions`](../../../declarations/interfaces/PageLayoutOptions.md)

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
