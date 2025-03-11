[**Use React Documentation v0.0.2**](../../../README.md)

***

[Use React Documentation](../../../modules.md) / [decorators/Page](../README.md) / PageOptions

# Interface: PageOptions

Defined in: [use-react/src/decorators/Page.ts:11](https://github.com/stonemjs/use-react/blob/4786d31a3beb1c9f15eb30e2c9c2b12c786b755a/src/decorators/Page.ts#L11)

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

Defined in: [use-react/src/decorators/Page.ts:13](https://github.com/stonemjs/use-react/blob/4786d31a3beb1c9f15eb30e2c9c2b12c786b755a/src/decorators/Page.ts#L13)

***

### layout?

> `optional` **layout**: `string`

Defined in: [use-react/src/decorators/Page.ts:12](https://github.com/stonemjs/use-react/blob/4786d31a3beb1c9f15eb30e2c9c2b12c786b755a/src/decorators/Page.ts#L12)
