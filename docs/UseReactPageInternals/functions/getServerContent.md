[**Use React Documentation v0.0.2**](../../README.md)

***

[Use React Documentation](../../modules.md) / [UseReactPageInternals](../README.md) / getServerContent

# Function: getServerContent()

> **getServerContent**(`component`, `data`, `container`, `event`, `head`?): `Promise`\<`string`\>

Defined in: use-react/src/UseReactPageInternals.ts:517

Get the server content.

## Parameters

### component

`ReactNode`

The React component to hydrate.

### data

`Partial`\<[`ResponseSnapshotType`](../../declarations/interfaces/ResponseSnapshotType.md)\>

The data to pass to the components.

### container

`Container`

The service container.

### event

`IncomingBrowserEvent`

The incoming browser event.

### head?

[`HeadContext`](../../declarations/interfaces/HeadContext.md)

The head context.

## Returns

`Promise`\<`string`\>

A promise that resolves when the content is hydrated.
