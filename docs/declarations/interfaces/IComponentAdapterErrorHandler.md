[**Use React Documentation v0.0.2**](../../README.md)

***

[Use React Documentation](../../modules.md) / [declarations](../README.md) / IComponentAdapterErrorHandler

# Interface: IComponentAdapterErrorHandler\<OutgoingResponseType\>

Defined in: [use-react/src/declarations.ts:272](https://github.com/stonemjs/use-react/blob/4786d31a3beb1c9f15eb30e2c9c2b12c786b755a/src/declarations.ts#L272)

Represents an Adapter component error handler.

## Type Parameters

• **OutgoingResponseType** = `unknown`

The type representing the outgoing response.

## Properties

### handle?

> `optional` **handle**: [`FunctionalAdapterErrorHandler`](../type-aliases/FunctionalAdapterErrorHandler.md)\<`OutgoingResponseType`\>

Defined in: [use-react/src/declarations.ts:275](https://github.com/stonemjs/use-react/blob/4786d31a3beb1c9f15eb30e2c9c2b12c786b755a/src/declarations.ts#L275)

***

### render()

> **render**: (`context`) => `unknown`

Defined in: [use-react/src/declarations.ts:276](https://github.com/stonemjs/use-react/blob/4786d31a3beb1c9f15eb30e2c9c2b12c786b755a/src/declarations.ts#L276)

#### Parameters

##### context

[`RenderAdapterErrorContext`](RenderAdapterErrorContext.md)

#### Returns

`unknown`
