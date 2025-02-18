[**Use React Documentation v0.0.2**](../../README.md)

***

[Use React Documentation](../../modules.md) / [ReactRedirectBrowserResponse](../README.md) / ReactRedirectBrowserResponse

# Class: ReactRedirectBrowserResponse

Defined in: use-react/src/ReactRedirectBrowserResponse.ts:18

Class representing a ReactRedirectBrowserResponse.

## Author

Mr. Stone <evensstone@gmail.com>

## Extends

- `RedirectBrowserResponse`

## Constructors

### new ReactRedirectBrowserResponse()

> **new ReactRedirectBrowserResponse**(`options`): [`ReactRedirectBrowserResponse`](ReactRedirectBrowserResponse.md)

Defined in: use-react/src/ReactRedirectBrowserResponse.ts:36

Constructor for ReactRedirectBrowserResponse.

#### Parameters

##### options

[`ReactRedirectBrowserResponseOptions`](../interfaces/ReactRedirectBrowserResponseOptions.md)

Options for the React browser response.

#### Returns

[`ReactRedirectBrowserResponse`](ReactRedirectBrowserResponse.md)

#### Overrides

`RedirectBrowserResponse.constructor`

## Properties

### \_content

> `protected` **\_content**: `unknown`

Defined in: core/dist/index.d.ts:279

The content of the response.

#### Inherited from

`RedirectBrowserResponse._content`

***

### \_statusCode?

> `protected` `optional` **\_statusCode**: `number`

Defined in: core/dist/index.d.ts:283

The status code of the response.

#### Inherited from

`RedirectBrowserResponse._statusCode`

***

### \_statusMessage?

> `protected` `optional` **\_statusMessage**: `string`

Defined in: core/dist/index.d.ts:287

The status message of the response.

#### Inherited from

`RedirectBrowserResponse._statusMessage`

***

### metadata

> `readonly` **metadata**: `Record`\<`string`, `unknown`\>

Defined in: core/dist/index.d.ts:47

The metadata associated with the event.

#### Inherited from

`RedirectBrowserResponse.metadata`

***

### originalContent

> `readonly` **originalContent**: `unknown`

Defined in: core/dist/index.d.ts:275

The original content of the response.

#### Inherited from

`RedirectBrowserResponse.originalContent`

***

### source?

> `readonly` `optional` **source**: `object`

Defined in: core/dist/index.d.ts:51

The source of the event.

#### Inherited from

`RedirectBrowserResponse.source`

***

### targetUrl?

> `readonly` `optional` **targetUrl**: `string` \| `URL`

Defined in: browser-core/dist/index.d.ts:542

#### Inherited from

`RedirectBrowserResponse.targetUrl`

***

### timeStamp

> `readonly` **timeStamp**: `number`

Defined in: core/dist/index.d.ts:55

The timestamp of the event creation.

#### Inherited from

`RedirectBrowserResponse.timeStamp`

***

### type

> `readonly` **type**: `string`

Defined in: core/dist/index.d.ts:43

The type of the event.

#### Inherited from

`RedirectBrowserResponse.type`

***

### OUTGOING\_BROWSER\_RESPONSE

> `static` **OUTGOING\_BROWSER\_RESPONSE**: `string`

Defined in: browser-core/dist/index.d.ts:541

#### Inherited from

`RedirectBrowserResponse.OUTGOING_BROWSER_RESPONSE`

***

### REACT\_BROWSER\_RESPONSE

> `static` **REACT\_BROWSER\_RESPONSE**: `string` = `'stonejs@react_redirect_browser_response'`

Defined in: use-react/src/ReactRedirectBrowserResponse.ts:19

## Accessors

### content

#### Get Signature

> **get** **content**(): [`BrowserResponseContent`](../../declarations/interfaces/BrowserResponseContent.md)

Defined in: use-react/src/ReactRedirectBrowserResponse.ts:43

The content to be rendered by the React component.

##### Returns

[`BrowserResponseContent`](../../declarations/interfaces/BrowserResponseContent.md)

#### Overrides

`RedirectBrowserResponse.content`

***

### statusCode

#### Get Signature

> **get** **statusCode**(): `undefined` \| `number`

Defined in: core/dist/index.d.ts:306

Gets the status code of the outgoing response.

##### Returns

`undefined` \| `number`

The status code of the response, or undefined if not set.

#### Inherited from

`RedirectBrowserResponse.statusCode`

***

### statusMessage

#### Get Signature

> **get** **statusMessage**(): `undefined` \| `string`

