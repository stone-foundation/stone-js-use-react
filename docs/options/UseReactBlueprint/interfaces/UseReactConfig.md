[**Use React Documentation v0.0.2**](../../../README.md)

***

[Use React Documentation](../../../modules.md) / [options/UseReactBlueprint](../README.md) / UseReactConfig

# Interface: UseReactConfig

Defined in: [use-react/src/options/UseReactBlueprint.ts:10](https://github.com/stonemjs/use-react/blob/0635de04acc6b3a5c28dcf07d1e12a39a8b5e0b9/src/options/UseReactBlueprint.ts#L10)

Configuration options for integrating React with Stone.js.

## Properties

### adapterErrorPages?

> `optional` **adapterErrorPages**: `Record`\<`string`, [`MetaAdapterErrorPage`](../../../declarations/interfaces/MetaAdapterErrorPage.md)\<`unknown`, `unknown`, `unknown`\>\>

Defined in: [use-react/src/options/UseReactBlueprint.ts:39](https://github.com/stonemjs/use-react/blob/0635de04acc6b3a5c28dcf07d1e12a39a8b5e0b9/src/options/UseReactBlueprint.ts#L39)

A map of error pages for adapter-level errors.

***

### componentEventHandler?

> `optional` **componentEventHandler**: [`MetaPage`](../../../declarations/interfaces/MetaPage.md)\<[`ReactIncomingEvent`](../../../declarations/type-aliases/ReactIncomingEvent.md)\>

Defined in: [use-react/src/options/UseReactBlueprint.ts:29](https://github.com/stonemjs/use-react/blob/0635de04acc6b3a5c28dcf07d1e12a39a8b5e0b9/src/options/UseReactBlueprint.ts#L29)

Handles incoming events for the root React component.

***

### errorPages?

> `optional` **errorPages**: `Record`\<`string`, [`MetaErrorPage`](../../../declarations/interfaces/MetaErrorPage.md)\<[`ReactIncomingEvent`](../../../declarations/type-aliases/ReactIncomingEvent.md)\>\>

Defined in: [use-react/src/options/UseReactBlueprint.ts:34](https://github.com/stonemjs/use-react/blob/0635de04acc6b3a5c28dcf07d1e12a39a8b5e0b9/src/options/UseReactBlueprint.ts#L34)

A map of error pages for specific components.

***

### htmlTemplatePath?

> `optional` **htmlTemplatePath**: `string`

Defined in: [use-react/src/options/UseReactBlueprint.ts:19](https://github.com/stonemjs/use-react/blob/0635de04acc6b3a5c28dcf07d1e12a39a8b5e0b9/src/options/UseReactBlueprint.ts#L19)

Path to the HTML template used for server-side rendering.

***

### layout?

> `optional` **layout**: `Record`\<`string`, [`MetaPageLayout`](../../../declarations/interfaces/MetaPageLayout.md)\>

Defined in: [use-react/src/options/UseReactBlueprint.ts:24](https://github.com/stonemjs/use-react/blob/0635de04acc6b3a5c28dcf07d1e12a39a8b5e0b9/src/options/UseReactBlueprint.ts#L24)

A map of layout components with their respective event handlers.

***

### rootElementId?

> `optional` **rootElementId**: `string`

Defined in: [use-react/src/options/UseReactBlueprint.ts:14](https://github.com/stonemjs/use-react/blob/0635de04acc6b3a5c28dcf07d1e12a39a8b5e0b9/src/options/UseReactBlueprint.ts#L14)

The ID of the root DOM element where React will be mounted.
