[**Use React Documentation v0.0.2**](../../../README.md)

***

[Use React Documentation](../../../modules.md) / [blueprint/KernelUtils](../README.md) / definePage

# Function: definePage()

Utility function to define a page.

## Param

The EventHandler module.

## Param

Page definition options.

## Call Signature

> **definePage**\<`U`\>(`module`, `options`): `Partial`\<`StoneBlueprint`\<`U`\>\>

Defined in: [use-react/src/blueprint/KernelUtils.ts:27](https://github.com/stonemjs/use-react/blob/a85b32b76e105a7bc655ce084e0841ade8b0df8a/src/blueprint/KernelUtils.ts#L27)

Utility function to define a factory-based page.

### Type Parameters

• **U** *extends* [`ReactIncomingEvent`](../../../declarations/type-aliases/ReactIncomingEvent.md) = [`ReactIncomingEvent`](../../../declarations/type-aliases/ReactIncomingEvent.md)

### Parameters

#### module

[`FactoryPage`](../../../declarations/type-aliases/FactoryPage.md)\<`U`\>

The EventHandler module.

#### options

[`PageOptions`](../../../declarations/interfaces/PageOptions.md) & `object`

Page definition options.

### Returns

`Partial`\<`StoneBlueprint`\<`U`\>\>

The UseReactBlueprint.

The UseReactBlueprint.

### Param

The EventHandler module.

### Param

Page definition options.

## Call Signature

> **definePage**\<`U`\>(`module`, `options`): `Partial`\<`StoneBlueprint`\<`U`\>\>

Defined in: [use-react/src/blueprint/KernelUtils.ts:39](https://github.com/stonemjs/use-react/blob/a85b32b76e105a7bc655ce084e0841ade8b0df8a/src/blueprint/KernelUtils.ts#L39)

Utility function to define a class-based page.

### Type Parameters

• **U** *extends* [`ReactIncomingEvent`](../../../declarations/type-aliases/ReactIncomingEvent.md) = [`ReactIncomingEvent`](../../../declarations/type-aliases/ReactIncomingEvent.md)

### Parameters

#### module

[`PageClass`](../../../declarations/type-aliases/PageClass.md)\<`U`\>

The EventHandler module.

#### options

[`PageOptions`](../../../declarations/interfaces/PageOptions.md) & `object`

Page definition options.

### Returns

`Partial`\<`StoneBlueprint`\<`U`\>\>

The UseReactBlueprint.

The UseReactBlueprint.

### Param

The EventHandler module.

### Param

Page definition options.
