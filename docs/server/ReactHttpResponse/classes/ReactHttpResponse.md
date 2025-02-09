[**Use React Documentation v0.0.2**](../../../README.md)

***

[Use React Documentation](../../../modules.md) / [server/ReactHttpResponse](../README.md) / ReactHttpResponse

# Class: ReactHttpResponse

Defined in: use-react/src/server/ReactHttpResponse.ts:20

Class representing a ReactHttpResponse.

## Author

Mr. Stone <evensstone@gmail.com>

## Extends

- `OutgoingHttpResponse`

## Constructors

### new ReactHttpResponse()

> **new ReactHttpResponse**(`options`): [`ReactHttpResponse`](ReactHttpResponse.md)

Defined in: use-react/src/server/ReactHttpResponse.ts:38

Constructor for ReactHttpResponse.

#### Parameters

##### options

[`ReactHttpResponseOptions`](../interfaces/ReactHttpResponseOptions.md)

Options for the React HTTP response.

#### Returns

[`ReactHttpResponse`](ReactHttpResponse.md)

#### Overrides

`OutgoingHttpResponse.constructor`

## Properties

### \_blueprintResolver()?

> `protected` `optional` **\_blueprintResolver**: () => `undefined` \| `IBlueprint`

Defined in: http-core/dist/index.d.ts:889

#### Returns

`undefined` \| `IBlueprint`

#### Inherited from

`OutgoingHttpResponse._blueprintResolver`

***

### \_charset?

> `protected` `optional` **\_charset**: `Encoding`

Defined in: http-core/dist/index.d.ts:886

#### Inherited from

`OutgoingHttpResponse._charset`

***

### \_content

> `protected` **\_content**: `unknown`

Defined in: core/dist/index.d.ts:279

The content of the response.

#### Inherited from

`OutgoingHttpResponse._content`

***

### \_cookieCollection

> `protected` `readonly` **\_cookieCollection**: `CookieCollection`

Defined in: http-core/dist/index.d.ts:891

#### Inherited from

`OutgoingHttpResponse._cookieCollection`

***

### \_formats?

> `protected` `optional` **\_formats**: `Record`\<`string`, () => `unknown`\>

Defined in: http-core/dist/index.d.ts:887

#### Inherited from

`OutgoingHttpResponse._formats`

***

### \_headers

> `protected` `readonly` **\_headers**: `Headers`

Defined in: http-core/dist/index.d.ts:890

#### Inherited from

`OutgoingHttpResponse._headers`

***

### \_incomingEventResolver()?

> `protected` `optional` **\_incomingEventResolver**: () => `IncomingHttpEvent`

Defined in: http-core/dist/index.d.ts:888

#### Returns

`IncomingHttpEvent`

#### Inherited from

`OutgoingHttpResponse._incomingEventResolver`

***

### \_statusCode?

> `protected` `optional` **\_statusCode**: `number`

Defined in: core/dist/index.d.ts:283

The status code of the response.

#### Inherited from

`OutgoingHttpResponse._statusCode`

***

### \_statusMessage?

> `protected` `optional` **\_statusMessage**: `string`

Defined in: core/dist/index.d.ts:287

The status message of the response.

#### Inherited from

`OutgoingHttpResponse._statusMessage`

***

### metadata

> `readonly` **metadata**: `Record`\<`string`, `unknown`\>

Defined in: core/dist/index.d.ts:47

The metadata associated with the event.

#### Inherited from

`OutgoingHttpResponse.metadata`

***

### originalContent

> `readonly` **originalContent**: `unknown`

Defined in: core/dist/index.d.ts:275

The original content of the response.

#### Inherited from

`OutgoingHttpResponse.originalContent`

***

### source?

> `readonly` `optional` **source**: `object`

Defined in: core/dist/index.d.ts:51

The source of the event.

#### Inherited from

`OutgoingHttpResponse.source`

***

### timeStamp

> `readonly` **timeStamp**: `number`

Defined in: core/dist/index.d.ts:55

The timestamp of the event creation.

#### Inherited from

`OutgoingHttpResponse.timeStamp`

***

### type

> `readonly` **type**: `string`

Defined in: core/dist/index.d.ts:43

The type of the event.

#### Inherited from

`OutgoingHttpResponse.type`

