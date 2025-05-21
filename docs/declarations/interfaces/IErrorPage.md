[**Use React Documentation v0.0.2**](../../README.md)

***

[Use React Documentation](../../modules.md) / [declarations](../README.md) / IErrorPage

# Interface: IErrorPage\<IncomingEventType, OutgoingResponseType\>

Defined in: [use-react/src/declarations.ts:334](https://github.com/stonemjs/use-react/blob/9a749b225241b8e0ac2a5483904ca8322927b1d4/src/declarations.ts#L334)

Represents an error page.

## Type Parameters

• **IncomingEventType** *extends* [`ReactIncomingEvent`](../type-aliases/ReactIncomingEvent.md)

The type representing the incoming event.

• **OutgoingResponseType** = `unknown`

The type representing the outgoing response.

## Properties

### handle?

> `optional` **handle**: `FunctionalErrorHandler`\<`IncomingEventType`, `OutgoingResponseType`\>

Defined in: [use-react/src/declarations.ts:338](https://github.com/stonemjs/use-react/blob/9a749b225241b8e0ac2a5483904ca8322927b1d4/src/declarations.ts#L338)

***

### head()?

> `optional` **head**: \<`TError`, `UData`\>(`context`) => `Promiseable`\<[`HeadContext`](HeadContext.md)\>

Defined in: [use-react/src/declarations.ts:340](https://github.com/stonemjs/use-react/blob/9a749b225241b8e0ac2a5483904ca8322927b1d4/src/declarations.ts#L340)

#### Type Parameters

• **TError** = `any`

• **UData** = `any`

#### Parameters

##### context

[`ErrorPageHeadContext`](ErrorPageHeadContext.md)\<`TError`, `UData`\>

#### Returns

`Promiseable`\<[`HeadContext`](HeadContext.md)\>

***

### render()

> **render**: \<`TError`, `UData`\>(`context`) => `ReactNode`

Defined in: [use-react/src/declarations.ts:339](https://github.com/stonemjs/use-react/blob/9a749b225241b8e0ac2a5483904ca8322927b1d4/src/declarations.ts#L339)

#### Type Parameters

• **TError** = `any`

• **UData** = `any`

#### Parameters

##### context

[`ErrorPageRenderContext`](ErrorPageRenderContext.md)\<`TError`, `UData`\>

#### Returns

`ReactNode`
