[**Use React Documentation v0.0.2**](../../README.md)

***

[Use React Documentation](../../modules.md) / [declarations](../README.md) / IComponentErrorHandler

# Interface: IComponentErrorHandler\<IncomingEventType, OutgoingResponseType\>

Defined in: [use-react/src/declarations.ts:180](https://github.com/stonemjs/use-react/blob/50c96852bd65a75b7f2a00786393fb0c90af6da8/src/declarations.ts#L180)

Represents a component error handler.

## Type Parameters

• **IncomingEventType** *extends* [`ReactIncomingEvent`](../type-aliases/ReactIncomingEvent.md)

The type representing the incoming event.

• **OutgoingResponseType** = `unknown`

The type representing the outgoing response.

## Properties

### handle?

> `optional` **handle**: `FunctionalErrorHandler`\<`IncomingEventType`, `OutgoingResponseType`\>

Defined in: [use-react/src/declarations.ts:185](https://github.com/stonemjs/use-react/blob/50c96852bd65a75b7f2a00786393fb0c90af6da8/src/declarations.ts#L185)

***

### head()?

> `optional` **head**: (`options`) => `Promiseable`\<[`HeadContext`](HeadContext.md)\>

Defined in: [use-react/src/declarations.ts:184](https://github.com/stonemjs/use-react/blob/50c96852bd65a75b7f2a00786393fb0c90af6da8/src/declarations.ts#L184)

#### Parameters

##### options

`any`

#### Returns

`Promiseable`\<[`HeadContext`](HeadContext.md)\>

***

### render()

> **render**: (`context`) => `unknown`

Defined in: [use-react/src/declarations.ts:186](https://github.com/stonemjs/use-react/blob/50c96852bd65a75b7f2a00786393fb0c90af6da8/src/declarations.ts#L186)

#### Parameters

##### context

[`RenderErrorContext`](RenderErrorContext.md)

#### Returns

`unknown`