***

### OUTGOING\_HTTP\_RESPONSE

> `static` **OUTGOING\_HTTP\_RESPONSE**: `string`

Defined in: http-core/dist/index.d.ts:885

#### Inherited from

`OutgoingHttpResponse.OUTGOING_HTTP_RESPONSE`

***

### REACT\_HTTP\_RESPONSE

> `static` **REACT\_HTTP\_RESPONSE**: `string` = `'stonejs@react_http_response'`

Defined in: use-react/src/server/ReactHttpResponse.ts:21

## Accessors

### blueprint

#### Get Signature

> **get** **blueprint**(): `undefined` \| `IBlueprint`

Defined in: http-core/dist/index.d.ts:955

Get the blueprint associated with the response.

##### Returns

`undefined` \| `IBlueprint`

The blueprint or undefined if not set.

#### Inherited from

`OutgoingHttpResponse.blueprint`

***

### charset

#### Get Signature

> **get** **charset**(): `Encoding`

Defined in: http-core/dist/index.d.ts:924

Get the character set encoding.
Defaults to 'utf-8' if not explicitly set.

##### Returns

`Encoding`

The character set encoding.

#### Inherited from

`OutgoingHttpResponse.charset`

***

### charsetRegExp

#### Get Signature

> **get** `protected` **charsetRegExp**(): `RegExp`

Defined in: http-core/dist/index.d.ts:962

Get the regular expression for matching charset in content type.

##### Returns

`RegExp`

The regular expression for matching charset in content type.

#### Inherited from

`OutgoingHttpResponse.charsetRegExp`

***

### content

#### Get Signature

> **get** **content**(): `unknown`

Defined in: core/dist/index.d.ts:318

Gets the content of the outgoing response.

##### Returns

`unknown`

The content of the outgoing response.

#### Inherited from

`OutgoingHttpResponse.content`

***

### etag

#### Get Signature

> **get** **etag**(): `undefined` \| `string`

Defined in: http-core/dist/index.d.ts:930

Get the ETag of the response.

##### Returns

`undefined` \| `string`

The value of the ETag header, if present.

#### Inherited from

`OutgoingHttpResponse.etag`

***

### headers

#### Get Signature

> **get** **headers**(): `Headers`

Defined in: http-core/dist/index.d.ts:917

Get the headers of the response.

##### Returns

`Headers`

The headers of the response as a Headers object.

#### Inherited from

`OutgoingHttpResponse.headers`

***

### incomingEvent

#### Get Signature

> **get** **incomingEvent**(): `IncomingHttpEvent`

Defined in: http-core/dist/index.d.ts:949

Get the associated IncomingHttpEvent.

##### Throws

InternalServerError if the IncomingHttpEvent resolver is not set.

##### Returns

`IncomingHttpEvent`

The associated IncomingHttpEvent.

#### Inherited from

`OutgoingHttpResponse.incomingEvent`

***

### lastModified

#### Get Signature

> **get** **lastModified**(): `undefined` \| `string`

Defined in: http-core/dist/index.d.ts:942

Get the Last-Modified date of the response.

##### Returns

`undefined` \| `string`

The value of the Last-Modified header, if present.

#### Inherited from

`OutgoingHttpResponse.lastModified`

***

### status

#### Get Signature

> **get** **status**(): `undefined` \| `number`

Defined in: http-core/dist/index.d.ts:911

Get the HTTP status code.

##### Returns

`undefined` \| `number`

The HTTP status code.

#### Inherited from

`OutgoingHttpResponse.status`

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

`OutgoingHttpResponse.statusCode`

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

`OutgoingHttpResponse.statusMessage`

***

### vary

#### Get Signature

> **get** **vary**(): `undefined` \| `string`[]

Defined in: http-core/dist/index.d.ts:936

Get the Vary header as an array of values.

##### Returns

`undefined` \| `string`[]

The Vary header values split by comma, or undefined if not present.

#### Inherited from

`OutgoingHttpResponse.vary`

## Methods

### addVary()

> **addVary**(`field`): `this`

Defined in: http-core/dist/index.d.ts:1114

Add a field to the Vary header.

#### Parameters

##### field

The field to add to the Vary header.

`string` | `string`[]

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

#### Inherited from

