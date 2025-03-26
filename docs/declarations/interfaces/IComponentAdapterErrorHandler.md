[**Use React Documentation v0.0.2**](../../README.md)

***

[Use React Documentation](../../modules.md) / [declarations](../README.md) / IComponentAdapterErrorHandler

# Interface: IComponentAdapterErrorHandler\<OutgoingResponseType\>

Defined in: [use-react/src/declarations.ts:275](https://github.com/stonemjs/use-react/blob/27c0c592da81eceb639bfca4a4a8f24a448ad89c/src/declarations.ts#L275)

Represents an Adapter component error handler.

## Type Parameters

• **OutgoingResponseType** = `unknown`

The type representing the outgoing response.

## Properties

### handle?

> `optional` **handle**: [`FunctionalAdapterErrorHandler`](../type-aliases/FunctionalAdapterErrorHandler.md)\<`OutgoingResponseType`\>

Defined in: [use-react/src/declarations.ts:278](https://github.com/stonemjs/use-react/blob/27c0c592da81eceb639bfca4a4a8f24a448ad89c/src/declarations.ts#L278)

***

### render()

> **render**: (`context`) => `unknown`

Defined in: [use-react/src/declarations.ts:279](https://github.com/stonemjs/use-react/blob/27c0c592da81eceb639bfca4a4a8f24a448ad89c/src/declarations.ts#L279)

#### Parameters

##### context

[`RenderAdapterErrorContext`](RenderAdapterErrorContext.md)

#### Returns

`unknown`
