[**Use React Documentation v0.0.2**](../../README.md)

***

[Use React Documentation](../../modules.md) / [declarations](../README.md) / MetaComponentErrorHandler

# Interface: MetaComponentErrorHandler\<IncomingEventType, OutgoingResponseType\>

Defined in: [use-react/src/declarations.ts:214](https://github.com/stonemjs/use-react/blob/27c0c592da81eceb639bfca4a4a8f24a448ad89c/src/declarations.ts#L214)

Represents a meta component error handler.

## Type Parameters

• **IncomingEventType** *extends* [`ReactIncomingEvent`](../type-aliases/ReactIncomingEvent.md)

The type representing the incoming event.

• **OutgoingResponseType** = `unknown`

The type representing the outgoing response.

## Properties

### error?

> `optional` **error**: `any`

Defined in: [use-react/src/declarations.ts:218](https://github.com/stonemjs/use-react/blob/27c0c592da81eceb639bfca4a4a8f24a448ad89c/src/declarations.ts#L218)

***

### isClass?

> `optional` **isClass**: `boolean`

Defined in: [use-react/src/declarations.ts:221](https://github.com/stonemjs/use-react/blob/27c0c592da81eceb639bfca4a4a8f24a448ad89c/src/declarations.ts#L221)

***

### isFactory?

> `optional` **isFactory**: `boolean`

Defined in: [use-react/src/declarations.ts:222](https://github.com/stonemjs/use-react/blob/27c0c592da81eceb639bfca4a4a8f24a448ad89c/src/declarations.ts#L222)

***

### layout?

> `optional` **layout**: `unknown`

Defined in: [use-react/src/declarations.ts:220](https://github.com/stonemjs/use-react/blob/27c0c592da81eceb639bfca4a4a8f24a448ad89c/src/declarations.ts#L220)

***

### lazy?

> `optional` **lazy**: `boolean`

Defined in: [use-react/src/declarations.ts:219](https://github.com/stonemjs/use-react/blob/27c0c592da81eceb639bfca4a4a8f24a448ad89c/src/declarations.ts#L219)

***

### module

> **module**: [`ComponentErrorHandlerType`](../type-aliases/ComponentErrorHandlerType.md)\<`IncomingEventType`, `OutgoingResponseType`\> \| [`LazyComponentErrorHandler`](../type-aliases/LazyComponentErrorHandler.md)\<`IncomingEventType`, `OutgoingResponseType`\>

Defined in: [use-react/src/declarations.ts:223](https://github.com/stonemjs/use-react/blob/27c0c592da81eceb639bfca4a4a8f24a448ad89c/src/declarations.ts#L223)