`OutgoingHttpResponse.addVary`

***

### appendHeader()

> **appendHeader**(`key`, `value`): `this`

Defined in: http-core/dist/index.d.ts:986

Append a value to an existing header or create a new header.

#### Parameters

##### key

`string`

The header name.

##### value

`string`

The value to append.

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

#### Inherited from

`OutgoingHttpResponse.appendHeader`

***

### calculateContentLength()

> `protected` **calculateContentLength**(`generateETag`): `number`

Defined in: http-core/dist/index.d.ts:1299

Calculate the content length.

#### Parameters

##### generateETag

`boolean`

Whether to generate an ETag for the content.

#### Returns

`number`

The content length.

#### Inherited from

`OutgoingHttpResponse.calculateContentLength`

***

### clearCookie()

> **clearCookie**(`name`, `force`?): `this`

Defined in: http-core/dist/index.d.ts:1057

Clear a specific cookie from the response.

#### Parameters

##### name

`string`

The name of the cookie to be cleared.

##### force?

`boolean`

Whether to force the removal of the cookie, even if it doesn't exist.

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

#### Inherited from

`OutgoingHttpResponse.clearCookie`

***

### clearCookies()

> **clearCookies**(`force`?): `this`

Defined in: http-core/dist/index.d.ts:1064

Clear all cookies from the response.

#### Parameters

##### force?

`boolean`

Whether to force the removal of all cookies.

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

#### Inherited from

`OutgoingHttpResponse.clearCookies`

***

### clone()

> **clone**\<`T`\>(): `T`

Defined in: core/dist/index.d.ts:105

Return a cloned instance.

#### Type Parameters

• **T** *extends* [`ReactHttpResponse`](ReactHttpResponse.md)

#### Returns

`T`

A cloned instance of the current class.

#### Inherited from

`OutgoingHttpResponse.clone`

***

### defaultEtagFn()

> `protected` **defaultEtagFn**(`content`, `encoding`): `string`

Defined in: http-core/dist/index.d.ts:1336

Generate a default ETag for the given content.

#### Parameters

##### content

`string`

The content to generate an ETag for.

##### encoding

`Encoding`

The encoding to use.

#### Returns

`string`

The generated ETag as a base64 string.

#### Inherited from

`OutgoingHttpResponse.defaultEtagFn`

***

### ensureCharset()

> `protected` **ensureCharset**(`value`): `this`

Defined in: http-core/dist/index.d.ts:1306

Ensure that the "Content-Type" header has a charset specified.

#### Parameters

##### value

`string`

The "Content-Type" header value.

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

#### Inherited from

`OutgoingHttpResponse.ensureCharset`

***

### format()

> **format**(`formats`): `this`

Defined in: http-core/dist/index.d.ts:1107

Handles content negotiation based on the `Accept` header of the incoming request.

#### Parameters

##### formats

`Record`\<`string`, () => `unknown`\>

An object where keys are MIME types and values are functions that return the content for that MIME type.

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

#### Inherited from

`OutgoingHttpResponse.format`

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

`OutgoingHttpResponse.get`

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

`OutgoingHttpResponse.get`

***

### getHashedContent()

> `protected` **getHashedContent**(`content`, `encoding`): `string`

Defined in: http-core/dist/index.d.ts:1344

Get the hashed content using the specified encoding.

#### Parameters

##### content

`string`

The content to hash.

##### encoding

`Encoding`

The encoding to use for hashing.

#### Returns

`string`

The hashed content as a hexadecimal string.

#### Inherited from

`OutgoingHttpResponse.getHashedContent`

***

### getHeader()

#### Call Signature

> **getHeader**\<`TReturn`\>(`name`): `undefined` \| `TReturn`

Defined in: http-core/dist/index.d.ts:993

Get a header value.

##### Type Parameters

• **TReturn** = `string`

##### Parameters

###### name

`string`

The header name.

##### Returns

`undefined` \| `TReturn`

The header value or the fallback value.

##### Inherited from

`OutgoingHttpResponse.getHeader`

#### Call Signature

> **getHeader**\<`TReturn`\>(`name`, `fallback`): `TReturn`

Defined in: http-core/dist/index.d.ts:1001

Get a header value.

##### Type Parameters

