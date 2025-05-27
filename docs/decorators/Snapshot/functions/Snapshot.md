[**Use React Documentation v0.0.2**](../../../README.md)

***

[Use React Documentation](../../../modules.md) / [decorators/Snapshot](../README.md) / Snapshot

# Function: Snapshot()

> **Snapshot**\<`T`\>(`name`?): `MethodDecorator`

Defined in: [use-react/src/decorators/Snapshot.ts:24](https://github.com/stonemjs/use-react/blob/a85b32b76e105a7bc655ce084e0841ade8b0df8a/src/decorators/Snapshot.ts#L24)

Decorator to create a snapshot of the current data.

## Type Parameters

• **T** *extends* `Function` = `Function`

## Parameters

### name?

`string`

The name of the snapshot.

## Returns

`MethodDecorator`

A method decorator.

## Example

```typescript
import { Service } from '@stone-js/core';
import { Snapshot } from '@stone-js/use-react';

@Service({ alias: 'userService' })
class UserService {
  @Snapshot()
  showProfile() {
    return { name: 'John Doe' };
  }
}
```
