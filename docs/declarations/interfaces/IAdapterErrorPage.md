[**Use React Documentation v0.0.2**](../../README.md)

***

[Use React Documentation](../../modules.md) / [declarations](../README.md) / IAdapterErrorPage

# Interface: IAdapterErrorPage\<RawEventType, RawResponseType, ExecutionContextType\>

Defined in: [use-react/src/declarations.ts:403](https://github.com/stonemjs/use-react/blob/9a749b225241b8e0ac2a5483904ca8322927b1d4/src/declarations.ts#L403)

Represents an Adapter component error handler.

## Type Parameters

• **RawEventType**

• **RawResponseType**

• **ExecutionContextType**

## Properties

### handle?

> `optional` **handle**: `FunctionalAdapterErrorHandler`\<`RawEventType`, `RawResponseType`, `ExecutionContextType`\>

Defined in: [use-react/src/declarations.ts:406](https://github.com/stonemjs/use-react/blob/9a749b225241b8e0ac2a5483904ca8322927b1d4/src/declarations.ts#L406)

***

### render()

> **render**: \<`TError`\>(`context`) => `ReactNode`

Defined in: [use-react/src/declarations.ts:407](https://github.com/stonemjs/use-react/blob/9a749b225241b8e0ac2a5483904ca8322927b1d4/src/declarations.ts#L407)

#### Type Parameters

• **TError** = `any`

#### Parameters

##### context

[`AdapterErrorPageRenderContext`](AdapterErrorPageRenderContext.md)\<`TError`\>

#### Returns

`ReactNode`