• **TReturn** = `string`

##### Parameters

###### name

`string`

The header name.

###### fallback

`TReturn`

A fallback value if the header is not found.

##### Returns

`TReturn`

The header value or the fallback value.

##### Inherited from

`OutgoingHttpResponse.getHeader`

***

### getHeaderNames()

> **getHeaderNames**(): `string`[]

Defined in: http-core/dist/index.d.ts:1007

Get all header names.

#### Returns

`string`[]

An array of all header names.

#### Inherited from

`OutgoingHttpResponse.getHeaderNames`

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

`OutgoingHttpResponse.getMetadataValue`

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

`OutgoingHttpResponse.getMetadataValue`

***

### handleCacheHeaders()

> `protected` **handleCacheHeaders**(): `this`

Defined in: http-core/dist/index.d.ts:1280

Handle cache headers like ETag and Last-Modified.

#### Returns

`this`

The current instance of the response for chaining.

#### Inherited from

`OutgoingHttpResponse.handleCacheHeaders`

***

### handleContentNegotiation()

> `protected` **handleContentNegotiation**(): `this`

Defined in: http-core/dist/index.d.ts:1268

Handles content negotiation based on the `Accept` header of the incoming request.

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

#### Inherited from

`OutgoingHttpResponse.handleContentNegotiation`

***

### hasHeader()

> **hasHeader**(`key`): `boolean`

Defined in: http-core/dist/index.d.ts:1014

Check if a specific header exists.

#### Parameters

##### key

`string`

The header name to check.

#### Returns

`boolean`

True if the header exists, false otherwise.

#### Inherited from

`OutgoingHttpResponse.hasHeader`

***

### is1xx()

> **is1xx**(): `boolean`

Defined in: http-core/dist/index.d.ts:1163

Check if the status code represents an informational response (1xx).

#### Returns

`boolean`

True if the status code is informational, otherwise false.

#### Inherited from

`OutgoingHttpResponse.is1xx`

***

### is2xx()

> **is2xx**(): `boolean`

Defined in: http-core/dist/index.d.ts:1169

Check if the status code represents a successful response (2xx).

#### Returns

`boolean`

True if the status code is successful, otherwise false.

#### Inherited from

`OutgoingHttpResponse.is2xx`

***

### is3xx()

> **is3xx**(): `boolean`

Defined in: http-core/dist/index.d.ts:1175

Check if the status code represents a redirection response (3xx).

#### Returns

`boolean`

True if the status code is a redirection, otherwise false.

#### Inherited from

`OutgoingHttpResponse.is3xx`

***

### is4xx()

> **is4xx**(): `boolean`

Defined in: http-core/dist/index.d.ts:1181

Check if the status code represents a client error response (4xx).

#### Returns

`boolean`

True if the status code is a client error, otherwise false.

#### Inherited from

`OutgoingHttpResponse.is4xx`

***

### is5xx()

> **is5xx**(): `boolean`

Defined in: http-core/dist/index.d.ts:1187

Check if the status code represents a server error response (5xx).

#### Returns

`boolean`

True if the status code is a server error, otherwise false.

#### Inherited from

`OutgoingHttpResponse.is5xx`

***

### isEmpty()

> **isEmpty**(): `boolean`

Defined in: http-core/dist/index.d.ts:1217

Check if the response is empty.

#### Returns

`boolean`

True if the status code indicates an empty response, otherwise false.

#### Inherited from

`OutgoingHttpResponse.isEmpty`

***

### isError()

> **isError**(): `boolean`

Defined in: http-core/dist/index.d.ts:1199

Check if the status code is an error (i.e., 4xx or 5xx).

#### Returns

`boolean`

True if the status code is an error, otherwise false.

#### Inherited from

`OutgoingHttpResponse.isError`

***

### isForbidden()

> **isForbidden**(): `boolean`

Defined in: http-core/dist/index.d.ts:1242

Check if the status code is 403 (Forbidden).

#### Returns

`boolean`

True if the status code is 403, otherwise false.

#### Inherited from

`OutgoingHttpResponse.isForbidden`

***

### isInStatusRange()

> **isInStatusRange**(`start`, `end`): `boolean`

Defined in: http-core/dist/index.d.ts:1151

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

`OutgoingHttpResponse.isInStatusRange`

