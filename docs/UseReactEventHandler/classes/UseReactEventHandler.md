[**Use React Documentation v0.0.2**](../../README.md)

***

[Use React Documentation](../../modules.md) / [UseReactEventHandler](../README.md) / UseReactEventHandler

# Class: UseReactEventHandler\<IncomingEventType\>

Defined in: [use-react/src/UseReactEventHandler.ts:14](https://github.com/stonemjs/use-react/blob/0635de04acc6b3a5c28dcf07d1e12a39a8b5e0b9/src/UseReactEventHandler.ts#L14)

A useReact event handler for processing incoming events
For single event handler.

Multiple event handlers will be processed by the router.

## Template

The type representing the outgoing response.

## Type Parameters

• **IncomingEventType** *extends* [`ReactIncomingEvent`](../../declarations/type-aliases/ReactIncomingEvent.md) = [`ReactIncomingEvent`](../../declarations/type-aliases/ReactIncomingEvent.md)

The type representing the incoming event.

## Implements

- `IEventHandler`\<`IncomingEventType`, [`MetaPage`](../../declarations/interfaces/MetaPage.md)\<`IncomingEventType`\>\>

## Constructors

### new UseReactEventHandler()

> **new UseReactEventHandler**\<`IncomingEventType`\>(`options`): [`UseReactEventHandler`](UseReactEventHandler.md)\<`IncomingEventType`\>

Defined in: [use-react/src/UseReactEventHandler.ts:24](https://github.com/stonemjs/use-react/blob/0635de04acc6b3a5c28dcf07d1e12a39a8b5e0b9/src/UseReactEventHandler.ts#L24)

Constructs a `UseReactEventHandler` instance.

#### Parameters

##### options

The UseReactEventHandler options including blueprint.

###### blueprint

`IBlueprint`

#### Returns

[`UseReactEventHandler`](UseReactEventHandler.md)\<`IncomingEventType`\>

## Methods

### handle()

> **handle**(): [`MetaPage`](../../declarations/interfaces/MetaPage.md)\<`IncomingEventType`\>

Defined in: [use-react/src/UseReactEventHandler.ts:33](https://github.com/stonemjs/use-react/blob/0635de04acc6b3a5c28dcf07d1e12a39a8b5e0b9/src/UseReactEventHandler.ts#L33)

Handle an incoming event.

#### Returns

[`MetaPage`](../../declarations/interfaces/MetaPage.md)\<`IncomingEventType`\>

The outgoing response.

#### Implementation of

`IEventHandler.handle`
