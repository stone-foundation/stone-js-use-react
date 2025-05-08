[**Use React Documentation v0.0.2**](../../../README.md)

***

[Use React Documentation](../../../modules.md) / [decorators/PageStatus](../README.md) / PageStatus

# Function: PageStatus()

> **PageStatus**\<`T`\>(`statusCode`, `headers`): `MethodDecorator`

Defined in: [use-react/src/decorators/PageStatus.ts:24](https://github.com/stonemjs/use-react/blob/50c96852bd65a75b7f2a00786393fb0c90af6da8/src/decorators/PageStatus.ts#L24)

Decorator to set the status code of the response.

## Type Parameters

• **T** *extends* `Function` = `Function`

## Parameters

### statusCode

`number` = `200`

The status code of the response.

### headers

[`HeadersType`](../../../declarations/type-aliases/HeadersType.md) = `{}`

The headers for the response.

## Returns

`MethodDecorator`

A method decorator.

## Example

```typescript
import { Page, PageStatus } from '@stone-js/use-react';

@Page('/user-profile')
class UserPage {
  @PageStatus()
  handle() {
    return { name: 'John Doe' };
  }
}
```
