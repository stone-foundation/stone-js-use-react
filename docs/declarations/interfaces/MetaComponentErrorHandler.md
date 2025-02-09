[**Use React Documentation v0.0.2**](../../README.md)

***

[Use React Documentation](../../modules.md) / [declarations](../README.md) / MetaComponentErrorHandler

# Interface: MetaComponentErrorHandler\<IncomingEventType, OutgoingResponseType\>

Defined in: [use-react/src/declarations.ts:162](https://github.com/stonemjs/use-react/blob/48b0fa89405b138aef5b9a5bc1a85e12108c1404/src/declarations.ts#L162)

Represents a meta component error handler.

## Type Parameters

• **IncomingEventType** *extends* [`ReactIncomingEvent`](../type-aliases/ReactIncomingEvent.md)

The type representing the incoming event.

• **OutgoingResponseType** = `unknown`

The type representing the outgoing response.

## Properties

### error?

> `optional` **error**: `any`

Defined in: [use-react/src/declarations.ts:166](https://github.com/stonemjs/use-react/blob/48b0fa89405b138aef5b9a5bc1a85e12108c1404/src/declarations.ts#L166)

***

### isClass?

> `optional` **isClass**: `boolean`

Defined in: [use-react/src/declarations.ts:169](https://github.com/stonemjs/use-react/blob/48b0fa89405b138aef5b9a5bc1a85e12108c1404/src/declarations.ts#L169)

***

### isFactory?

> `optional` **isFactory**: `boolean`

Defined in: [use-react/src/declarations.ts:170](https://github.com/stonemjs/use-react/blob/48b0fa89405b138aef5b9a5bc1a85e12108c1404/src/declarations.ts#L170)

***

### layout?

> `optional` **layout**: `unknown`

Defined in: [use-react/src/declarations.ts:168](https://github.com/stonemjs/use-react/blob/48b0fa89405b138aef5b9a5bc1a85e12108c1404/src/declarations.ts#L168)

***

### lazy?

> `optional` **lazy**: `boolean`

Defined in: [use-react/src/declarations.ts:167](https://github.com/stonemjs/use-react/blob/48b0fa89405b138aef5b9a5bc1a85e12108c1404/src/declarations.ts#L167)

***

### module

> **module**: [`ComponentErrorHandlerType`](../type-aliases/ComponentErrorHandlerType.md)\<`IncomingEventType`, `OutgoingResponseType`\> \| [`LazyComponentErrorHandler`](../type-aliases/LazyComponentErrorHandler.md)\<`IncomingEventType`, `OutgoingResponseType`\>

Defined in: [use-react/src/declarations.ts:171](https://github.com/stonemjs/use-react/blob/48b0fa89405b138aef5b9a5bc1a85e12108c1404/src/declarations.ts#L171)
