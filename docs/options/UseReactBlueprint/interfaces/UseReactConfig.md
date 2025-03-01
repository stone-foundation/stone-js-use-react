[**Use React Documentation v0.0.2**](../../../README.md)

***

[Use React Documentation](../../../modules.md) / [options/UseReactBlueprint](../README.md) / UseReactConfig

# Interface: UseReactConfig

Defined in: [use-react/src/options/UseReactBlueprint.ts:11](https://github.com/stonemjs/use-react/blob/d8ec502192c16b8752fc9e1bf85bd5600bcf9813/src/options/UseReactBlueprint.ts#L11)

Configuration options for integrating React with Stone.js.

## Properties

### adapterErrorHandlers?

> `optional` **adapterErrorHandlers**: `Record`\<`string`, [`MetaComponentErrorHandler`](../../../declarations/interfaces/MetaComponentErrorHandler.md)\<[`ReactIncomingEvent`](../../../declarations/type-aliases/ReactIncomingEvent.md)\>\>

Defined in: [use-react/src/options/UseReactBlueprint.ts:40](https://github.com/stonemjs/use-react/blob/d8ec502192c16b8752fc9e1bf85bd5600bcf9813/src/options/UseReactBlueprint.ts#L40)

A map of error handlers for adapter-level errors.

***

### componentEventHandler?

> `optional` **componentEventHandler**: `MetaComponentEventHandler`\<[`ReactIncomingEvent`](../../../declarations/type-aliases/ReactIncomingEvent.md)\>

Defined in: [use-react/src/options/UseReactBlueprint.ts:25](https://github.com/stonemjs/use-react/blob/d8ec502192c16b8752fc9e1bf85bd5600bcf9813/src/options/UseReactBlueprint.ts#L25)

Handles incoming events for the root React component.

***

### errorHandlers?

> `optional` **errorHandlers**: `Record`\<`string`, [`MetaComponentErrorHandler`](../../../declarations/interfaces/MetaComponentErrorHandler.md)\<[`ReactIncomingEvent`](../../../declarations/type-aliases/ReactIncomingEvent.md)\>\>

Defined in: [use-react/src/options/UseReactBlueprint.ts:35](https://github.com/stonemjs/use-react/blob/d8ec502192c16b8752fc9e1bf85bd5600bcf9813/src/options/UseReactBlueprint.ts#L35)

A map of error handlers for specific components.

***

### htmlTemplatePath?

> `optional` **htmlTemplatePath**: `string`

Defined in: [use-react/src/options/UseReactBlueprint.ts:20](https://github.com/stonemjs/use-react/blob/d8ec502192c16b8752fc9e1bf85bd5600bcf9813/src/options/UseReactBlueprint.ts#L20)

Path to the HTML template used for server-side rendering.

***

### layout?

> `optional` **layout**: `Record`\<`string`, `MetaComponentEventHandler`\<[`ReactIncomingEvent`](../../../declarations/type-aliases/ReactIncomingEvent.md)\>\>

Defined in: [use-react/src/options/UseReactBlueprint.ts:30](https://github.com/stonemjs/use-react/blob/d8ec502192c16b8752fc9e1bf85bd5600bcf9813/src/options/UseReactBlueprint.ts#L30)

A map of layout components with their respective event handlers.

***

### rootElementId?

> `optional` **rootElementId**: `string`

Defined in: [use-react/src/options/UseReactBlueprint.ts:15](https://github.com/stonemjs/use-react/blob/d8ec502192c16b8752fc9e1bf85bd5600bcf9813/src/options/UseReactBlueprint.ts#L15)

The ID of the root DOM element where React will be mounted.
