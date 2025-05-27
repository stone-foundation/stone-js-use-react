[**Use React Documentation v0.0.2**](../../README.md)

***

[Use React Documentation](../../modules.md) / [UseReactPageRenderer](../README.md) / prepareFallbackErrorPage

# Function: prepareFallbackErrorPage()

> **prepareFallbackErrorPage**(`event`, `response`, `container`, `snapshot`): `Promise`\<`void`\>

Defined in: [use-react/src/UseReactPageRenderer.ts:88](https://github.com/stonemjs/use-react/blob/0635de04acc6b3a5c28dcf07d1e12a39a8b5e0b9/src/UseReactPageRenderer.ts#L88)

Prepare the fallback error page to render.

We prepare a fallback error page if no event nor error handler is provided.

## Parameters

### event

`IncomingBrowserEvent`

The incoming event.

### response

[`ReactOutgoingResponse`](../../declarations/type-aliases/ReactOutgoingResponse.md)

The outgoing response.

### container

`Container`

The service container.

### snapshot

[`ResponseSnapshotType`](../../declarations/interfaces/ResponseSnapshotType.md)

The response snapshot.

## Returns

`Promise`\<`void`\>
