[**Use React Documentation v0.0.2**](../../README.md)

***

[Use React Documentation](../../modules.md) / [UseReactPageHooks](../README.md) / onInit

# Function: onInit()

> **onInit**(`container`): `void`

Defined in: use-react/src/UseReactPageHooks.ts:40

Hook that runs after the context is created.

The browser adapter only execute onStart and onInit hooks when first loaded.
Note: As Stone.js is an event-driven framework, we need to dispatch an event to continue with the flow.

## Parameters

### container

`Container`

The service container.

## Returns

`void`
