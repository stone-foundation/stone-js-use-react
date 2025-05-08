[**Use React Documentation v0.0.2**](../../../README.md)

***

[Use React Documentation](../../../modules.md) / [decorators/Page](../README.md) / PageOptions

# Interface: PageOptions

Defined in: [use-react/src/decorators/Page.ts:11](https://github.com/stonemjs/use-react/blob/50c96852bd65a75b7f2a00786393fb0c90af6da8/src/decorators/Page.ts#L11)

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

Defined in: [use-react/src/decorators/Page.ts:13](https://github.com/stonemjs/use-react/blob/50c96852bd65a75b7f2a00786393fb0c90af6da8/src/decorators/Page.ts#L13)

***

### layout?

> `optional` **layout**: `string`

Defined in: [use-react/src/decorators/Page.ts:12](https://github.com/stonemjs/use-react/blob/50c96852bd65a75b7f2a00786393fb0c90af6da8/src/decorators/Page.ts#L12)
