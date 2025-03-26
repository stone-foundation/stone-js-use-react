[**Use React Documentation v0.0.2**](../../../README.md)

***

[Use React Documentation](../../../modules.md) / [decorators/UseReact](../README.md) / UseReactOptions

# Interface: UseReactOptions

Defined in: [use-react/src/decorators/UseReact.ts:8](https://github.com/stonemjs/use-react/blob/27c0c592da81eceb639bfca4a4a8f24a448ad89c/src/decorators/UseReact.ts#L8)

UseReact decorator options.

## Extends

- `Partial`\<[`UseReactConfig`](../../../options/UseReactBlueprint/interfaces/UseReactConfig.md)\>

## Properties

### adapterErrorHandlers?

> `optional` **adapterErrorHandlers**: `Record`\<`string`, [`MetaComponentErrorHandler`](../../../declarations/interfaces/MetaComponentErrorHandler.md)\<[`ReactIncomingEvent`](../../../declarations/type-aliases/ReactIncomingEvent.md)\>\>

Defined in: [use-react/src/options/UseReactBlueprint.ts:39](https://github.com/stonemjs/use-react/blob/27c0c592da81eceb639bfca4a4a8f24a448ad89c/src/options/UseReactBlueprint.ts#L39)

A map of error handlers for adapter-level errors.

#### Inherited from

`Partial.adapterErrorHandlers`

***

### componentEventHandler?

> `optional` **componentEventHandler**: `MetaComponentEventHandler`\<[`ReactIncomingEvent`](../../../declarations/type-aliases/ReactIncomingEvent.md)\>

Defined in: [use-react/src/options/UseReactBlueprint.ts:24](https://github.com/stonemjs/use-react/blob/27c0c592da81eceb639bfca4a4a8f24a448ad89c/src/options/UseReactBlueprint.ts#L24)

Handles incoming events for the root React component.

#### Inherited from

`Partial.componentEventHandler`

***

### errorHandlers?

> `optional` **errorHandlers**: `Record`\<`string`, [`MetaComponentErrorHandler`](../../../declarations/interfaces/MetaComponentErrorHandler.md)\<[`ReactIncomingEvent`](../../../declarations/type-aliases/ReactIncomingEvent.md)\>\>

Defined in: [use-react/src/options/UseReactBlueprint.ts:34](https://github.com/stonemjs/use-react/blob/27c0c592da81eceb639bfca4a4a8f24a448ad89c/src/options/UseReactBlueprint.ts#L34)

A map of error handlers for specific components.

#### Inherited from

`Partial.errorHandlers`

***

### htmlTemplatePath?

> `optional` **htmlTemplatePath**: `string`

Defined in: [use-react/src/options/UseReactBlueprint.ts:19](https://github.com/stonemjs/use-react/blob/27c0c592da81eceb639bfca4a4a8f24a448ad89c/src/options/UseReactBlueprint.ts#L19)

Path to the HTML template used for server-side rendering.

#### Inherited from

`Partial.htmlTemplatePath`

***

### layout?

> `optional` **layout**: `Record`\<`string`, `MetaComponentEventHandler`\<[`ReactIncomingEvent`](../../../declarations/type-aliases/ReactIncomingEvent.md)\>\>

Defined in: [use-react/src/options/UseReactBlueprint.ts:29](https://github.com/stonemjs/use-react/blob/27c0c592da81eceb639bfca4a4a8f24a448ad89c/src/options/UseReactBlueprint.ts#L29)

A map of layout components with their respective event handlers.

#### Inherited from

`Partial.layout`

***

### rootElementId?

> `optional` **rootElementId**: `string`

Defined in: [use-react/src/options/UseReactBlueprint.ts:14](https://github.com/stonemjs/use-react/blob/27c0c592da81eceb639bfca4a4a8f24a448ad89c/src/options/UseReactBlueprint.ts#L14)

The ID of the root DOM element where React will be mounted.

#### Inherited from

`Partial.rootElementId`
