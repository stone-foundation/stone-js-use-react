[**Use React Documentation v0.0.2**](../../README.md)

***

[Use React Documentation](../../modules.md) / [UseReactEventHandler](../README.md) / UseReactEventHandler

# Class: UseReactEventHandler\<IncomingEventType\>

Defined in: use-react/src/UseReactEventHandler.ts:15

A useReact event handler for processing incoming events
For single event handler.

Multiple event handlers will be processed by the router.

## Template

The type representing the outgoing response.

## Type Parameters

• **IncomingEventType** *extends* [`ReactIncomingEvent`](../../declarations/type-aliases/ReactIncomingEvent.md) = [`ReactIncomingEvent`](../../declarations/type-aliases/ReactIncomingEvent.md)

The type representing the incoming event.

## Implements

- `IEventHandler`\<`IncomingEventType`, `MetaComponentEventHandler`\<`IncomingEventType`\>\>

## Constructors

### new UseReactEventHandler()

> `protected` **new UseReactEventHandler**\<`IncomingEventType`\>(`options`): [`UseReactEventHandler`](UseReactEventHandler.md)\<`IncomingEventType`\>

Defined in: use-react/src/UseReactEventHandler.ts:25

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

> **handle**(): `MetaComponentEventHandler`\<`IncomingEventType`\>

Defined in: use-react/src/UseReactEventHandler.ts:34

Handle an incoming event.

#### Returns

`MetaComponentEventHandler`\<`IncomingEventType`\>

The outgoing response.

#### Implementation of

`IEventHandler.handle`
