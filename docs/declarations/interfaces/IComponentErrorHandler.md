[**Use React Documentation v0.0.2**](../../README.md)

***

[Use React Documentation](../../modules.md) / [declarations](../README.md) / IComponentErrorHandler

# Interface: IComponentErrorHandler\<IncomingEventType, OutgoingResponseType\>

Defined in: [use-react/src/declarations.ts:175](https://github.com/stonemjs/use-react/blob/d8ec502192c16b8752fc9e1bf85bd5600bcf9813/src/declarations.ts#L175)

Represents a component error handler.

## Type Parameters

• **IncomingEventType** *extends* [`ReactIncomingEvent`](../type-aliases/ReactIncomingEvent.md)

The type representing the incoming event.

• **OutgoingResponseType** = `unknown`

The type representing the outgoing response.

## Properties

### handle?

> `optional` **handle**: `FunctionalErrorHandler`\<`IncomingEventType`, `OutgoingResponseType`\>

Defined in: [use-react/src/declarations.ts:179](https://github.com/stonemjs/use-react/blob/d8ec502192c16b8752fc9e1bf85bd5600bcf9813/src/declarations.ts#L179)

***

### render()

> **render**: (`context`) => `unknown`

Defined in: [use-react/src/declarations.ts:180](https://github.com/stonemjs/use-react/blob/d8ec502192c16b8752fc9e1bf85bd5600bcf9813/src/declarations.ts#L180)

#### Parameters

##### context

[`RenderErrorContext`](RenderErrorContext.md)

#### Returns

`unknown`
