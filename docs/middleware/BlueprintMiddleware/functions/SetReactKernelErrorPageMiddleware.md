# Function: SetReactKernelErrorPageMiddleware()

```ts
function SetReactKernelErrorPageMiddleware(context, next): Promiseable<IBlueprint>;
```

Blueprint middleware to process and register kernel error page definitions from modules.

## Parameters

### context

`BlueprintContext`\<`IBlueprint`, `ClassType`\>

The configuration context containing modules and blueprint.

### next

`NextMiddleware`\<`BlueprintContext`\<`IBlueprint`, `ClassType`\>, `IBlueprint`\>

The next pipeline function to continue processing.

## Returns

`Promiseable`\<`IBlueprint`\>

The updated blueprint or a promise resolving to it.

## Example

```typescript
SetReactKernelErrorPageMiddleware(context, next)
```
