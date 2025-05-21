[**Use React Documentation v0.0.2**](../../../README.md)

***

[Use React Documentation](../../../modules.md) / [options/UseReactBlueprint](../README.md) / UseReactConfig

# Interface: UseReactConfig

Defined in: [use-react/src/options/UseReactBlueprint.ts:10](https://github.com/stonemjs/use-react/blob/9a749b225241b8e0ac2a5483904ca8322927b1d4/src/options/UseReactBlueprint.ts#L10)

Configuration options for integrating React with Stone.js.

## Properties

### adapterErrorHandlers?

> `optional` **adapterErrorHandlers**: `Record`\<`string`, [`MetaAdapterErrorPage`](../../../declarations/interfaces/MetaAdapterErrorPage.md)\<`unknown`, `unknown`, `unknown`\>\>

Defined in: [use-react/src/options/UseReactBlueprint.ts:39](https://github.com/stonemjs/use-react/blob/9a749b225241b8e0ac2a5483904ca8322927b1d4/src/options/UseReactBlueprint.ts#L39)

A map of error handlers for adapter-level errors.

***

### componentEventHandler?

> `optional` **componentEventHandler**: [`IPage`](../../../declarations/interfaces/IPage.md)\<[`ReactIncomingEvent`](../../../declarations/type-aliases/ReactIncomingEvent.md)\>

Defined in: [use-react/src/options/UseReactBlueprint.ts:29](https://github.com/stonemjs/use-react/blob/9a749b225241b8e0ac2a5483904ca8322927b1d4/src/options/UseReactBlueprint.ts#L29)

Handles incoming events for the root React component.

***

### errorHandlers?

> `optional` **errorHandlers**: `Record`\<`string`, [`MetaErrorPage`](../../../declarations/interfaces/MetaErrorPage.md)\<[`ReactIncomingEvent`](../../../declarations/type-aliases/ReactIncomingEvent.md)\>\>

Defined in: [use-react/src/options/UseReactBlueprint.ts:34](https://github.com/stonemjs/use-react/blob/9a749b225241b8e0ac2a5483904ca8322927b1d4/src/options/UseReactBlueprint.ts#L34)

A map of error handlers for specific components.

***

### htmlTemplatePath?

> `optional` **htmlTemplatePath**: `string`

Defined in: [use-react/src/options/UseReactBlueprint.ts:19](https://github.com/stonemjs/use-react/blob/9a749b225241b8e0ac2a5483904ca8322927b1d4/src/options/UseReactBlueprint.ts#L19)

Path to the HTML template used for server-side rendering.

***

### layout?

> `optional` **layout**: `Record`\<`string`, [`MetaPageLayout`](../../../declarations/interfaces/MetaPageLayout.md)\>

Defined in: [use-react/src/options/UseReactBlueprint.ts:24](https://github.com/stonemjs/use-react/blob/9a749b225241b8e0ac2a5483904ca8322927b1d4/src/options/UseReactBlueprint.ts#L24)

A map of layout components with their respective event handlers.

***

### rootElementId?

> `optional` **rootElementId**: `string`

Defined in: [use-react/src/options/UseReactBlueprint.ts:14](https://github.com/stonemjs/use-react/blob/9a749b225241b8e0ac2a5483904ca8322927b1d4/src/options/UseReactBlueprint.ts#L14)

The ID of the root DOM element where React will be mounted.
