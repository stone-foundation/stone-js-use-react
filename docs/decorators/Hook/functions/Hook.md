[**Use React Documentation v0.0.2**](../../../README.md)

***

[Use React Documentation](../../../modules.md) / [decorators/Hook](../README.md) / Hook

# Function: Hook()

> **Hook**\<`T`\>(`name`): `MethodDecorator`

Defined in: [use-react/src/decorators/Hook.ts:20](https://github.com/stonemjs/use-react/blob/9a749b225241b8e0ac2a5483904ca8322927b1d4/src/decorators/Hook.ts#L20)

Hook decorator to mark a method as a lifecycle hook
And automatically add it to the global lifecycle hook registry.

## Type Parameters

• **T** *extends* `Function` = `Function`

## Parameters

### name

[`HookName`](../../../declarations/type-aliases/HookName.md)

The name of the lifecycle hook.

## Returns

`MethodDecorator`

A class decorator function that sets the metadata using the provided options.

## Example

```typescript
class MyClass {
   // ...
   @Hook('onPreparingPage')
   onPreparingPage () {}
}
```
