# Function: getServerContent()

```ts
function getServerContent(
   component, 
   data, 
   container, 
   event, 
head?): Promise<string>;
```

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

`HeadContext`

The head context.

## Returns

`Promise`\<`string`\>

A promise that resolves when the content is hydrated.
