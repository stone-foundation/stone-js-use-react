[**Use React Documentation v0.0.2**](../../README.md)

***

[Use React Documentation](../../modules.md) / [declarations](../README.md) / IErrorPage

# Interface: IErrorPage\<IncomingEventType, OutgoingResponseType\>

Defined in: [use-react/src/declarations.ts:339](https://github.com/stonemjs/use-react/blob/a85b32b76e105a7bc655ce084e0841ade8b0df8a/src/declarations.ts#L339)

Represents an error page.

## Type Parameters

• **IncomingEventType** *extends* [`ReactIncomingEvent`](../type-aliases/ReactIncomingEvent.md)

The type representing the incoming event.

• **OutgoingResponseType** = `unknown`

The type representing the outgoing response.

## Properties

### handle?

> `optional` **handle**: `FunctionalErrorHandler`\<`IncomingEventType`, `OutgoingResponseType`\>

Defined in: [use-react/src/declarations.ts:343](https://github.com/stonemjs/use-react/blob/a85b32b76e105a7bc655ce084e0841ade8b0df8a/src/declarations.ts#L343)

***

### head()?

> `optional` **head**: (`context`) => `Promiseable`\<[`HeadContext`](HeadContext.md)\>

Defined in: [use-react/src/declarations.ts:345](https://github.com/stonemjs/use-react/blob/a85b32b76e105a7bc655ce084e0841ade8b0df8a/src/declarations.ts#L345)

#### Parameters

##### context

[`ErrorPageHeadContext`](ErrorPageHeadContext.md)

#### Returns

`Promiseable`\<[`HeadContext`](HeadContext.md)\>

***

### render()

> **render**: (`context`) => `ReactNode`

Defined in: [use-react/src/declarations.ts:344](https://github.com/stonemjs/use-react/blob/a85b32b76e105a7bc655ce084e0841ade8b0df8a/src/declarations.ts#L344)

#### Parameters

##### context

[`ErrorPageRenderContext`](ErrorPageRenderContext.md)

#### Returns

`ReactNode`
