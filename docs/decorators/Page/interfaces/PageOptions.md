[**Use React Documentation v0.0.2**](../../../README.md)

***

[Use React Documentation](../../../modules.md) / [decorators/Page](../README.md) / PageOptions

# Interface: PageOptions

Defined in: [use-react/src/decorators/Page.ts:11](https://github.com/stonemjs/use-react/blob/d8ec502192c16b8752fc9e1bf85bd5600bcf9813/src/decorators/Page.ts#L11)

Options for configuring the `Page` decorator.
Extends `PageRouteDefinition` but excludes the `methods` property,
as it is predefined as `'GET'` by the decorator.

## Extends

- `DecoratorPageRouteDefinition`

## Indexable

\[`key`: `string`\]: `unknown`

\[`key`: `number`\]: `unknown`

## Properties

### headers?

> `optional` **headers**: [`HeadersType`](../../../declarations/type-aliases/HeadersType.md)

Defined in: [use-react/src/decorators/Page.ts:13](https://github.com/stonemjs/use-react/blob/d8ec502192c16b8752fc9e1bf85bd5600bcf9813/src/decorators/Page.ts#L13)

***

### layout?

> `optional` **layout**: `string`

Defined in: [use-react/src/decorators/Page.ts:12](https://github.com/stonemjs/use-react/blob/d8ec502192c16b8752fc9e1bf85bd5600bcf9813/src/decorators/Page.ts#L12)