***

### isInvalid()

> **isInvalid**(): `boolean`

Defined in: http-core/dist/index.d.ts:1157

Check if the status code is invalid.

#### Returns

`boolean`

True if the status code is invalid, otherwise false.

#### Inherited from

`OutgoingHttpResponse.isInvalid`

***

### isMovedPermanently()

> **isMovedPermanently**(): `boolean`

Defined in: http-core/dist/index.d.ts:1230

Check if the status code is 301 (Moved Permanently).

#### Returns

`boolean`

True if the status code is 301, otherwise false.

#### Inherited from

`OutgoingHttpResponse.isMovedPermanently`

***

### isNotError()

> **isNotError**(): `boolean`

Defined in: http-core/dist/index.d.ts:1193

Check if the status code is not an error (i.e., not 4xx or 5xx).

#### Returns

`boolean`

True if the status code is not an error, otherwise false.

#### Inherited from

`OutgoingHttpResponse.isNotError`

***

### isNotFound()

> **isNotFound**(): `boolean`

Defined in: http-core/dist/index.d.ts:1248

Check if the status code is 404 (Not Found).

#### Returns

`boolean`

True if the status code is 404, otherwise false.

#### Inherited from

`OutgoingHttpResponse.isNotFound`

***

### isOk()

> **isOk**(): `boolean`

Defined in: http-core/dist/index.d.ts:1205

Check if the status code is 200 (OK).

#### Returns

`boolean`

True if the status code is 200, otherwise false.

#### Inherited from

`OutgoingHttpResponse.isOk`

***

### isRedirect()

> **isRedirect**(`location`?): `boolean`

Defined in: http-core/dist/index.d.ts:1224

Check if the response is a redirect.

#### Parameters

##### location?

`string`

The optional location to check for redirection.

#### Returns

`boolean`

True if the status code indicates a redirect, otherwise false.

#### Inherited from

`OutgoingHttpResponse.isRedirect`

***

### isResetContent()

> **isResetContent**(): `boolean`

Defined in: http-core/dist/index.d.ts:1211

Check if the status code is 205 (Reset Content).

#### Returns

`boolean`

True if the status code is 205, otherwise false.

#### Inherited from

`OutgoingHttpResponse.isResetContent`

***

### isUnauthorized()

> **isUnauthorized**(): `boolean`

Defined in: http-core/dist/index.d.ts:1236

Check if the status code is 401 (Unauthorized).

#### Returns

`boolean`

True if the status code is 401, otherwise false.

#### Inherited from

`OutgoingHttpResponse.isUnauthorized`

***

### isValidateable()

> **isValidateable**(): `boolean`

Defined in: http-core/dist/index.d.ts:1254

Check if the response is validateable.

#### Returns

`boolean`

True if the response has Last-Modified or ETag headers, otherwise false.

#### Inherited from

`OutgoingHttpResponse.isValidateable`

***

### morphToJson()

> `protected` **morphToJson**(`content`, `options`?): `string`

Defined in: http-core/dist/index.d.ts:1322

Convert the given content to a JSON string.

#### Parameters

##### content

`unknown`

The content to convert.

##### options?

`Partial`\<`HttpJsonConfig`\>

Options to customize the serialization process.

#### Returns

`string`

A JSON string representation of the content.

#### Throws

InternalServerError if the content cannot be converted to JSON.

#### Inherited from

`OutgoingHttpResponse.morphToJson`

***

### prepare()

> **prepare**(`event`, `container`): `Promise`\<[`ReactHttpResponse`](ReactHttpResponse.md)\>

Defined in: use-react/src/server/ReactHttpResponse.ts:49

Prepare the response before sending.

#### Parameters

##### event

`IncomingHttpEvent`

The incoming HTTP event.

##### container

`Container`

The service container.

#### Returns

`Promise`\<[`ReactHttpResponse`](ReactHttpResponse.md)\>

The current instance of the response for chaining.

#### Overrides

`OutgoingHttpResponse.prepare`

***

### prepareContentHeaders()

> `protected` **prepareContentHeaders**(): `this`

Defined in: http-core/dist/index.d.ts:1286

Prepare content-related headers such as Content-Length and ETag.

#### Returns

`this`

