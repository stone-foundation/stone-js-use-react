[**Use React Documentation v0.0.2**](../../README.md)

***

[Use React Documentation](../../modules.md) / [UseReactPageRenderer](../README.md) / preparePage

# Function: preparePage()

> **preparePage**(`event`, `response`, `container`, `snapshot`): `Promise`\<`void`\>

Defined in: [use-react/src/UseReactPageRenderer.ts:18](https://github.com/stonemjs/use-react/blob/0635de04acc6b3a5c28dcf07d1e12a39a8b5e0b9/src/UseReactPageRenderer.ts#L18)

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
