[**Use React Documentation v0.0.2**](../../README.md)

***

[Use React Documentation](../../modules.md) / [UseReactPageInternals](../README.md) / preparePage

# Function: preparePage()

> **preparePage**(`event`, `response`, `container`, `snapshot`): `Promise`\<`void`\>

Defined in: use-react/src/UseReactPageInternals.ts:336

Prepare the page to render.

Here we prepare the page to render by resolving
the handler, handler the event, and rendering the component.

## Parameters

### event

`IncomingBrowserEvent`

The incoming HTTP event.

### response

[`ReactOutgoingResponse`](../../declarations/type-aliases/ReactOutgoingResponse.md)

The outgoing HTTP response.

### container

`Container`

The service container.

### snapshot

[`ResponseSnapshotType`](../../declarations/interfaces/ResponseSnapshotType.md)

The response snapshot.

## Returns

`Promise`\<`void`\>