The current instance of the response for chaining.

#### Inherited from

`OutgoingHttpResponse.prepareContentHeaders`

***

### prepareCookies()

> `protected` **prepareCookies**(): `this`

Defined in: http-core/dist/index.d.ts:1328

Prepare cookies by setting the appropriate headers.

#### Returns

`this`

The current instance of the response for chaining.

#### Inherited from

`OutgoingHttpResponse.prepareCookies`

***

### removeHeader()

> **removeHeader**(`key`): `this`

Defined in: http-core/dist/index.d.ts:1021

Remove headers from the response.

#### Parameters

##### key

The header or headers to be removed.

`string` | `string`[]

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

#### Inherited from

`OutgoingHttpResponse.removeHeader`

***

### secureCookies()

> **secureCookies**(`value`?): `this`

Defined in: http-core/dist/index.d.ts:1071

Secure all cookies by setting the "Secure" attribute.

#### Parameters

##### value?

`boolean`

Whether to set or unset the "Secure" attribute for cookies.

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

#### Inherited from

`OutgoingHttpResponse.secureCookies`

***

### setBlueprintResolver()

> **setBlueprintResolver**(`resolver`): `this`

Defined in: http-core/dist/index.d.ts:1143

Set the resolver for the blueprint.

#### Parameters

##### resolver

() => `undefined` \| `IBlueprint`

A function that returns the blueprint.

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

#### Inherited from

`OutgoingHttpResponse.setBlueprintResolver`

***

### setCharset()

> **setCharset**(`value`): `this`

Defined in: http-core/dist/index.d.ts:1078

Set the character set for the response.

#### Parameters

##### value

`string`

The character encoding to use.

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

#### Inherited from

`OutgoingHttpResponse.setCharset`

***

### setContent()

> **setContent**(`value`, `options`?): `this`

Defined in: http-core/dist/index.d.ts:1040

Set the response content.
If the content should be JSON, it will be converted appropriately.

#### Parameters

##### value

`unknown`

The content to set.

##### options?

`Partial`\<`HttpJsonConfig`\>

The JSON options.

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

#### Inherited from

`OutgoingHttpResponse.setContent`

***

### setContentHeaders()

> `protected` **setContentHeaders**(): `this`

Defined in: http-core/dist/index.d.ts:1292

Set content headers such as Content-Length and ETag.

#### Returns

`this`

The current instance of the response for chaining.

#### Inherited from

`OutgoingHttpResponse.setContentHeaders`

***

### setContentType()

> **setContentType**(`value`): `this`

Defined in: http-core/dist/index.d.ts:1086

Set the content type of the response.

#### Parameters

##### value

`string`

The MIME type for the response.

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

#### Throws

InternalServerError if the provided MIME type is invalid.

#### Inherited from

`OutgoingHttpResponse.setContentType`

***

### setContentTypeIfNeeded()

> `protected` **setContentTypeIfNeeded**(): `this`

Defined in: http-core/dist/index.d.ts:1274

Set the content type if it's not already set.

#### Returns

`this`

The current instance of the response for chaining.

#### Inherited from

`OutgoingHttpResponse.setContentTypeIfNeeded`

***

### setCookie()

> **setCookie**(`name`, `value`, `options`?): `this`

Defined in: http-core/dist/index.d.ts:1049

Set a cookie for the response.

#### Parameters

##### name

`string`

The name of the cookie.

##### value

`unknown`

The value of the cookie.

##### options?

`CookieOptions`

Optional settings for the cookie.

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

#### Inherited from

`OutgoingHttpResponse.setCookie`

***

### setEtag()

> **setEtag**(`etag`?, `weak`?): `this`

Defined in: http-core/dist/index.d.ts:1122

Set the ETag for the response.

#### Parameters

##### etag?

`string`

The ETag value to set.

##### weak?

`boolean`

Whether the ETag should be marked as weak.

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

#### Inherited from

`OutgoingHttpResponse.setEtag`

***

### setHeader()

> **setHeader**(`key`, `value`): `this`

Defined in: http-core/dist/index.d.ts:978

Set a single header for the response.
If the header is "Content-Type," ensures charset is set appropriately.

#### Parameters

##### key

`string`

The header name.

##### value

The value of the header.

`string` | `string`[]

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

