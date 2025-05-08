[**Use React Documentation v0.0.2**](../../README.md)

***

[Use React Documentation](../../modules.md) / [declarations](../README.md) / IComponentEventHandler

# Interface: IComponentEventHandler\<IncomingEventType, OutgoingResponseType\>

Defined in: router/dist/index.d.ts:609

Represents a component event handler.

## Type Parameters

• **IncomingEventType** *extends* `IIncomingEvent`

The type representing the incoming event.

• **OutgoingResponseType** = `unknown`

The type representing the outgoing response.

## Properties

### handle?

> `optional` **handle**: `FunctionalEventHandler`\<`IncomingEventType`, `OutgoingResponseType`\>

Defined in: router/dist/index.d.ts:612

***

### head()?

> `optional` **head**: (`options`) => `Promiseable`\<[`HeadContext`](HeadContext.md)\>

Defined in: router/dist/index.d.ts:611

#### Parameters

##### options

`any`

#### Returns

`Promiseable`\<[`HeadContext`](HeadContext.md)\>

***

### render()

> **render**: (`options`) => `unknown`

Defined in: router/dist/index.d.ts:610

#### Parameters

##### options

`any`

#### Returns

`unknown`
