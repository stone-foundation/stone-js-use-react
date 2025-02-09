import { ReactNode } from 'react'
import { Router } from '@stone-js/router'
import { IncomingHttpEvent } from '@stone-js/http-core'
import { ReactBrowserResponse } from './ReactBrowserResponse'
import { ReactHttpResponse } from './server/ReactHttpResponse'
import { BrowserContext, BrowserEvent, BrowserResponse } from '@stone-js/browser-adapter'
import { IncomingBrowserEvent, IncomingBrowserEventOptions } from '@stone-js/browser-core'
import { OutgoingResponseOptions, IContainer, AdapterContext, Promiseable, FunctionalErrorHandler } from '@stone-js/core'

/**
 * Incoming event for React.
*/
export type ReactIncomingEvent = IncomingHttpEvent | IncomingBrowserEvent

/**
 * Outgoing response for React.
*/
export type ReactOutgoingResponse = ReactHttpResponse | ReactBrowserResponse

/**
 * Options for creating a React Outgoing Response.
*/
export interface ReactOutgoingResponseOptions extends OutgoingResponseOptions {
  headers?: HeadersType
}

/**
 * Router for React.
*/
export type IRouter = Router<ReactIncomingEvent, ReactOutgoingResponse>

/**
 * Browser Adapter Context for React.
 */
export type ReactBrowserAdapterContext = AdapterContext<
BrowserEvent,
BrowserResponse,
BrowserContext,
IncomingBrowserEvent,
IncomingBrowserEventOptions,
ReactBrowserResponse
>

/**
 * Context for React.
 */
export interface StoneContextType {
  data: any
  container: IContainer
  event: ReactIncomingEvent
}

/**
 * Headers type for React.
 */
export type HeadersType = Headers | Map<string, string | string[]> | Record<string, string | string[]>

/**
 * Global data for React.
 */
export interface GlobalDataType {
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
  app: ReactNode
  fullRender: boolean
  component: ReactNode
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
export interface RenderLayoutContext<UChildren = ReactNode, TData = any> {
  data?: TData
  children: UChildren
  container: IContainer
  event: ReactIncomingEvent
}

/**
 * React render page error options.
 */
export interface RenderErrorContext<TError = any, TData = any> {
  error: TError
  data?: TData
  statusCode: number
  container: IContainer
  event: ReactIncomingEvent
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
  render: (options: any) => Promiseable<unknown>
  handle?: FunctionalErrorHandler<IncomingEventType, OutgoingResponseType>
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
