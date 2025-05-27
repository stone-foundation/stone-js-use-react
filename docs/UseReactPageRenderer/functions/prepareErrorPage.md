[**Use React Documentation v0.0.2**](../../README.md)

***

[Use React Documentation](../../modules.md) / [UseReactPageRenderer](../README.md) / prepareErrorPage

# Function: prepareErrorPage()

> **prepareErrorPage**(`event`, `response`, `container`, `snapshot`): `Promise`\<`void`\>

Defined in: [use-react/src/UseReactPageRenderer.ts:54](https://github.com/stonemjs/use-react/blob/0635de04acc6b3a5c28dcf07d1e12a39a8b5e0b9/src/UseReactPageRenderer.ts#L54)

Prepare the error page to render.

Error pages are prepared sepatately because their handler
is different from the normal page handler.
Their handler takes an error as the first argument and the event as the second.

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
