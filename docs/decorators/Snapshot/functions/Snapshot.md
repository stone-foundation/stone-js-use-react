[**Use React Documentation v0.0.2**](../../../README.md)

***

[Use React Documentation](../../../modules.md) / [decorators/Snapshot](../README.md) / Snapshot

# Function: Snapshot()

> **Snapshot**\<`T`\>(`name`?): `MethodDecorator`

Defined in: [use-react/src/decorators/Snapshot.ts:24](https://github.com/stonemjs/use-react/blob/0635de04acc6b3a5c28dcf07d1e12a39a8b5e0b9/src/decorators/Snapshot.ts#L24)

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
