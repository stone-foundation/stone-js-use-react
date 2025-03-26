[**Use React Documentation v0.0.2**](../../README.md)

***

[Use React Documentation](../../modules.md) / [UseReactPageHooks](../README.md) / onInit

# Function: onInit()

> **onInit**(`container`): `void`

Defined in: [use-react/src/UseReactPageHooks.ts:41](https://github.com/stonemjs/use-react/blob/27c0c592da81eceb639bfca4a4a8f24a448ad89c/src/UseReactPageHooks.ts#L41)

Hook that runs after the context is created.

The browser adapter only execute onStart and onInit hooks when first loaded.
Note: As Stone.js is an event-driven framework, we need to dispatch an event to continue with the flow.

## Parameters

### container

`Container`

The service container.

## Returns

`void`
