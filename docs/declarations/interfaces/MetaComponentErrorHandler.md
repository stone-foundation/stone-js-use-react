[**Use React Documentation v0.0.2**](../../README.md)

***

[Use React Documentation](../../modules.md) / [declarations](../README.md) / MetaComponentErrorHandler

# Interface: MetaComponentErrorHandler\<IncomingEventType, OutgoingResponseType\>

Defined in: [use-react/src/declarations.ts:175](https://github.com/stonemjs/use-react/blob/35b6e6a63b128df8b7d2db68dda3eb3286adfc69/src/declarations.ts#L175)

Represents a meta component error handler.

## Type Parameters

• **IncomingEventType** *extends* [`ReactIncomingEvent`](../type-aliases/ReactIncomingEvent.md)

The type representing the incoming event.

• **OutgoingResponseType** = `unknown`

The type representing the outgoing response.

## Properties

### error?

> `optional` **error**: `any`

Defined in: [use-react/src/declarations.ts:179](https://github.com/stonemjs/use-react/blob/35b6e6a63b128df8b7d2db68dda3eb3286adfc69/src/declarations.ts#L179)

***

### isClass?

> `optional` **isClass**: `boolean`

Defined in: [use-react/src/declarations.ts:182](https://github.com/stonemjs/use-react/blob/35b6e6a63b128df8b7d2db68dda3eb3286adfc69/src/declarations.ts#L182)

***

### isFactory?

> `optional` **isFactory**: `boolean`

Defined in: [use-react/src/declarations.ts:183](https://github.com/stonemjs/use-react/blob/35b6e6a63b128df8b7d2db68dda3eb3286adfc69/src/declarations.ts#L183)

***

### layout?

> `optional` **layout**: `unknown`

Defined in: [use-react/src/declarations.ts:181](https://github.com/stonemjs/use-react/blob/35b6e6a63b128df8b7d2db68dda3eb3286adfc69/src/declarations.ts#L181)

***

### lazy?

> `optional` **lazy**: `boolean`

Defined in: [use-react/src/declarations.ts:180](https://github.com/stonemjs/use-react/blob/35b6e6a63b128df8b7d2db68dda3eb3286adfc69/src/declarations.ts#L180)

***

### module

> **module**: [`ComponentErrorHandlerType`](../type-aliases/ComponentErrorHandlerType.md)\<`IncomingEventType`, `OutgoingResponseType`\> \| [`LazyComponentErrorHandler`](../type-aliases/LazyComponentErrorHandler.md)\<`IncomingEventType`, `OutgoingResponseType`\>

Defined in: [use-react/src/declarations.ts:184](https://github.com/stonemjs/use-react/blob/35b6e6a63b128df8b7d2db68dda3eb3286adfc69/src/declarations.ts#L184)
