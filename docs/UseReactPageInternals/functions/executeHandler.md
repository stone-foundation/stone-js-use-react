[**Use React Documentation v0.0.2**](../../README.md)

***

[Use React Documentation](../../modules.md) / [UseReactPageInternals](../README.md) / executeHandler

# Function: executeHandler()

> **executeHandler**(`event`, `response`, `snapshot`, `handler`?, `error`?): `Promise`\<`any`\>

Defined in: [use-react/src/UseReactPageInternals.ts:335](https://github.com/stonemjs/use-react/blob/0635de04acc6b3a5c28dcf07d1e12a39a8b5e0b9/src/UseReactPageInternals.ts#L335)

Execute the handler.

This method will try to get data from the snapshot
If the snapshot is not present, it will execute the handler.
If the handler is not present, it will return undefined.

## Parameters

### event

`IncomingBrowserEvent`

### response

[`ReactOutgoingResponse`](../../declarations/type-aliases/ReactOutgoingResponse.md)

The response object.

### snapshot

[`ResponseSnapshotType`](../../declarations/interfaces/ResponseSnapshotType.md)

### handler?

[`IPage`](../../declarations/interfaces/IPage.md)\<`IncomingBrowserEvent`\> | [`IErrorPage`](../../declarations/interfaces/IErrorPage.md)\<`IncomingBrowserEvent`\>

### error?

`any`

## Returns

`Promise`\<`any`\>

The data from the response.
