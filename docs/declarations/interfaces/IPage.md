[**Use React Documentation v0.0.2**](../../README.md)

***

[Use React Documentation](../../modules.md) / [declarations](../README.md) / IPage

# Interface: IPage\<IncomingEventType, OutgoingResponseType\>

Defined in: [use-react/src/declarations.ts:206](https://github.com/stonemjs/use-react/blob/9a749b225241b8e0ac2a5483904ca8322927b1d4/src/declarations.ts#L206)

Represents a page.

## Type Parameters

• **IncomingEventType** *extends* [`ReactIncomingEvent`](../type-aliases/ReactIncomingEvent.md)

The type representing the incoming event.

• **OutgoingResponseType** = `unknown`

The type representing the outgoing response.

## Properties

### handle?

> `optional` **handle**: `FunctionalEventHandler`\<`IncomingEventType`, `OutgoingResponseType`\>

Defined in: [use-react/src/declarations.ts:211](https://github.com/stonemjs/use-react/blob/9a749b225241b8e0ac2a5483904ca8322927b1d4/src/declarations.ts#L211)

***

### head()?

> `optional` **head**: \<`TData`\>(`context`) => `Promiseable`\<[`HeadContext`](HeadContext.md)\>

Defined in: [use-react/src/declarations.ts:212](https://github.com/stonemjs/use-react/blob/9a749b225241b8e0ac2a5483904ca8322927b1d4/src/declarations.ts#L212)

#### Type Parameters

• **TData** = `any`

#### Parameters

##### context

[`PageHeadContext`](PageHeadContext.md)\<`TData`\>

#### Returns

`Promiseable`\<[`HeadContext`](HeadContext.md)\>

***

### render()

> **render**: \<`TData`\>(`context`) => `ReactNode`

Defined in: [use-react/src/declarations.ts:210](https://github.com/stonemjs/use-react/blob/9a749b225241b8e0ac2a5483904ca8322927b1d4/src/declarations.ts#L210)

#### Type Parameters

• **TData** = `any`

#### Parameters

##### context

[`PageRenderContext`](PageRenderContext.md)\<`TData`\>

#### Returns

`ReactNode`
