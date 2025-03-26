import {
  ISnapshot,
  UseReactHookName,
  UseReactHookType,
  ReactIncomingEvent,
  ResponseSnapshotType,
  ReactOutgoingResponse,
  IComponentErrorHandler,
  BrowserResponseContent,
  MetaComponentErrorHandler,
  UseReactHookListenerContext
} from './declarations'
import { ReactNode } from 'react'
import { Config } from '@stone-js/config'
import { STONE_SNAPSHOT } from './constants'
import { renderToString } from 'react-dom/server'
import { StoneError } from './components/StoneError'
import { OutgoingHttpResponse } from '@stone-js/http-core'
import { IncomingBrowserEvent } from '@stone-js/browser-core'
import { IComponentEventHandler, NAVIGATION_EVENT } from '@stone-js/router'
import { IBlueprint, IContainer, isFunction, isNotEmpty, isObjectLikeModule } from '@stone-js/core'
import { resolveComponentErrorHandler, buildPageComponent, buildAppComponent, resolveComponentEventHandler, htmlTemplate } from './UseReactComponentUtils'

/**
 * Options for onPreparingResponse hook.
 */
export interface OnPreparingResponseOptions {
  container: IContainer
  event: IncomingBrowserEvent
  response: ReactOutgoingResponse
}

/**
 * Hook that runs after the context is created.
 *
 * The browser adapter only execute onStart and onInit hooks when first loaded.
 * Note: As Stone.js is an event-driven framework, we need to dispatch an event to continue with the flow.
 *
 * @param container - The service container.
 */
export function onInit (container: IContainer): void {
  registerSnapshot(container)
  !isSSR() && window.dispatchEvent(new Event(NAVIGATION_EVENT))
}

/**
 * Hook that runs just before preparing the response.
 *
 * @param context - The context of the hook.
*/
export async function onPreparingResponse (
  { event, response, container }: OnPreparingResponseOptions
): Promise<void> {
  const snapshot = getResponseSnapshot(event, container)

  if (isNotEmpty(snapshot.error)) {
    await prepareFallbackErrorPage(event, response, container, snapshot)
  } else if (response.isError()) {
    await prepareErrorPage(event, response, container, snapshot)
  } else if (isFunction(response.content?.module)) {
    await preparePage(event, response, container, snapshot)
  }
}

/**
 * Prepare the page to render.
 *
 * Here we prepare the page to render by resolving
 * the handler, handler the event, and rendering the component.
 *
 * @param event - The incoming HTTP event.
 * @param response - The outgoing HTTP response.
 * @param container - The service container.
 * @param snapshot - The response snapshot.
 */
async function preparePage (
  event: IncomingBrowserEvent,
  response: ReactOutgoingResponse,
  container: IContainer,
  snapshot: ResponseSnapshotType
): Promise<void> {
  const { layout = 'default' } = response.content
  const page = await resolveComponentEventHandler(container, response.content)
  const data = await executeHandler(event, response, snapshot, page)
  const componentType = page?.render.bind(page)

  await executeHooks('onPreparingPage', { event, response, container, snapshot, data, componentType })

  const snapshotData = { data, layout, statusCode: response.statusCode }
  const component = await buildPageComponent(event, container, componentType, data, response.statusCode)
  const appComponent = await buildAppComponent(event, container, componentType, layout, data, response.statusCode)

  response.setContent(isSSR()
    ? await getServerContent(appComponent, snapshotData, container, event)
    : getBrowserContent(appComponent, component, layout, snapshot)
  )
}

/**
 * Prepare the error page to render.
 *
 * Error pages are prepared sepatately because their handler
 * is different from the normal page handler.
 * Their handler takes an error as the first argument and the event as the second.
 *
 * @param event - The incoming HTTP event.
 * @param response - The outgoing HTTP response.
 * @param container - The service container.
 * @param snapshot - The response snapshot.
 */
async function prepareErrorPage (
  event: IncomingBrowserEvent,
  response: ReactOutgoingResponse,
  container: IContainer,
  snapshot: ResponseSnapshotType
): Promise<void> {
  const { error = {}, layout } = response.content
  const errorPage = await resolveComponentErrorHandler(container, response.content)
  const data = await executeHandler(event, response, snapshot, errorPage, error)
  const componentType = errorPage?.render.bind(errorPage) ?? StoneError

  await executeHooks('onPreparingPage', { event, response, container, snapshot, data, componentType, error })

  const snapshotData = { data, layout, statusCode: response.statusCode, error: { name: error.name } }
  const component = await buildPageComponent(event, container, componentType, data, response.statusCode, error)
  const appComponent = await buildAppComponent(event, container, componentType, layout, data, response.statusCode, error)

  response.setContent(isSSR()
    ? await getServerContent(appComponent, snapshotData, container, event)
    : getBrowserContent(appComponent, component, layout, snapshot)
  )
}

/**
 * Prepare the fallback error page to render.
 *
 * We prepare a fallback error page if no event nor error handler is provided.
 *
 * @param event - The incoming event.
 * @param response - The outgoing response.
 * @param container - The service container.
 * @param snapshot - The response snapshot.
 */
