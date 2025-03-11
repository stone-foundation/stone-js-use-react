[**Use React Documentation v0.0.2**](../../README.md)

***

[Use React Documentation](../../modules.md) / [declarations](../README.md) / MetaComponentErrorHandler

# Interface: MetaComponentErrorHandler\<IncomingEventType, OutgoingResponseType\>

Defined in: [use-react/src/declarations.ts:211](https://github.com/stonemjs/use-react/blob/4786d31a3beb1c9f15eb30e2c9c2b12c786b755a/src/declarations.ts#L211)

Represents a meta component error handler.

## Type Parameters

• **IncomingEventType** *extends* [`ReactIncomingEvent`](../type-aliases/ReactIncomingEvent.md)

The type representing the incoming event.

• **OutgoingResponseType** = `unknown`

The type representing the outgoing response.

## Properties

### error?

> `optional` **error**: `any`

Defined in: [use-react/src/declarations.ts:215](https://github.com/stonemjs/use-react/blob/4786d31a3beb1c9f15eb30e2c9c2b12c786b755a/src/declarations.ts#L215)

***

### isClass?

> `optional` **isClass**: `boolean`

Defined in: [use-react/src/declarations.ts:218](https://github.com/stonemjs/use-react/blob/4786d31a3beb1c9f15eb30e2c9c2b12c786b755a/src/declarations.ts#L218)

***

### isFactory?

> `optional` **isFactory**: `boolean`

Defined in: [use-react/src/declarations.ts:219](https://github.com/stonemjs/use-react/blob/4786d31a3beb1c9f15eb30e2c9c2b12c786b755a/src/declarations.ts#L219)

***

### layout?

> `optional` **layout**: `unknown`

Defined in: [use-react/src/declarations.ts:217](https://github.com/stonemjs/use-react/blob/4786d31a3beb1c9f15eb30e2c9c2b12c786b755a/src/declarations.ts#L217)

***

### lazy?

> `optional` **lazy**: `boolean`

Defined in: [use-react/src/declarations.ts:216](https://github.com/stonemjs/use-react/blob/4786d31a3beb1c9f15eb30e2c9c2b12c786b755a/src/declarations.ts#L216)

***

### module

> **module**: [`ComponentErrorHandlerType`](../type-aliases/ComponentErrorHandlerType.md)\<`IncomingEventType`, `OutgoingResponseType`\> \| [`LazyComponentErrorHandler`](../type-aliases/LazyComponentErrorHandler.md)\<`IncomingEventType`, `OutgoingResponseType`\>

Defined in: [use-react/src/declarations.ts:220](https://github.com/stonemjs/use-react/blob/4786d31a3beb1c9f15eb30e2c9c2b12c786b755a/src/declarations.ts#L220)
