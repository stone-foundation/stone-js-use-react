import { ReactNode } from 'react'
import { Router } from '@stone-js/router'
import { Config } from '@stone-js/config'
import { BrowserContext, BrowserEvent, BrowserResponse } from '@stone-js/browser-adapter'
import { IncomingHttpEvent, IncomingHttpEventOptions, OutgoingHttpResponse, RedirectResponse } from '@stone-js/http-core'
import { IncomingBrowserEvent, IncomingBrowserEventOptions, OutgoingBrowserResponse, RedirectBrowserResponse } from '@stone-js/browser-core'
import { OutgoingResponseOptions, IContainer, AdapterContext, Promiseable, FunctionalErrorHandler, HookName as BaseHookName, IBlueprint } from '@stone-js/core'

/**
 * Headers type for React.
 */
export type HeadersType = Headers | Map<string, string | string[]> | Record<string, string | string[]>

/**
 * Incoming event for React.
*/
export type ReactIncomingEvent = IncomingHttpEvent | IncomingBrowserEvent

/**
 * Incoming event options for React.
*/
export type ReactIncomingEventOptions = IncomingBrowserEventOptions | IncomingHttpEventOptions

/**
 * Outgoing response for React.
*/
export type ReactOutgoingResponse = (
  | OutgoingHttpResponse
  | OutgoingBrowserResponse
  | RedirectResponse
  | RedirectBrowserResponse)
& { content: any }

/**
 * Options for creating a React Outgoing Response.
*/
export interface ReactOutgoingResponseOptions extends OutgoingResponseOptions {
  headers?: HeadersType
}

/**
 * HookName Type.
 *
 * extends Core HookName.
 */
export type HookName = BaseHookName | UseReactHookName

/**
 * UseReactHookName Type.
 */
export type UseReactHookName = 'onPreparingPage'

/**
 * Use React Hook Listener Context.
 */
export interface UseReactHookListenerContext {
  data: any
  error?: any
  container: IContainer
  componentType: unknown
  event: ReactIncomingEvent
  snapshot: ResponseSnapshotType
  response: ReactOutgoingResponse
}

/**
 * UseReactHookListener Type.
 *
 * Represents a listener hook that can either be synchronous or asynchronous.
 */
export type UseReactHookListener = (context: UseReactHookListenerContext) => Promiseable<void>

/**
 * UseReactHook Type.
 */
export interface UseReactHookType {
  onPreparingPage?: UseReactHookListener[]
}

/**
 * Router for React.
*/
export type IRouter = Router<ReactIncomingEvent, ReactOutgoingResponse>

/**
 * The type representing a Snapshot.
 * An object that represents the state of the application at a given time.
*/
export type ISnapshot = Config

/**
 * Browser Adapter Context for React.
 */
export type ReactBrowserAdapterContext = AdapterContext<
BrowserEvent,
BrowserResponse,
BrowserContext,
IncomingBrowserEvent,
IncomingBrowserEventOptions,
OutgoingBrowserResponse
>

/**
 * Stone data snapshot type.
 */
export interface ResponseSnapshotType {
  data?: any
  error?: any
  ssr: boolean
  layout?: unknown
  statusCode?: number
}

/**
 * Browser response content for React.
 */
export interface BrowserResponseContent {
  ssr?: boolean
  app?: ReactNode
  fullRender?: boolean
  component?: ReactNode
  targetUrl?: string | URL
}

/**
 * Context for React.
 */
export interface StoneContextType {
  data: any
  container: IContainer
  event: ReactIncomingEvent
}

/**
 * React render page options.
 */
export interface RenderContext<TData = any> {
  data?: TData
  container: IContainer
  event: ReactIncomingEvent
}

/**
 * React render page layout options.
 */
export interface RenderLayoutContext<TChildren = ReactNode, UData = any> extends RenderContext<UData> {
  children: TChildren
}

/**
 * React render page error options.
 */
export interface RenderErrorContext<TError = any, UData = any> extends RenderContext<UData> {
  error: TError
  statusCode: number
}

/**
 * Represents a component error handler class.
 *
 * @template IncomingEventType - The type representing the incoming event.
 * @template OutgoingResponseType - The type representing the outgoing response.
*/
export type ComponentErrorHandlerClass<
  IncomingEventType extends ReactIncomingEvent,
  OutgoingResponseType = unknown
> = new (...args: any[]) => IComponentErrorHandler<IncomingEventType, OutgoingResponseType>

/**
 * Represents a component error handler.
 *
 * @template IncomingEventType - The type representing the incoming event.
 * @template OutgoingResponseType - The type representing the outgoing response.
*/
export interface IComponentErrorHandler<
  IncomingEventType extends ReactIncomingEvent,
  OutgoingResponseType = unknown
> {
  handle?: FunctionalErrorHandler<IncomingEventType, OutgoingResponseType>
  render: (context: RenderErrorContext) => Promiseable<unknown>
}