#### Inherited from

`OutgoingHttpResponse.setHeader`

***

### setHeaders()

> **setHeaders**(`values`): `this`

Defined in: http-core/dist/index.d.ts:969

Set multiple headers for the response.

#### Parameters

##### values

`HeadersType`

A key-value pair of headers to be set.

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

#### Inherited from

`OutgoingHttpResponse.setHeaders`

***

### setIncomingEventResolver()

> **setIncomingEventResolver**(`resolver`): `this`

Defined in: http-core/dist/index.d.ts:1136

Set the resolver for the incoming HTTP event.

#### Parameters

##### resolver

() => `IncomingHttpEvent`

A function that returns the incoming HTTP event.

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

#### Inherited from

`OutgoingHttpResponse.setIncomingEventResolver`

***

### setLastModified()

> **setLastModified**(`date`?): `this`

Defined in: http-core/dist/index.d.ts:1129

Set the Last-Modified header for the response.

#### Parameters

##### date?

`Date`

The date to set as the Last-Modified header.

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

#### Inherited from

`OutgoingHttpResponse.setLastModified`

***

### setLinks()

> **setLinks**(`links`): `this`

Defined in: http-core/dist/index.d.ts:1100

Set link headers for the response.

#### Parameters

##### links

`Record`\<`string`, `string`\>

An object representing links to set.

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

#### Inherited from

`OutgoingHttpResponse.setLinks`

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

`OutgoingHttpResponse.setMetadataValue`

***

### setStatus()

> **setStatus**(`code`, `text`?): `this`

Defined in: http-core/dist/index.d.ts:1031

Set the HTTP status code of the response.
Also sets a default status message if none is provided.

#### Parameters

##### code

`number`

The HTTP status code.

##### text?

`string`

Optional status message.

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

#### Throws

InternalServerError if the status code is invalid.

#### Inherited from

`OutgoingHttpResponse.setStatus`

***

### setType()

> **setType**(`value`): `this`

Defined in: http-core/dist/index.d.ts:1093

Set the content type by file extension.

#### Parameters

##### value

`string`

The file extension.

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

#### Inherited from

`OutgoingHttpResponse.setType`

***

### shouldBeJson()

> `protected` **shouldBeJson**(`content`): `boolean`

Defined in: http-core/dist/index.d.ts:1313

Determine if the content should be serialized as JSON.

#### Parameters

##### content

`unknown`

The content to check.

#### Returns

`boolean`

True if the content should be serialized as JSON, otherwise false.

#### Inherited from

`OutgoingHttpResponse.shouldBeJson`

***

### stringify()

> `protected` **stringify**(`value`, `replacer`?, `spaces`?, `escape`?): `string`

Defined in: http-core/dist/index.d.ts:1354

Convert the given value to a JSON string with optional escaping.

#### Parameters

##### value

`unknown`

The value to convert.

##### replacer?

(`this`, `key`, `value`) => `unknown`

A function or array that alters the behavior of the stringification process.

##### spaces?

`string`

The number of spaces to use for pretty-printing the JSON string.

##### escape?

`boolean`

Whether to escape special characters.

#### Returns

`string`

The JSON string representation of the value.

#### Inherited from

`OutgoingHttpResponse.stringify`

***

### create()

> `static` **create**\<`T`\>(`options`): `T`

Defined in: use-react/src/server/ReactHttpResponse.ts:29

Create an instance of OutgoingHttpResponse.

#### Type Parameters

• **T** *extends* `OutgoingHttpResponse` = [`ReactHttpResponse`](ReactHttpResponse.md)

#### Parameters

##### options

[`ReactHttpResponseOptions`](../interfaces/ReactHttpResponseOptions.md)

Options for the outgoing HTTP response.

#### Returns

`T`

A new instance of OutgoingHttpResponse.

#### Overrides

`OutgoingHttpResponse.create`

## Events

### OUTGOING\_RESPONSE

> `static` **OUTGOING\_RESPONSE**: `string`

Defined in: core/dist/index.d.ts:271

OUTGOING_RESPONSE Event name, fires on response to the incoming event.

 OutgoingResponse#OUTGOING_RESPONSE

#### Inherited from

`OutgoingHttpResponse.OUTGOING_RESPONSE`
