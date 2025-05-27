[**Use React Documentation v0.0.2**](../../README.md)

***

[Use React Documentation](../../modules.md) / [declarations](../README.md) / IPage

# Interface: IPage\<IncomingEventType, OutgoingResponseType\>

Defined in: [use-react/src/declarations.ts:211](https://github.com/stonemjs/use-react/blob/0635de04acc6b3a5c28dcf07d1e12a39a8b5e0b9/src/declarations.ts#L211)

Represents a page.

## Type Parameters

• **IncomingEventType** *extends* [`ReactIncomingEvent`](../type-aliases/ReactIncomingEvent.md)

The type representing the incoming event.

• **OutgoingResponseType** = `unknown`

The type representing the outgoing response.

## Properties

### handle?

> `optional` **handle**: `FunctionalEventHandler`\<`IncomingEventType`, `OutgoingResponseType`\>

Defined in: [use-react/src/declarations.ts:216](https://github.com/stonemjs/use-react/blob/0635de04acc6b3a5c28dcf07d1e12a39a8b5e0b9/src/declarations.ts#L216)

***

### head()?

> `optional` **head**: (`context`) => `Promiseable`\<[`HeadContext`](HeadContext.md)\>

Defined in: [use-react/src/declarations.ts:217](https://github.com/stonemjs/use-react/blob/0635de04acc6b3a5c28dcf07d1e12a39a8b5e0b9/src/declarations.ts#L217)

#### Parameters

##### context

[`PageHeadContext`](PageHeadContext.md)

#### Returns

`Promiseable`\<[`HeadContext`](HeadContext.md)\>

***

### render()

> **render**: (`context`) => `ReactNode`

Defined in: [use-react/src/declarations.ts:215](https://github.com/stonemjs/use-react/blob/0635de04acc6b3a5c28dcf07d1e12a39a8b5e0b9/src/declarations.ts#L215)

#### Parameters

##### context

[`PageRenderContext`](PageRenderContext.md)

#### Returns

`ReactNode`
