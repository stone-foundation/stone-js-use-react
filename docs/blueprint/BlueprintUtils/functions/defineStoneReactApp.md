[**Use React Documentation v0.0.2**](../../../README.md)

***

[Use React Documentation](../../../modules.md) / [blueprint/BlueprintUtils](../README.md) / defineStoneReactApp

# Function: defineStoneReactApp()

Declares a complete Stone-React application blueprint.

This utility combines a main event handler with additional blueprints and configuration options
to define a full application. The event handler can be class-based, or factory-based.

## Param

A factory, or class that handles incoming events.

## Param

Optional application-level configuration (log level, middleware, lifecycle, etc.)

## Param

Additional partial blueprints to merge into the final one.

## Call Signature

> **defineStoneReactApp**\<`U`\>(`module`, `options`?, `blueprints`?): `StoneBlueprint`\<`U`\>

Defined in: use-react/src/blueprint/BlueprintUtils.ts:13

Declares a complete Stone-React application blueprint using a factory-based event handler.

### Type Parameters

• **U** *extends* [`ReactIncomingEvent`](../../../declarations/type-aliases/ReactIncomingEvent.md) = [`ReactIncomingEvent`](../../../declarations/type-aliases/ReactIncomingEvent.md)

### Parameters

#### module

[`FactoryPage`](../../../declarations/type-aliases/FactoryPage.md)\<`U`\>

A factory function that returns an event handler.

#### options?

`Partial`\<[`UseReactAppConfig`](../../../options/UseReactBlueprint/interfaces/UseReactAppConfig.md)\>

Application-level configuration.

#### blueprints?

`StoneBlueprint`\<`any`, `any`\> & `Record`\<`string`, `any`\>[]

Additional partial blueprints to merge.

### Returns

`StoneBlueprint`\<`U`\>

A fully merged Stone blueprint representing the application.

A fully merged Stone blueprint.

### Param

A factory, or class that handles incoming events.

### Param

Optional application-level configuration (log level, middleware, lifecycle, etc.)

### Param

Additional partial blueprints to merge into the final one.

## Call Signature

> **defineStoneReactApp**\<`U`\>(`module`, `options`, `blueprints`?): `StoneBlueprint`\<`U`\>

Defined in: use-react/src/blueprint/BlueprintUtils.ts:27

Declares a complete Stone-React application blueprint using a class-based event handler.

### Type Parameters

• **U** *extends* [`ReactIncomingEvent`](../../../declarations/type-aliases/ReactIncomingEvent.md) = [`ReactIncomingEvent`](../../../declarations/type-aliases/ReactIncomingEvent.md)

### Parameters

#### module

[`PageClass`](../../../declarations/type-aliases/PageClass.md)\<`U`\>

A class constructor for the event handler.

#### options

`Partial`\<[`UseReactAppConfig`](../../../options/UseReactBlueprint/interfaces/UseReactAppConfig.md)\> & `object`

Application-level configuration.

#### blueprints?

`StoneBlueprint`\<`any`, `any`\> & `Record`\<`string`, `any`\>[]

Additional partial blueprints to merge.

### Returns

`StoneBlueprint`\<`U`\>

A fully merged Stone blueprint representing the application.

A fully merged Stone blueprint.

### Param

A factory, or class that handles incoming events.

### Param

Optional application-level configuration (log level, middleware, lifecycle, etc.)

### Param

Additional partial blueprints to merge into the final one.
