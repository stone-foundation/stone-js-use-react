[**Use React Documentation v0.0.2**](../../README.md)

***

[Use React Documentation](../../modules.md) / [ReactBrowserResponse](../README.md) / ReactBrowserResponse

# Class: ReactBrowserResponse

Defined in: [use-react/src/ReactBrowserResponse.ts:19](https://github.com/stonemjs/use-react/blob/48b0fa89405b138aef5b9a5bc1a85e12108c1404/src/ReactBrowserResponse.ts#L19)

Class representing a ReactBrowserResponse.

## Author

Mr. Stone <evensstone@gmail.com>

## Extends

- `OutgoingBrowserResponse`

## Constructors

### new ReactBrowserResponse()

> **new ReactBrowserResponse**(`options`): [`ReactBrowserResponse`](ReactBrowserResponse.md)

Defined in: [use-react/src/ReactBrowserResponse.ts:39](https://github.com/stonemjs/use-react/blob/48b0fa89405b138aef5b9a5bc1a85e12108c1404/src/ReactBrowserResponse.ts#L39)

Constructor for ReactBrowserResponse.

#### Parameters

##### options

[`ReactBrowserResponseOptions`](../interfaces/ReactBrowserResponseOptions.md)

Options for the React browser response.

#### Returns

[`ReactBrowserResponse`](ReactBrowserResponse.md)

#### Overrides

`OutgoingBrowserResponse.constructor`

## Properties

### \_content

> `protected` **\_content**: `unknown`

Defined in: core/dist/index.d.ts:279

The content of the response.

#### Inherited from

`OutgoingBrowserResponse._content`

***

### \_statusCode?

> `protected` `optional` **\_statusCode**: `number`

Defined in: core/dist/index.d.ts:283

The status code of the response.

#### Inherited from

`OutgoingBrowserResponse._statusCode`

***

### \_statusMessage?

> `protected` `optional` **\_statusMessage**: `string`

Defined in: core/dist/index.d.ts:287

The status message of the response.

#### Inherited from

`OutgoingBrowserResponse._statusMessage`

***

### metadata

> `readonly` **metadata**: `Record`\<`string`, `unknown`\>

Defined in: core/dist/index.d.ts:47

The metadata associated with the event.

#### Inherited from

`OutgoingBrowserResponse.metadata`

***

### originalContent

> `readonly` **originalContent**: `unknown`

Defined in: core/dist/index.d.ts:275

The original content of the response.

#### Inherited from

`OutgoingBrowserResponse.originalContent`

***

### source?

> `readonly` `optional` **source**: `object`

Defined in: core/dist/index.d.ts:51

The source of the event.

#### Inherited from

`OutgoingBrowserResponse.source`

***

### timeStamp

> `readonly` **timeStamp**: `number`

Defined in: core/dist/index.d.ts:55

The timestamp of the event creation.

#### Inherited from

`OutgoingBrowserResponse.timeStamp`

***

### type

> `readonly` **type**: `string`

Defined in: core/dist/index.d.ts:43

The type of the event.

#### Inherited from

`OutgoingBrowserResponse.type`

***

### OUTGOING\_BROWSER\_RESPONSE

> `static` **OUTGOING\_BROWSER\_RESPONSE**: `string`

Defined in: browser-core/dist/index.d.ts:404

#### Inherited from

`OutgoingBrowserResponse.OUTGOING_BROWSER_RESPONSE`

***

### REACT\_BROWSER\_RESPONSE

> `static` **REACT\_BROWSER\_RESPONSE**: `string` = `'stonejs@react_browser_response'`

Defined in: [use-react/src/ReactBrowserResponse.ts:20](https://github.com/stonemjs/use-react/blob/48b0fa89405b138aef5b9a5bc1a85e12108c1404/src/ReactBrowserResponse.ts#L20)

## Accessors

### content

#### Get Signature

> **get** **content**(): [`BrowserResponseContent`](../../declarations/interfaces/BrowserResponseContent.md)

Defined in: [use-react/src/ReactBrowserResponse.ts:48](https://github.com/stonemjs/use-react/blob/48b0fa89405b138aef5b9a5bc1a85e12108c1404/src/ReactBrowserResponse.ts#L48)

The content to be rendered by the React component.

##### Returns

[`BrowserResponseContent`](../../declarations/interfaces/BrowserResponseContent.md)

#### Overrides

`OutgoingBrowserResponse.content`

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

`OutgoingBrowserResponse.statusCode`

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

`OutgoingBrowserResponse.statusMessage`

## Methods

### clone()

> **clone**\<`T`\>(): `T`

Defined in: core/dist/index.d.ts:105

Return a cloned instance.

#### Type Parameters

• **T** *extends* [`ReactBrowserResponse`](ReactBrowserResponse.md)

#### Returns

`T`

A cloned instance of the current class.

#### Inherited from

`OutgoingBrowserResponse.clone`

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

`OutgoingBrowserResponse.get`

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

`OutgoingBrowserResponse.get`

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

`OutgoingBrowserResponse.getMetadataValue`

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

`OutgoingBrowserResponse.getMetadataValue`

***

### is1xx()

> **is1xx**(): `boolean`

Defined in: browser-core/dist/index.d.ts:438

Check if the status code represents an informational response (1xx).

#### Returns

`boolean`

True if the status code is informational, otherwise false.

#### Inherited from

`OutgoingBrowserResponse.is1xx`

***

### is2xx()

> **is2xx**(): `boolean`

Defined in: browser-core/dist/index.d.ts:444

Check if the status code represents a successful response (2xx).

#### Returns

`boolean`

True if the status code is successful, otherwise false.

#### Inherited from

`OutgoingBrowserResponse.is2xx`

***

### is3xx()

> **is3xx**(): `boolean`

Defined in: browser-core/dist/index.d.ts:450

Check if the status code represents a redirection response (3xx).

#### Returns

`boolean`

True if the status code is a redirection, otherwise false.

#### Inherited from

`OutgoingBrowserResponse.is3xx`

***

### is4xx()

> **is4xx**(): `boolean`

Defined in: browser-core/dist/index.d.ts:456

Check if the status code represents a client error response (4xx).

#### Returns

`boolean`

True if the status code is a client error, otherwise false.

#### Inherited from

`OutgoingBrowserResponse.is4xx`

***

### is5xx()

> **is5xx**(): `boolean`

Defined in: browser-core/dist/index.d.ts:462

Check if the status code represents a server error response (5xx).

#### Returns

`boolean`

True if the status code is a server error, otherwise false.

#### Inherited from

`OutgoingBrowserResponse.is5xx`

***

### isError()

> **isError**(): `boolean`

Defined in: browser-core/dist/index.d.ts:474

Check if the status code is an error (i.e., 4xx or 5xx).

#### Returns

`boolean`

True if the status code is an error, otherwise false.

#### Inherited from

`OutgoingBrowserResponse.isError`

***

### isForbidden()

> **isForbidden**(): `boolean`

Defined in: browser-core/dist/index.d.ts:492

Check if the status code is 403 (Forbidden).

#### Returns

`boolean`

True if the status code is 403, otherwise false.

#### Inherited from

`OutgoingBrowserResponse.isForbidden`

***

### isInStatusRange()

> **isInStatusRange**(`start`, `end`): `boolean`

Defined in: browser-core/dist/index.d.ts:426

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

`OutgoingBrowserResponse.isInStatusRange`

***

### isInvalid()

> **isInvalid**(): `boolean`

Defined in: browser-core/dist/index.d.ts:432

Check if the status code is invalid.

#### Returns

`boolean`

True if the status code is invalid, otherwise false.

#### Inherited from

`OutgoingBrowserResponse.isInvalid`

***

### isNotError()

> **isNotError**(): `boolean`

Defined in: browser-core/dist/index.d.ts:468

Check if the status code is not an error (i.e., not 4xx or 5xx).

#### Returns

`boolean`

True if the status code is not an error, otherwise false.

#### Inherited from

`OutgoingBrowserResponse.isNotError`

***

### isNotFound()

> **isNotFound**(): `boolean`

Defined in: browser-core/dist/index.d.ts:498

Check if the status code is 404 (Not Found).

#### Returns

`boolean`

True if the status code is 404, otherwise false.

#### Inherited from

`OutgoingBrowserResponse.isNotFound`

***

### isOk()

> **isOk**(): `boolean`

Defined in: browser-core/dist/index.d.ts:480

Check if the status code is 200 (OK).

#### Returns

`boolean`

True if the status code is 200, otherwise false.

#### Inherited from

`OutgoingBrowserResponse.isOk`

***

### isUnauthorized()

> **isUnauthorized**(): `boolean`

Defined in: browser-core/dist/index.d.ts:486

Check if the status code is 401 (Unauthorized).

#### Returns

`boolean`

True if the status code is 401, otherwise false.

#### Inherited from

`OutgoingBrowserResponse.isUnauthorized`

***

### prepare()

> **prepare**(`event`, `container`): `Promise`\<[`ReactBrowserResponse`](ReactBrowserResponse.md)\>

Defined in: [use-react/src/ReactBrowserResponse.ts:59](https://github.com/stonemjs/use-react/blob/48b0fa89405b138aef5b9a5bc1a85e12108c1404/src/ReactBrowserResponse.ts#L59)

Prepare the response before sending.

#### Parameters

##### event

`IncomingBrowserEvent`

The incoming Browser event.

##### container

`Container`

The service container.

#### Returns

`Promise`\<[`ReactBrowserResponse`](ReactBrowserResponse.md)\>

The current instance of the response for chaining.

#### Overrides

`OutgoingBrowserResponse.prepare`

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

`OutgoingBrowserResponse.setMetadataValue`

***

### create()

> `static` **create**\<`T`\>(`options`): `T`

Defined in: [use-react/src/ReactBrowserResponse.ts:30](https://github.com/stonemjs/use-react/blob/48b0fa89405b138aef5b9a5bc1a85e12108c1404/src/ReactBrowserResponse.ts#L30)

Create an instance of OutgoingHttpResponse.

#### Type Parameters

• **T** *extends* `OutgoingBrowserResponse` = [`ReactBrowserResponse`](ReactBrowserResponse.md)

#### Parameters

##### options

[`ReactBrowserResponseOptions`](../interfaces/ReactBrowserResponseOptions.md)

Options for the outgoing browser response.

#### Returns

`T`

A new instance of OutgoingHttpResponse.

#### Overrides

`OutgoingBrowserResponse.create`

## Events

### OUTGOING\_RESPONSE

> `static` **OUTGOING\_RESPONSE**: `string`

Defined in: core/dist/index.d.ts:271

OUTGOING_RESPONSE Event name, fires on response to the incoming event.

 OutgoingResponse#OUTGOING_RESPONSE

#### Inherited from

`OutgoingBrowserResponse.OUTGOING_RESPONSE`
