[**Use React Documentation v0.0.2**](../../README.md)

***

[Use React Documentation](../../modules.md) / [declarations](../README.md) / IComponentErrorHandler

# Interface: IComponentErrorHandler\<IncomingEventType, OutgoingResponseType\>

Defined in: [use-react/src/declarations.ts:178](https://github.com/stonemjs/use-react/blob/27c0c592da81eceb639bfca4a4a8f24a448ad89c/src/declarations.ts#L178)

Represents a component error handler.

## Type Parameters

• **IncomingEventType** *extends* [`ReactIncomingEvent`](../type-aliases/ReactIncomingEvent.md)

The type representing the incoming event.

• **OutgoingResponseType** = `unknown`

The type representing the outgoing response.

## Properties

### handle?

> `optional` **handle**: `FunctionalErrorHandler`\<`IncomingEventType`, `OutgoingResponseType`\>

Defined in: [use-react/src/declarations.ts:182](https://github.com/stonemjs/use-react/blob/27c0c592da81eceb639bfca4a4a8f24a448ad89c/src/declarations.ts#L182)

***

### render()

> **render**: (`context`) => `unknown`

Defined in: [use-react/src/declarations.ts:183](https://github.com/stonemjs/use-react/blob/27c0c592da81eceb639bfca4a4a8f24a448ad89c/src/declarations.ts#L183)

#### Parameters

##### context

[`RenderErrorContext`](RenderErrorContext.md)

#### Returns

`unknown`
