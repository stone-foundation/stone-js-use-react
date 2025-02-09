[**Use React Documentation v0.0.2**](../../README.md)

***

[Use React Documentation](../../modules.md) / [utils](../README.md) / defineClassComponent

# Function: defineClassComponent()

> **defineClassComponent**(`module`, `options`): `MetaComponentEventHandler`\<[`ReactIncomingEvent`](../../declarations/type-aliases/ReactIncomingEvent.md)\>

Defined in: [use-react/src/utils.ts:164](https://github.com/stonemjs/use-react/blob/48b0fa89405b138aef5b9a5bc1a85e12108c1404/src/utils.ts#L164)

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
