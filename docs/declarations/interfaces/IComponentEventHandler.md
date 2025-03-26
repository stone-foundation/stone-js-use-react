[**Use React Documentation v0.0.2**](../../README.md)

***

[Use React Documentation](../../modules.md) / [declarations](../README.md) / IComponentEventHandler

# Interface: IComponentEventHandler\<IncomingEventType, OutgoingResponseType\>

Defined in: router/dist/index.d.ts:261

Represents a component event handler.

## Type Parameters

• **IncomingEventType** *extends* `IIncomingEvent`

The type representing the incoming event.

• **OutgoingResponseType** = `unknown`

The type representing the outgoing response.

## Properties

### handle?

> `optional` **handle**: `FunctionalEventHandler`\<`IncomingEventType`, `OutgoingResponseType`\>

Defined in: router/dist/index.d.ts:263

***

### render()

> **render**: (`options`) => `unknown`

Defined in: router/dist/index.d.ts:262

#### Parameters

##### options

`any`

#### Returns

`unknown`
