[**Use React Documentation v0.0.2**](../../README.md)

***

[Use React Documentation](../../modules.md) / [utils](../README.md) / defineClassComponent

# Function: defineClassComponent()

> **defineClassComponent**(`module`, `options`): `MetaComponentEventHandler`\<[`ReactIncomingEvent`](../../declarations/type-aliases/ReactIncomingEvent.md)\>

Defined in: [use-react/src/utils.ts:152](https://github.com/stonemjs/use-react/blob/35b6e6a63b128df8b7d2db68dda3eb3286adfc69/src/utils.ts#L152)

Define a class component.

## Parameters

### module

The class component module.

`ComponentEventHandlerClass`\<[`ReactIncomingEvent`](../../declarations/type-aliases/ReactIncomingEvent.md)\> | `LazyComponentEventHandlerClass`\<[`ReactIncomingEvent`](../../declarations/type-aliases/ReactIncomingEvent.md)\>

### options

`Pick`\<`MetaComponentEventHandler`\<[`ReactIncomingEvent`](../../declarations/type-aliases/ReactIncomingEvent.md)\>, `"lazy"` \| `"layout"`\>

The options for the component.

## Returns

`MetaComponentEventHandler`\<[`ReactIncomingEvent`](../../declarations/type-aliases/ReactIncomingEvent.md)\>

The meta component event handler.
