[**Use React Documentation v0.0.2**](../../README.md)

***

[Use React Documentation](../../modules.md) / [UseReactEventHandler](../README.md) / UseReactEventHandler

# Class: UseReactEventHandler\<IncomingEventType\>

Defined in: [use-react/src/UseReactEventHandler.ts:14](https://github.com/stonemjs/use-react/blob/a85b32b76e105a7bc655ce084e0841ade8b0df8a/src/UseReactEventHandler.ts#L14)

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

Defined in: [use-react/src/UseReactEventHandler.ts:24](https://github.com/stonemjs/use-react/blob/a85b32b76e105a7bc655ce084e0841ade8b0df8a/src/UseReactEventHandler.ts#L24)

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

Defined in: [use-react/src/UseReactEventHandler.ts:33](https://github.com/stonemjs/use-react/blob/a85b32b76e105a7bc655ce084e0841ade8b0df8a/src/UseReactEventHandler.ts#L33)

Handle an incoming event.

#### Returns

[`MetaPage`](../../declarations/interfaces/MetaPage.md)\<`IncomingEventType`\>

The outgoing response.

#### Implementation of

`IEventHandler.handle`