Defined in: core/dist/index.d.ts:312

Gets the status message of the outgoing response.

##### Returns

`undefined` \| `string`

The status message of the response, or undefined if not set.

#### Inherited from

`RedirectBrowserResponse.statusMessage`

## Methods

### clone()

> **clone**\<`T`\>(): `T`

Defined in: core/dist/index.d.ts:105

Return a cloned instance.

#### Type Parameters

• **T** *extends* [`ReactRedirectBrowserResponse`](ReactRedirectBrowserResponse.md)

#### Returns

`T`

A cloned instance of the current class.

#### Inherited from

`RedirectBrowserResponse.clone`

***

### get()

#### Call Signature

> **get**\<`TReturn`\>(`key`): `undefined` \| `TReturn`

Defined in: core/dist/index.d.ts:68

Get data from metadata.

##### Type Parameters

• **TReturn** = `unknown`

##### Parameters

###### key

`string`

The key to retrieve from metadata.

##### Returns

`undefined` \| `TReturn`

The value associated with the key or the fallback.

##### Inherited from

`RedirectBrowserResponse.get`

#### Call Signature

> **get**\<`TReturn`\>(`key`, `fallback`): `TReturn`

Defined in: core/dist/index.d.ts:76

Get data from metadata.

##### Type Parameters

• **TReturn** = `unknown`

##### Parameters

###### key

`string`

The key to retrieve from metadata.

###### fallback

`TReturn`

The fallback value if the key is not found.

##### Returns

`TReturn`

The value associated with the key or the fallback.

##### Inherited from

`RedirectBrowserResponse.get`

***

### getMetadataValue()

#### Call Signature

> **getMetadataValue**\<`TReturn`\>(`key`): `undefined` \| `TReturn`

Defined in: core/dist/index.d.ts:83

Get data from metadata.

##### Type Parameters

• **TReturn** = `unknown`

##### Parameters

###### key

`string`

The key to retrieve from metadata.

##### Returns

`undefined` \| `TReturn`

The value associated with the key or the fallback.

##### Inherited from

`RedirectBrowserResponse.getMetadataValue`

#### Call Signature

> **getMetadataValue**\<`TReturn`\>(`key`, `fallback`): `TReturn`

Defined in: core/dist/index.d.ts:91

Get data from metadata.

##### Type Parameters

• **TReturn** = `unknown`

##### Parameters

###### key

`string`

The key to retrieve from metadata.

###### fallback

`TReturn`

The fallback value if the key is not found.

##### Returns

`TReturn`

The value associated with the key or the fallback.

##### Inherited from

`RedirectBrowserResponse.getMetadataValue`

***

### is1xx()

> **is1xx**(): `boolean`

Defined in: browser-core/dist/index.d.ts:466

Check if the status code represents an informational response (1xx).

#### Returns

`boolean`

True if the status code is informational, otherwise false.

#### Inherited from

`RedirectBrowserResponse.is1xx`

***

### is2xx()

> **is2xx**(): `boolean`

Defined in: browser-core/dist/index.d.ts:472

Check if the status code represents a successful response (2xx).

#### Returns

`boolean`

True if the status code is successful, otherwise false.

#### Inherited from

`RedirectBrowserResponse.is2xx`

***

### is3xx()

> **is3xx**(): `boolean`

Defined in: browser-core/dist/index.d.ts:478

Check if the status code represents a redirection response (3xx).

#### Returns

`boolean`

True if the status code is a redirection, otherwise false.

#### Inherited from

`RedirectBrowserResponse.is3xx`

***

### is4xx()

> **is4xx**(): `boolean`

Defined in: browser-core/dist/index.d.ts:484

Check if the status code represents a client error response (4xx).

#### Returns

`boolean`

True if the status code is a client error, otherwise false.

#### Inherited from

`RedirectBrowserResponse.is4xx`

***

### is5xx()

> **is5xx**(): `boolean`

Defined in: browser-core/dist/index.d.ts:490

Check if the status code represents a server error response (5xx).

#### Returns

`boolean`

True if the status code is a server error, otherwise false.

#### Inherited from

`RedirectBrowserResponse.is5xx`

***

### isError()

> **isError**(): `boolean`

Defined in: browser-core/dist/index.d.ts:502

Check if the status code is an error (i.e., 4xx or 5xx).

#### Returns

`boolean`

True if the status code is an error, otherwise false.

#### Inherited from

`RedirectBrowserResponse.isError`

***

### isForbidden()

> **isForbidden**(): `boolean`

