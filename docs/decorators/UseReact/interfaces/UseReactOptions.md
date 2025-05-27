[**Use React Documentation v0.0.2**](../../../README.md)

***

[Use React Documentation](../../../modules.md) / [decorators/UseReact](../README.md) / UseReactOptions

# Interface: UseReactOptions

Defined in: [use-react/src/decorators/UseReact.ts:8](https://github.com/stonemjs/use-react/blob/a85b32b76e105a7bc655ce084e0841ade8b0df8a/src/decorators/UseReact.ts#L8)

UseReact decorator options.

## Extends

- `Partial`\<[`UseReactConfig`](../../../options/UseReactBlueprint/interfaces/UseReactConfig.md)\>

## Properties

### adapterErrorPages?

> `optional` **adapterErrorPages**: `Record`\<`string`, [`MetaAdapterErrorPage`](../../../declarations/interfaces/MetaAdapterErrorPage.md)\<`unknown`, `unknown`, `unknown`\>\>

Defined in: [use-react/src/options/UseReactBlueprint.ts:39](https://github.com/stonemjs/use-react/blob/a85b32b76e105a7bc655ce084e0841ade8b0df8a/src/options/UseReactBlueprint.ts#L39)

A map of error pages for adapter-level errors.

#### Inherited from

`Partial.adapterErrorPages`

***

### componentEventHandler?

> `optional` **componentEventHandler**: [`MetaPage`](../../../declarations/interfaces/MetaPage.md)\<[`ReactIncomingEvent`](../../../declarations/type-aliases/ReactIncomingEvent.md)\>

Defined in: [use-react/src/options/UseReactBlueprint.ts:29](https://github.com/stonemjs/use-react/blob/a85b32b76e105a7bc655ce084e0841ade8b0df8a/src/options/UseReactBlueprint.ts#L29)

Handles incoming events for the root React component.

#### Inherited from

`Partial.componentEventHandler`

***

### errorPages?

> `optional` **errorPages**: `Record`\<`string`, [`MetaErrorPage`](../../../declarations/interfaces/MetaErrorPage.md)\<[`ReactIncomingEvent`](../../../declarations/type-aliases/ReactIncomingEvent.md)\>\>

Defined in: [use-react/src/options/UseReactBlueprint.ts:34](https://github.com/stonemjs/use-react/blob/a85b32b76e105a7bc655ce084e0841ade8b0df8a/src/options/UseReactBlueprint.ts#L34)

A map of error pages for specific components.

#### Inherited from

`Partial.errorPages`

***

### htmlTemplatePath?

> `optional` **htmlTemplatePath**: `string`

Defined in: [use-react/src/options/UseReactBlueprint.ts:19](https://github.com/stonemjs/use-react/blob/a85b32b76e105a7bc655ce084e0841ade8b0df8a/src/options/UseReactBlueprint.ts#L19)

Path to the HTML template used for server-side rendering.

#### Inherited from

`Partial.htmlTemplatePath`

***

### layout?

> `optional` **layout**: `Record`\<`string`, [`MetaPageLayout`](../../../declarations/interfaces/MetaPageLayout.md)\>

Defined in: [use-react/src/options/UseReactBlueprint.ts:24](https://github.com/stonemjs/use-react/blob/a85b32b76e105a7bc655ce084e0841ade8b0df8a/src/options/UseReactBlueprint.ts#L24)

A map of layout components with their respective event handlers.

#### Inherited from

`Partial.layout`

***

### rootElementId?

> `optional` **rootElementId**: `string`

Defined in: [use-react/src/options/UseReactBlueprint.ts:14](https://github.com/stonemjs/use-react/blob/a85b32b76e105a7bc655ce084e0841ade8b0df8a/src/options/UseReactBlueprint.ts#L14)

The ID of the root DOM element where React will be mounted.

#### Inherited from

`Partial.rootElementId`
