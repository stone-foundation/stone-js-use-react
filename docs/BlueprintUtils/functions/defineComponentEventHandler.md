[**Use React Documentation v0.0.2**](../../README.md)

***

[Use React Documentation](../../modules.md) / [BlueprintUtils](../README.md) / defineComponentEventHandler

# Function: defineComponentEventHandler()

Utility function to define a Stone component.

## Param

The factory component module.

## Param

Indicates if the handler is a factory function. e.g. `true` for a factory function, `false` for a class.

## Param

The options for the component.

## Call Signature

> **defineComponentEventHandler**(`module`, `isFactory`?, `options`?): `Partial`\<[`UseReactBlueprint`](../../options/UseReactBlueprint/interfaces/UseReactBlueprint.md)\>

Defined in: use-react/src/BlueprintUtils.ts:18

Utility function to define a factory-based Stone component.

### Parameters

#### module

`FactoryComponentEventHandler`\<[`ReactIncomingEvent`](../../declarations/type-aliases/ReactIncomingEvent.md)\>

The factory component module.

#### isFactory?

`true`

Indicates if the handler is a factory function. e.g. `true` for a factory function.

#### options?

The options for the component.

##### layout

`unknown`

##### lazy

`false`

### Returns

`Partial`\<[`UseReactBlueprint`](../../options/UseReactBlueprint/interfaces/UseReactBlueprint.md)\>

The meta component event handler.

The meta component event handler.

### Param

The factory component module.

### Param

Indicates if the handler is a factory function. e.g. `true` for a factory function, `false` for a class.

### Param

The options for the component.

## Call Signature

> **defineComponentEventHandler**(`module`, `isFactory`?, `options`?): `Partial`\<[`UseReactBlueprint`](../../options/UseReactBlueprint/interfaces/UseReactBlueprint.md)\>

Defined in: use-react/src/BlueprintUtils.ts:32

Utility function to define a lazy factory-based Stone component.

### Parameters

#### module

`LazyFactoryComponentEventHandler`\<[`ReactIncomingEvent`](../../declarations/type-aliases/ReactIncomingEvent.md)\>

The factory component module.

#### isFactory?

`true`

Indicates if the handler is a factory function. e.g. `true` for a factory function.

#### options?

The options for the component.

##### layout

`unknown`

##### lazy

`true`

### Returns

`Partial`\<[`UseReactBlueprint`](../../options/UseReactBlueprint/interfaces/UseReactBlueprint.md)\>

The meta component event handler.

The meta component event handler.

### Param

The factory component module.

### Param

Indicates if the handler is a factory function. e.g. `true` for a factory function, `false` for a class.

### Param

The options for the component.

## Call Signature

> **defineComponentEventHandler**(`module`, `isFactory`?, `options`?): `Partial`\<[`UseReactBlueprint`](../../options/UseReactBlueprint/interfaces/UseReactBlueprint.md)\>

Defined in: use-react/src/BlueprintUtils.ts:46

Utility function to define a class-based Stone component.

### Parameters

#### module

`ComponentEventHandlerClass`\<[`ReactIncomingEvent`](../../declarations/type-aliases/ReactIncomingEvent.md)\>

The factory component module.

#### isFactory?

`false`

Indicates if the handler is a factory function. e.g. `false` for a class.

#### options?

The options for the component.

##### layout

`unknown`

##### lazy

`false`

### Returns

`Partial`\<[`UseReactBlueprint`](../../options/UseReactBlueprint/interfaces/UseReactBlueprint.md)\>

The meta component event handler.

The meta component event handler.

### Param

The factory component module.

### Param

Indicates if the handler is a factory function. e.g. `true` for a factory function, `false` for a class.

### Param

The options for the component.

## Call Signature

> **defineComponentEventHandler**(`module`, `isFactory`?, `options`?): `Partial`\<[`UseReactBlueprint`](../../options/UseReactBlueprint/interfaces/UseReactBlueprint.md)\>

Defined in: use-react/src/BlueprintUtils.ts:60

Utility function to define a lazy class-based Stone component.

### Parameters

#### module

`LazyComponentEventHandlerClass`\<[`ReactIncomingEvent`](../../declarations/type-aliases/ReactIncomingEvent.md)\>

The factory component module.

#### isFactory?

`false`

Indicates if the handler is a factory function. e.g. `false` for a class.

#### options?

The options for the component.

##### layout

`unknown`

##### lazy

`true`

### Returns

`Partial`\<[`UseReactBlueprint`](../../options/UseReactBlueprint/interfaces/UseReactBlueprint.md)\>

The meta component event handler.

The meta component event handler.

### Param

The factory component module.

### Param

Indicates if the handler is a factory function. e.g. `true` for a factory function, `false` for a class.

### Param

The options for the component.
