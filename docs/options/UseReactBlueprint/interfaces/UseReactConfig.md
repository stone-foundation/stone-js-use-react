[**Use React Documentation v0.0.2**](../../../README.md)

***

[Use React Documentation](../../../modules.md) / [options/UseReactBlueprint](../README.md) / UseReactConfig

# Interface: UseReactConfig

Defined in: [use-react/src/options/UseReactBlueprint.ts:10](https://github.com/stonemjs/use-react/blob/27c0c592da81eceb639bfca4a4a8f24a448ad89c/src/options/UseReactBlueprint.ts#L10)

Configuration options for integrating React with Stone.js.

## Properties

### adapterErrorHandlers?

> `optional` **adapterErrorHandlers**: `Record`\<`string`, [`MetaComponentErrorHandler`](../../../declarations/interfaces/MetaComponentErrorHandler.md)\<[`ReactIncomingEvent`](../../../declarations/type-aliases/ReactIncomingEvent.md)\>\>

Defined in: [use-react/src/options/UseReactBlueprint.ts:39](https://github.com/stonemjs/use-react/blob/27c0c592da81eceb639bfca4a4a8f24a448ad89c/src/options/UseReactBlueprint.ts#L39)

A map of error handlers for adapter-level errors.

***

### componentEventHandler?

> `optional` **componentEventHandler**: `MetaComponentEventHandler`\<[`ReactIncomingEvent`](../../../declarations/type-aliases/ReactIncomingEvent.md)\>

Defined in: [use-react/src/options/UseReactBlueprint.ts:24](https://github.com/stonemjs/use-react/blob/27c0c592da81eceb639bfca4a4a8f24a448ad89c/src/options/UseReactBlueprint.ts#L24)

Handles incoming events for the root React component.

***

### errorHandlers?

> `optional` **errorHandlers**: `Record`\<`string`, [`MetaComponentErrorHandler`](../../../declarations/interfaces/MetaComponentErrorHandler.md)\<[`ReactIncomingEvent`](../../../declarations/type-aliases/ReactIncomingEvent.md)\>\>

Defined in: [use-react/src/options/UseReactBlueprint.ts:34](https://github.com/stonemjs/use-react/blob/27c0c592da81eceb639bfca4a4a8f24a448ad89c/src/options/UseReactBlueprint.ts#L34)

A map of error handlers for specific components.

***

### htmlTemplatePath?

> `optional` **htmlTemplatePath**: `string`

Defined in: [use-react/src/options/UseReactBlueprint.ts:19](https://github.com/stonemjs/use-react/blob/27c0c592da81eceb639bfca4a4a8f24a448ad89c/src/options/UseReactBlueprint.ts#L19)

Path to the HTML template used for server-side rendering.

***

### layout?

> `optional` **layout**: `Record`\<`string`, `MetaComponentEventHandler`\<[`ReactIncomingEvent`](../../../declarations/type-aliases/ReactIncomingEvent.md)\>\>

Defined in: [use-react/src/options/UseReactBlueprint.ts:29](https://github.com/stonemjs/use-react/blob/27c0c592da81eceb639bfca4a4a8f24a448ad89c/src/options/UseReactBlueprint.ts#L29)

A map of layout components with their respective event handlers.

***

### rootElementId?

> `optional` **rootElementId**: `string`

Defined in: [use-react/src/options/UseReactBlueprint.ts:14](https://github.com/stonemjs/use-react/blob/27c0c592da81eceb639bfca4a4a8f24a448ad89c/src/options/UseReactBlueprint.ts#L14)

The ID of the root DOM element where React will be mounted.
