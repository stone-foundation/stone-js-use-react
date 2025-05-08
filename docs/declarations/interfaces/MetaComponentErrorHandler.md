[**Use React Documentation v0.0.2**](../../README.md)

***

[Use React Documentation](../../modules.md) / [declarations](../README.md) / MetaComponentErrorHandler

# Interface: MetaComponentErrorHandler\<IncomingEventType, OutgoingResponseType\>

Defined in: [use-react/src/declarations.ts:217](https://github.com/stonemjs/use-react/blob/50c96852bd65a75b7f2a00786393fb0c90af6da8/src/declarations.ts#L217)

Represents a meta component error handler.

## Type Parameters

• **IncomingEventType** *extends* [`ReactIncomingEvent`](../type-aliases/ReactIncomingEvent.md)

The type representing the incoming event.

• **OutgoingResponseType** = `unknown`

The type representing the outgoing response.

## Properties

### error?

> `optional` **error**: `any`

Defined in: [use-react/src/declarations.ts:221](https://github.com/stonemjs/use-react/blob/50c96852bd65a75b7f2a00786393fb0c90af6da8/src/declarations.ts#L221)

***

### isClass?

> `optional` **isClass**: `boolean`

Defined in: [use-react/src/declarations.ts:224](https://github.com/stonemjs/use-react/blob/50c96852bd65a75b7f2a00786393fb0c90af6da8/src/declarations.ts#L224)

***

### isFactory?

> `optional` **isFactory**: `boolean`

Defined in: [use-react/src/declarations.ts:225](https://github.com/stonemjs/use-react/blob/50c96852bd65a75b7f2a00786393fb0c90af6da8/src/declarations.ts#L225)

***

### layout?

> `optional` **layout**: `unknown`

Defined in: [use-react/src/declarations.ts:223](https://github.com/stonemjs/use-react/blob/50c96852bd65a75b7f2a00786393fb0c90af6da8/src/declarations.ts#L223)

***

### lazy?

> `optional` **lazy**: `boolean`

Defined in: [use-react/src/declarations.ts:222](https://github.com/stonemjs/use-react/blob/50c96852bd65a75b7f2a00786393fb0c90af6da8/src/declarations.ts#L222)

***

### module

> **module**: [`ComponentErrorHandlerType`](../type-aliases/ComponentErrorHandlerType.md)\<`IncomingEventType`, `OutgoingResponseType`\> \| [`LazyComponentErrorHandler`](../type-aliases/LazyComponentErrorHandler.md)\<`IncomingEventType`, `OutgoingResponseType`\>

Defined in: [use-react/src/declarations.ts:226](https://github.com/stonemjs/use-react/blob/50c96852bd65a75b7f2a00786393fb0c90af6da8/src/declarations.ts#L226)
