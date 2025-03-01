[**Use React Documentation v0.0.2**](../../../README.md)

***

[Use React Documentation](../../../modules.md) / [options/UseReactBlueprint](../README.md) / UseReactAppConfig

# Interface: UseReactAppConfig

Defined in: [use-react/src/options/UseReactBlueprint.ts:46](https://github.com/stonemjs/use-react/blob/d8ec502192c16b8752fc9e1bf85bd5600bcf9813/src/options/UseReactBlueprint.ts#L46)

Application-level configuration that extends `AppConfig` with React-specific settings.

## Extends

- `Partial`\<`AppConfig`\<[`ReactIncomingEvent`](../../../declarations/type-aliases/ReactIncomingEvent.md), [`ReactOutgoingResponse`](../../../declarations/type-aliases/ReactOutgoingResponse.md)\>\>

## Properties

### adapter?

> `optional` **adapter**: `Partial`\<`AdapterConfig`\<[`ReactIncomingEvent`](../../../declarations/type-aliases/ReactIncomingEvent.md), [`ReactOutgoingResponse`](../../../declarations/type-aliases/ReactOutgoingResponse.md)\>\>

Defined in: core/dist/index.d.ts:520

Current Adapter configurations for the application.
This key allow you to specify the current adapter with the alias key.

#### Inherited from

`Partial.adapter`

***

### adapters?

> `optional` **adapters**: `AdapterConfig`\<[`ReactIncomingEvent`](../../../declarations/type-aliases/ReactIncomingEvent.md), [`ReactOutgoingResponse`](../../../declarations/type-aliases/ReactOutgoingResponse.md)\>[]

Defined in: core/dist/index.d.ts:524

Adapter configurations for the application.

#### Inherited from

`Partial.adapters`

***

### aliases?

> `optional` **aliases**: `Record`\<`string`, `any`\>

Defined in: core/dist/index.d.ts:555

Class aliases to be registered when the application starts.
These aliases provide shorthand references to commonly used classes.

#### Inherited from

`Partial.aliases`

***

### builder?

> `optional` **builder**: `BuilderConfig`\<`any`\>

Defined in: core/dist/index.d.ts:515

Configuration options for building the application, including middleware and pipe priorities.

#### Inherited from

`Partial.builder`

***

### debug?

> `optional` **debug**: `boolean`

Defined in: core/dist/index.d.ts:494

Determines if the application is in debug mode.
When enabled, detailed error messages with stack traces will be shown.

#### Inherited from

`Partial.debug`

***

### env?

> `optional` **env**: `Environment`

Defined in: core/dist/index.d.ts:489

The current environment in which the application is running.
Possible values are development, production, and test.

#### Inherited from

`Partial.env`

***

### fallback\_locale?

> `optional` **fallback\_locale**: `string`

Defined in: core/dist/index.d.ts:506

The fallback locale used when a translation for the default locale is unavailable.

#### Inherited from

`Partial.fallback_locale`

***

### kernel?

> `optional` **kernel**: `KernelConfig`\<[`ReactIncomingEvent`](../../../declarations/type-aliases/ReactIncomingEvent.md), [`ReactOutgoingResponse`](../../../declarations/type-aliases/ReactOutgoingResponse.md)\>

Defined in: core/dist/index.d.ts:528

Global middleware settings for the application kernel.

#### Inherited from

`Partial.kernel`

***

### lifecycleHooks?

> `optional` **lifecycleHooks**: `LifecycleHookType`\<`IBlueprint`\<`any`\>, `any`, `any`, [`ReactIncomingEvent`](../../../declarations/type-aliases/ReactIncomingEvent.md), [`ReactOutgoingResponse`](../../../declarations/type-aliases/ReactOutgoingResponse.md)\>

Defined in: core/dist/index.d.ts:560

Lifecycle hooks for the application.
These hooks allow you to run custom code at different stages of the application lifecycle.

#### Inherited from

`Partial.lifecycleHooks`

***

### listeners?

> `optional` **listeners**: `MetaEventListener`[]

Defined in: core/dist/index.d.ts:541

Event listeners to be automatically registered when the application starts.
This allows you to specify functions to listen for specific events.

#### Inherited from

`Partial.listeners`

***

### liveConfigurations?

> `optional` **liveConfigurations**: `MixedConfiguration`\<`any`\>[]

Defined in: core/dist/index.d.ts:566

Live configurations are loaded at each request.
By default, configurations are loaded once when the application starts.
This is useful for defining dynamic configurations that do not require a restart to apply changes.

#### Inherited from

`Partial.liveConfigurations`

***

### locale?

> `optional` **locale**: `string`

Defined in: core/dist/index.d.ts:502

The default locale for the application.

#### Inherited from

`Partial.locale`

***

### logger?

> `optional` **logger**: `LoggerConfig`

Defined in: core/dist/index.d.ts:532

Logging settings, including the logger instance and error reporting configurations.

#### Inherited from

`Partial.logger`

***

### name?

> `optional` **name**: `string`

Defined in: core/dist/index.d.ts:484

The name of the application.

#### Inherited from

`Partial.name`

***

### providers?

> `optional` **providers**: `MixedServiceProvider`[]

Defined in: core/dist/index.d.ts:550

Service providers to be automatically loaded for each request to the application.

#### Inherited from

`Partial.providers`

***

### secret?

> `optional` **secret**: `string`

Defined in: core/dist/index.d.ts:511

A secret key used for encryption purposes throughout the application.
This key should be kept secure.

#### Inherited from

`Partial.secret`

***

### services?

> `optional` **services**: `MetaService`[]

Defined in: core/dist/index.d.ts:536

Services to be automatically registered when the application starts.

#### Inherited from

`Partial.services`

***

### subscribers?

> `optional` **subscribers**: `MixedEventSubscriber`[]

Defined in: core/dist/index.d.ts:546

Subscribers to be automatically registered when the application starts.
Subscribers are used for handling and responding to events.

#### Inherited from

`Partial.subscribers`

***

### timezone?

> `optional` **timezone**: `string`

Defined in: core/dist/index.d.ts:498

The default timezone for the application.

#### Inherited from

`Partial.timezone`

***

### useReact

> **useReact**: [`UseReactConfig`](UseReactConfig.md)

Defined in: [use-react/src/options/UseReactBlueprint.ts:50](https://github.com/stonemjs/use-react/blob/d8ec502192c16b8752fc9e1bf85bd5600bcf9813/src/options/UseReactBlueprint.ts#L50)

React integration settings, extending the base application config.
