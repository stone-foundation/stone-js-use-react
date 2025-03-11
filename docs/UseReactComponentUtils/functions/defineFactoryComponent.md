[**Use React Documentation v0.0.2**](../../README.md)

***

[Use React Documentation](../../modules.md) / [UseReactComponentUtils](../README.md) / defineFactoryComponent

# Function: defineFactoryComponent()

> **defineFactoryComponent**(`module`, `options`): `MetaComponentEventHandler`\<[`ReactIncomingEvent`](../../declarations/type-aliases/ReactIncomingEvent.md)\>

Defined in: [use-react/src/UseReactComponentUtils.ts:273](https://github.com/stonemjs/use-react/blob/4786d31a3beb1c9f15eb30e2c9c2b12c786b755a/src/UseReactComponentUtils.ts#L273)

Define a factory component.

## Parameters

### module

The factory component module.

`FactoryComponentEventHandler`\<[`ReactIncomingEvent`](../../declarations/type-aliases/ReactIncomingEvent.md)\> | `LazyFactoryComponentEventHandler`\<[`ReactIncomingEvent`](../../declarations/type-aliases/ReactIncomingEvent.md)\>

### options

`Pick`\<`MetaComponentEventHandler`\<[`ReactIncomingEvent`](../../declarations/type-aliases/ReactIncomingEvent.md)\>, `"lazy"` \| `"layout"`\>

The options for the component.

## Returns

`MetaComponentEventHandler`\<[`ReactIncomingEvent`](../../declarations/type-aliases/ReactIncomingEvent.md)\>

The meta component event handler.