/**
 * Represents a factory component error handler.
 *
 * @template IncomingEventType - The type representing the incoming event.
 * @template OutgoingResponseType - The type representing the outgoing response.
*/
export type FactoryComponentErrorHandler<
  IncomingEventType extends ReactIncomingEvent,
  OutgoingResponseType = unknown
> = (container?: IContainer | any) => IComponentErrorHandler<IncomingEventType, OutgoingResponseType>

/**
 * Represents a component error handler type.
 *
 * @template IncomingEventType - The type representing the incoming event.
 * @template OutgoingResponseType - The type representing the outgoing response.
 */
export type ComponentErrorHandlerType<
  IncomingEventType extends ReactIncomingEvent,
  OutgoingResponseType = unknown
> = ComponentErrorHandlerClass<IncomingEventType, OutgoingResponseType> | FactoryComponentErrorHandler<IncomingEventType, OutgoingResponseType>

/**
 * Represents a meta component error handler.
 *
 * @template IncomingEventType - The type representing the incoming event.
 * @template OutgoingResponseType - The type representing the outgoing response.
 */
export interface MetaComponentErrorHandler<
  IncomingEventType extends ReactIncomingEvent,
  OutgoingResponseType = unknown
> {
  error?: any
  lazy?: boolean
  layout?: unknown
  isClass?: boolean
  isFactory?: boolean
  module: ComponentErrorHandlerType<IncomingEventType, OutgoingResponseType> | LazyComponentErrorHandler<IncomingEventType, OutgoingResponseType>
}

/**
 * Represents a lazy component error handler.
 *
 * @template IncomingEventType - The type representing the incoming event.
 * @template OutgoingResponseType - The type representing the outgoing response.
 */
export type LazyComponentErrorHandler<
  IncomingEventType extends ReactIncomingEvent,
  OutgoingResponseType = unknown
> = () => Promise<ComponentErrorHandlerType<IncomingEventType, OutgoingResponseType>>

/** ****** Adapter Error page *************/
/**
 * React Adapter render page error options.
 */
export interface RenderAdapterErrorContext<TError = any, UData = any> {
  data?: UData
  error: TError
  statusCode: number
  blueprint: IBlueprint
}

/**
 * FunctionalAdapterErrorHandler Type.
 *
 * Represents a function that handles errors and returns responses.
 *
 * @template OutgoingResponseType - The type representing the outgoing response.
 * @param error - The error to handle.
 * @returns The outgoing response.
 */
export type FunctionalAdapterErrorHandler<
OutgoingResponseType = unknown
> = (error: any) => Promiseable<OutgoingResponseType>

/**
 * Represents an Adapter component error handler class.
 *
 * @template OutgoingResponseType - The type representing the outgoing response.
*/
export type ComponentAdapterErrorHandlerClass<
  OutgoingResponseType = unknown
> = new (...args: any[]) => IComponentAdapterErrorHandler<OutgoingResponseType>

/**
 * Represents an Adapter component error handler.
 *
 * @template OutgoingResponseType - The type representing the outgoing response.
*/
export interface IComponentAdapterErrorHandler<
  OutgoingResponseType = unknown
> {
  handle?: FunctionalAdapterErrorHandler<OutgoingResponseType>
  render: (context: RenderAdapterErrorContext) => Promiseable<unknown>
}

/**
 * Represents an Adapter factory component error handler.
 *
 * @template OutgoingResponseType - The type representing the outgoing response.
*/
export type FactoryComponentAdapterErrorHandler<
  OutgoingResponseType = unknown
> = (container?: IContainer | any) => IComponentAdapterErrorHandler<OutgoingResponseType>

/**
 * Represents an Adapter component error handler type.
 *
 * @template OutgoingResponseType - The type representing the outgoing response.
 */
export type ComponentAdapterErrorHandlerType<
  OutgoingResponseType = unknown
> = ComponentAdapterErrorHandlerClass<OutgoingResponseType> | FactoryComponentAdapterErrorHandler<OutgoingResponseType>

/**
 * Represents an Adapter meta component error handler.
 *
 * @template OutgoingResponseType - The type representing the outgoing response.
 */
export interface MetaComponentAdapterErrorHandler<
  OutgoingResponseType = unknown
> {
  error?: any
  lazy?: boolean
  layout?: unknown
  isClass?: boolean
  isFactory?: boolean
  module: ComponentAdapterErrorHandlerType<OutgoingResponseType> | LazyComponentAdapterErrorHandler<OutgoingResponseType>
}

/**
 * Represents an Adapter lazy component error handler.
 *
 * @template OutgoingResponseType - The type representing the outgoing response.
 */
export type LazyComponentAdapterErrorHandler<
  OutgoingResponseType = unknown
> = () => Promise<ComponentAdapterErrorHandlerType<OutgoingResponseType>>
