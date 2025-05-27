[**Use React Documentation v0.0.2**](../../README.md)

***

[Use React Documentation](../../modules.md) / [UseReactPageInternals](../README.md) / buildAdapterErrorComponent

# Function: buildAdapterErrorComponent()

> **buildAdapterErrorComponent**\<`RawEventType`, `RawResponseType`, `ExecutionContextType`\>(`blueprint`, `context`, `statusCode`, `error`): `Promise`\<`ReactNode`\>

Defined in: use-react/src/UseReactPageInternals.ts:149

Get adapter error component.

This error handler is different from the kernel error handler.
Because there is no container at adapter level.

## Type Parameters

• **RawEventType**

• **RawResponseType**

• **ExecutionContextType**

## Parameters

### blueprint

`IBlueprint`

The blueprint.

### context

`AdapterErrorContext`\<`RawEventType`, `RawResponseType`, `ExecutionContextType`\>

The context of the adapter.

### statusCode

`number`

The status code of the error.

### error

`any`

The error object.

## Returns

`Promise`\<`ReactNode`\>

The resolved layout element.