async function prepareFallbackErrorPage (
  event: IncomingBrowserEvent,
  response: ReactOutgoingResponse,
  container: IContainer,
  snapshot: ResponseSnapshotType
): Promise<void> {
  const { layout, error, statusCode = 500 } = snapshot
  const blueprint = container.make<IBlueprint>('blueprint')
  const metavalue = blueprint.get<MetaComponentErrorHandler<ReactIncomingEvent>>(
    `stone.useReact.errorHandlers.${String(error?.name)}`,
    blueprint.get<MetaComponentErrorHandler<ReactIncomingEvent>>(
      'stone.useReact.errorHandlers.default',
      {} as any
    )
  )
  const content = { ...metavalue, layout }

  content.error = error ?? (response.content instanceof Error ? response.content : new Error('An error occurred.'))

  response
    .setContent(content)
    .setStatus(statusCode)

  await prepareErrorPage(event, response, container, snapshot)
}

/**
 * Execute the handler.
 *
 * This method will try to get data from the snapshot
 * If the snapshot is not present, it will execute the handler.
 * If the handler is not present, it will return undefined.
 *
 * @param response - The response object.
 * @returns The data from the response.
 */
async function executeHandler (
  event: IncomingBrowserEvent,
  response: ReactOutgoingResponse,
  snapshot: ResponseSnapshotType,
  handler?: (IComponentEventHandler<IncomingBrowserEvent> | IComponentErrorHandler<IncomingBrowserEvent>),
  error?: any
): Promise<any> {
  let result: any = snapshot

  if (!snapshot.ssr) {
    if (isNotEmpty<Error>(error) && isObjectLikeModule<IComponentErrorHandler<IncomingBrowserEvent>>(handler)) {
      result = await handler.handle?.(error, event)
    } else if (isObjectLikeModule<IComponentEventHandler<IncomingBrowserEvent>>(handler)) {
      result = await handler.handle?.(event)
    } else {
      result = undefined
    }
  }

  if (isNotEmpty(result?.statusCode)) {
    response.setStatus(result.statusCode)
  }

  if (
    isNotEmpty(result?.headers) &&
    isNotEmpty<OutgoingHttpResponse>(response) &&
    isNotEmpty(response.setHeaders)
  ) {
    response.setHeaders(result.headers)
  }

  return result?.content ?? result?.data ?? result
}

/**
 * Keep track of the current layout.
 * This is used to determine if the layout has changed.
 * We make a full render each time the layout changes.
 *
 * @returns The current layout.
 */
let currentLayout: string | undefined

/**
 * Get the browser content.
 *
 * @param app - The app component to render.
 * @param component - The component to render.
 * @param fullRender - If the component should be fully rendered.
 */
function getBrowserContent (
  app: ReactNode,
  component: ReactNode,
  layout: any,
  snapshot: ResponseSnapshotType
): BrowserResponseContent {
  const content = { app, component, fullRender: currentLayout !== layout, ssr: snapshot.ssr }
  currentLayout = layout
  return content
}

/**
 * Get the server content.
 *
 * @param component - The React component to hydrate.
 * @param data - The data to pass to the components.
 * @param container - The service container.
 * @returns A promise that resolves when the content is hydrated.
 */
async function getServerContent (
  component: ReactNode,
  data: Partial<ResponseSnapshotType>,
  container: IContainer,
  event: IncomingBrowserEvent
): Promise<string> {
  const html = renderToString(component).concat('\n<!--app-html-->')
  const template = await htmlTemplate(container.make<IBlueprint>('blueprint'))
  const snapshot = snapshotResponse(event, container, data).concat('\n<!--app-head-->')

  return template
    .replace('<!--app-html-->', html)
    .replace('<!--app-head-->', snapshot)
}

/**
 * Determine if the application is running on the server side.
 *
 * @returns True if the application is running on the server side, false otherwise.
 */
function isSSR (): boolean {
  return import.meta.env.SSR || typeof window === 'undefined'
}

/**
 * Register the snapshot.
 *
 * We save the snapshot on server side rendering and
 * we use it to hydrate the application on the client side.
*/
function registerSnapshot (container: IContainer): void {
  const textContent = isSSR() ? '{}' : (window.document.getElementById(STONE_SNAPSHOT)?.textContent ?? '{}')
  container.singletonIf('snapshot', () => Config.fromJson(textContent))
}

/**
 * Get the response snapshot.
 *
 * @param event - The incoming browser event.
 * @returns The response snapshot.
 */
function getResponseSnapshot (event: IncomingBrowserEvent, container: IContainer): ResponseSnapshotType {
  return container.make<ISnapshot>('snapshot').get(event.fingerprint(), { ssr: false })
}

/**
 * Snapshot the response data.
 *
 * @param event - The incoming HTTP event.
 * @param data - The data to snapshot.
 */
function snapshotResponse (event: IncomingBrowserEvent, container: IContainer, data: Partial<ResponseSnapshotType>): string {
  const snapshot = container.make<ISnapshot>('snapshot')
  return renderStoneSnapshot(snapshot.add(event.fingerprint(), { ...data, ssr: true }).toJson())
}

/**
 * Render Stone snapshot.
 *
 * @param snapshot - The snapshot to render.
 * @returns The script tag.
 */
function renderStoneSnapshot (snapshot: string): string {
  return `<script id="${STONE_SNAPSHOT}" type="application/json">${snapshot}</script>`
}

/**
 * Execute hooks.
 *
 * @param name - The name of the hook.
 * @param context - The context of the adapter.
 */
async function executeHooks (name: UseReactHookName, context: UseReactHookListenerContext): Promise<void> {
  const hooks = context.container.make<IBlueprint>('blueprint').get<UseReactHookType>('stone.lifecycleHooks', {})

  if (Array.isArray(hooks[name])) {
    for (const listener of hooks[name]) {
      await listener(context)
    }
  }
}
