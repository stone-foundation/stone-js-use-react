[**Use React Documentation v0.0.2**](../../../README.md)

***

[Use React Documentation](../../../modules.md) / [decorators/UseReact](../README.md) / UseReactOptions

# Interface: UseReactOptions

Defined in: [use-react/src/decorators/UseReact.ts:8](https://github.com/stonemjs/use-react/blob/d8ec502192c16b8752fc9e1bf85bd5600bcf9813/src/decorators/UseReact.ts#L8)

UseReact decorator options.

## Extends

- `Partial`\<[`UseReactConfig`](../../../options/UseReactBlueprint/interfaces/UseReactConfig.md)\>

## Properties

### adapterErrorHandlers?

> `optional` **adapterErrorHandlers**: `Record`\<`string`, [`MetaComponentErrorHandler`](../../../declarations/interfaces/MetaComponentErrorHandler.md)\<[`ReactIncomingEvent`](../../../declarations/type-aliases/ReactIncomingEvent.md)\>\>

Defined in: [use-react/src/options/UseReactBlueprint.ts:40](https://github.com/stonemjs/use-react/blob/d8ec502192c16b8752fc9e1bf85bd5600bcf9813/src/options/UseReactBlueprint.ts#L40)

A map of error handlers for adapter-level errors.

#### Inherited from

`Partial.adapterErrorHandlers`

***

### componentEventHandler?

> `optional` **componentEventHandler**: `MetaComponentEventHandler`\<[`ReactIncomingEvent`](../../../declarations/type-aliases/ReactIncomingEvent.md)\>

Defined in: [use-react/src/options/UseReactBlueprint.ts:25](https://github.com/stonemjs/use-react/blob/d8ec502192c16b8752fc9e1bf85bd5600bcf9813/src/options/UseReactBlueprint.ts#L25)

Handles incoming events for the root React component.

#### Inherited from

`Partial.componentEventHandler`

***

### errorHandlers?

> `optional` **errorHandlers**: `Record`\<`string`, [`MetaComponentErrorHandler`](../../../declarations/interfaces/MetaComponentErrorHandler.md)\<[`ReactIncomingEvent`](../../../declarations/type-aliases/ReactIncomingEvent.md)\>\>

Defined in: [use-react/src/options/UseReactBlueprint.ts:35](https://github.com/stonemjs/use-react/blob/d8ec502192c16b8752fc9e1bf85bd5600bcf9813/src/options/UseReactBlueprint.ts#L35)

A map of error handlers for specific components.

#### Inherited from

`Partial.errorHandlers`

***

### htmlTemplatePath?

> `optional` **htmlTemplatePath**: `string`

Defined in: [use-react/src/options/UseReactBlueprint.ts:20](https://github.com/stonemjs/use-react/blob/d8ec502192c16b8752fc9e1bf85bd5600bcf9813/src/options/UseReactBlueprint.ts#L20)

Path to the HTML template used for server-side rendering.

#### Inherited from

`Partial.htmlTemplatePath`

***

### layout?

> `optional` **layout**: `Record`\<`string`, `MetaComponentEventHandler`\<[`ReactIncomingEvent`](../../../declarations/type-aliases/ReactIncomingEvent.md)\>\>

Defined in: [use-react/src/options/UseReactBlueprint.ts:30](https://github.com/stonemjs/use-react/blob/d8ec502192c16b8752fc9e1bf85bd5600bcf9813/src/options/UseReactBlueprint.ts#L30)

A map of layout components with their respective event handlers.

#### Inherited from

`Partial.layout`

***

### rootElementId?

> `optional` **rootElementId**: `string`

Defined in: [use-react/src/options/UseReactBlueprint.ts:15](https://github.com/stonemjs/use-react/blob/d8ec502192c16b8752fc9e1bf85bd5600bcf9813/src/options/UseReactBlueprint.ts#L15)

The ID of the root DOM element where React will be mounted.

#### Inherited from

`Partial.rootElementId`
