[**Use React Documentation v0.0.2**](../../../README.md)

***

[Use React Documentation](../../../modules.md) / [middleware/BrowserResponseMiddleware](../README.md) / BrowserResponseMiddleware

# Class: BrowserResponseMiddleware

Defined in: use-react/src/middleware/BrowserResponseMiddleware.ts:16

Middleware for handling outgoing responses and transforming them into the appropriate browser responses.

This middleware processes outgoing responses to be rendered in the browser.

## Constructors

### new BrowserResponseMiddleware()

> **new BrowserResponseMiddleware**(`options`): [`BrowserResponseMiddleware`](BrowserResponseMiddleware.md)

Defined in: use-react/src/middleware/BrowserResponseMiddleware.ts:37

Create a BrowserResponseMiddleware.

#### Parameters

##### options

Options for creating the BrowserResponseMiddleware.

###### blueprint

`IBlueprint`

#### Returns

[`BrowserResponseMiddleware`](BrowserResponseMiddleware.md)

## Methods

### handle()

> **handle**(`context`, `next`): `Promise`\<`BrowserAdapterResponseBuilder`\>

Defined in: use-react/src/middleware/BrowserResponseMiddleware.ts:51

Handles the outgoing response, processes it, and invokes the next middleware in the pipeline.

#### Parameters

##### context

[`ReactBrowserAdapterContext`](../../../declarations/type-aliases/ReactBrowserAdapterContext.md)

The adapter context containing the raw event, execution context, and other data.

##### next

`NextPipe`\<[`ReactBrowserAdapterContext`](../../../declarations/type-aliases/ReactBrowserAdapterContext.md), `BrowserAdapterResponseBuilder`\>

The next middleware to be invoked in the pipeline.

#### Returns

`Promise`\<`BrowserAdapterResponseBuilder`\>

A promise resolving to the processed context.

#### Throws

If required components are missing in the context.