Defined in: browser-core/dist/index.d.ts:520

Check if the status code is 403 (Forbidden).

#### Returns

`boolean`

True if the status code is 403, otherwise false.

#### Inherited from

`RedirectBrowserResponse.isForbidden`

***

### isInStatusRange()

> **isInStatusRange**(`start`, `end`): `boolean`

Defined in: browser-core/dist/index.d.ts:454

Check if the status code falls within the specified range.

#### Parameters

##### start

`number`

The starting value of the range (inclusive).

##### end

`number`

The ending value of the range (exclusive).

#### Returns

`boolean`

True if the status code is within the specified range, otherwise false.

#### Inherited from

`RedirectBrowserResponse.isInStatusRange`

***

### isInvalid()

> **isInvalid**(): `boolean`

Defined in: browser-core/dist/index.d.ts:460

Check if the status code is invalid.

#### Returns

`boolean`

True if the status code is invalid, otherwise false.

#### Inherited from

`RedirectBrowserResponse.isInvalid`

***

### isNotError()

> **isNotError**(): `boolean`

Defined in: browser-core/dist/index.d.ts:496

Check if the status code is not an error (i.e., not 4xx or 5xx).

#### Returns

`boolean`

True if the status code is not an error, otherwise false.

#### Inherited from

`RedirectBrowserResponse.isNotError`

***

### isNotFound()

> **isNotFound**(): `boolean`

Defined in: browser-core/dist/index.d.ts:526

Check if the status code is 404 (Not Found).

#### Returns

`boolean`

True if the status code is 404, otherwise false.

#### Inherited from

`RedirectBrowserResponse.isNotFound`

***

### isOk()

> **isOk**(): `boolean`

Defined in: browser-core/dist/index.d.ts:508

Check if the status code is 200 (OK).

#### Returns

`boolean`

True if the status code is 200, otherwise false.

#### Inherited from

`RedirectBrowserResponse.isOk`

***

### isUnauthorized()

> **isUnauthorized**(): `boolean`

Defined in: browser-core/dist/index.d.ts:514

Check if the status code is 401 (Unauthorized).

#### Returns

`boolean`

True if the status code is 401, otherwise false.

#### Inherited from

`RedirectBrowserResponse.isUnauthorized`

***

### prepare()

> **prepare**(`_event`, `_container`): [`ReactRedirectBrowserResponse`](ReactRedirectBrowserResponse.md) \| `Promise`\<[`ReactRedirectBrowserResponse`](ReactRedirectBrowserResponse.md)\>

Defined in: core/dist/index.d.ts:326

Prepare response before sending it.

#### Parameters

##### \_event

`IncomingEvent`

The incoming event associated with this response.

##### \_container

`Container`

The container.

#### Returns

[`ReactRedirectBrowserResponse`](ReactRedirectBrowserResponse.md) \| `Promise`\<[`ReactRedirectBrowserResponse`](ReactRedirectBrowserResponse.md)\>

This OutgoingResponse instance.

#### Inherited from

`RedirectBrowserResponse.prepare`

***

### setMetadataValue()

> **setMetadataValue**(`key`, `value`?): `this`

Defined in: core/dist/index.d.ts:99

Add data to metadata.

#### Parameters

##### key

The key or object to add to metadata.

`string` | `Record`\<`string`, `unknown`\>

##### value?

`unknown`

The value to associate with the key.

#### Returns

`this`

This Event instance.

#### Inherited from

`RedirectBrowserResponse.setMetadataValue`

***

### create()

> `static` **create**\<`T`\>(`options`): `T`

Defined in: use-react/src/ReactRedirectBrowserResponse.ts:27

Create an instance of OutgoingHttpResponse.

#### Type Parameters

• **T** *extends* `OutgoingBrowserResponse` = [`ReactRedirectBrowserResponse`](ReactRedirectBrowserResponse.md)

#### Parameters

##### options

[`ReactRedirectBrowserResponseOptions`](../interfaces/ReactRedirectBrowserResponseOptions.md)

Options for the outgoing browser response.

#### Returns

`T`

A new instance of OutgoingHttpResponse.

#### Overrides

`RedirectBrowserResponse.create`

## Events

### OUTGOING\_RESPONSE

> `static` **OUTGOING\_RESPONSE**: `string`

Defined in: core/dist/index.d.ts:271

OUTGOING_RESPONSE Event name, fires on response to the incoming event.

 OutgoingResponse#OUTGOING_RESPONSE

#### Inherited from

`RedirectBrowserResponse.OUTGOING_RESPONSE`
