import {
  IBlueprint,
  isNotEmpty,
  isFunctionModule,
  isMetaClassModule,
  isMetaFactoryModule
} from '@stone-js/core'
import {
  StoneContextType,
  ReactIncomingEvent,
  IComponentErrorHandler,
  MetaComponentErrorHandler,
  LazyComponentErrorHandler,
  ComponentErrorHandlerClass,
  FactoryComponentErrorHandler,
  IComponentAdapterErrorHandler,
  MetaComponentAdapterErrorHandler,
  ComponentAdapterErrorHandlerClass,
  FactoryComponentAdapterErrorHandler
} from './declarations'
import {
  IComponentEventHandler,
  MetaComponentEventHandler,
  LazyComponentEventHandler,
  ComponentEventHandlerClass,
  FactoryComponentEventHandler,
  LazyComponentEventHandlerClass,
  LazyFactoryComponentEventHandler
} from '@stone-js/router'
import { jsx } from 'react/jsx-runtime'
import { ElementType, ReactNode } from 'react'
import { StonePage } from './components/StonePage'
import { UseReactError } from './errors/UseReactError'
import { Container } from '@stone-js/service-container'
import { createRoot, hydrateRoot, Root as ReactRootInstance } from 'react-dom/client'

/**
 * Build the React application for the current route.
 * Or for the main handler if the route is not defined.
 *
 * @param event - ReactIncomingEvent
 * @param container - Service Container
 * @param component - The component response.
 * @param layout - The layout response.
 * @param data - The data to pass to the component.
 * @returns The resolved ReactNode.
 */
export const buildAppComponent = async (
  event: ReactIncomingEvent,
  container: Container,
  component?: unknown,
  layout?: unknown,
  data?: any,
  statusCode?: number,
  error?: any
): Promise<ReactNode> => {
  const componentElement = await buildPageComponent(event, container, component, data, statusCode, error)
  const layoutElement = await buildLayoutComponent(event, container, componentElement, layout, data, statusCode, error)
  const context: StoneContextType = { event, container, data }
  const children = layoutElement ?? componentElement

  return jsx(StonePage, { context, children })
}

/**
 * Get response layout in the current route for mutli pages application.
 * Or get it from the blueprint configuration for single page application.
 * Or get the default layout defined by the user.
 * If not defined, return undefined.
 *
 * @param event - ReactIncomingEvent
 * @param container - Service Container
 * @param children - The children to render.
 * @param layoutName - The layout name.
 * @param data - The data to pass to the layout.
 * @returns The resolved layout element.
 */
export const buildLayoutComponent = async (
  event: ReactIncomingEvent,
  container: Container,
  children: ReactNode,
  layoutName?: unknown,
  data?: any,
  statusCode?: number,
  error?: any
): Promise<ReactNode | undefined> => {
  const metavalue = container
    .make<IBlueprint>('blueprint')
    .get<MetaComponentEventHandler<ReactIncomingEvent>>(
      `stone.useReact.layout.${String(layoutName ?? 'default')}`
  )

  const handler = await resolveComponentEventHandler(container, metavalue)
  const componentType = isNotEmpty<IComponentEventHandler<ReactIncomingEvent>>(handler)
    ? handler.render.bind(handler)
    : undefined

  if (isNotEmpty<ElementType>(componentType)) {
    return jsx(componentType, { event, container, data, statusCode, error, children })
  }
}

/**
 * Get response component in the current route.
 * If not defined, return an empty object.
 *
 * @param event - ReactIncomingEvent
 * @param container - Service Container
 * @param component - The component response.
 * @param data - The data to pass to the component.
 * @param statusCode - The status code of the error.
 * @param error - The error object.
 * @returns The resolved component element.
 */
export const buildPageComponent = (
  event: ReactIncomingEvent,
  container: Container,
  component?: unknown,
  data?: any,
  statusCode?: number,
  error?: any
): ReactNode => {
  if (isNotEmpty<ElementType>(component)) {
    return jsx(component, { event, container, data, statusCode, error })
  }
  return jsx('div', {})
}

/**
 * Get adapter error component.
 *
 * This error handler is different from the kernel error handler.
 * Because there is no container at adapter level.
 *
 * @param statusCode - The status code of the error.
 * @param error - The error object.
 * @param blueprint - The blueprint.
 * @returns The resolved layout element.
 */
export const buildAdapterErrorComponent = async (
  blueprint: IBlueprint,
  statusCode: number,
  error: any
): Promise<ReactNode | undefined> => {
  const handlerMetavalue = blueprint.get<MetaComponentAdapterErrorHandler>(
    `stone.useReact.adapterErrorHandlers.${String(error?.name ?? 'default')}`
  )
  const layoutMetavalue = blueprint.get<MetaComponentEventHandler<ReactIncomingEvent>>(
    `stone.useReact.layout.${String(handlerMetavalue?.layout ?? 'default')}`
  )

  let handler: (IComponentAdapterErrorHandler | undefined)
  let layoutHandler: (IComponentEventHandler<ReactIncomingEvent> | undefined)

  if (isMetaClassModule<ComponentAdapterErrorHandlerClass>(handlerMetavalue)) {
    handler = new handlerMetavalue.module.prototype.constructor({ blueprint })
  } else if (isMetaFactoryModule<FactoryComponentAdapterErrorHandler>(handlerMetavalue)) {
    handler = handlerMetavalue.module({ blueprint })
  }

  if (isMetaClassModule<ComponentEventHandlerClass<ReactIncomingEvent>>(layoutMetavalue)) {
    layoutHandler = new layoutMetavalue.module.prototype.constructor({ blueprint })
  } else if (isMetaFactoryModule<FactoryComponentEventHandler<ReactIncomingEvent>>(layoutMetavalue)) {
    layoutHandler = layoutMetavalue.module({ blueprint })
  }

  const data: any = await handler?.handle?.(error)
  const componentType = handler?.render.bind(handler) as (ElementType | undefined)
  const layoutType = layoutHandler?.render.bind(layoutHandler) as (ElementType | undefined)

  if (isNotEmpty<ElementType>(componentType) && isNotEmpty<ElementType>(layoutType)) {
    const children = jsx(componentType, { blueprint, data, error, statusCode })
    return jsx(layoutType, { blueprint, data, error, statusCode, children })
  } else if (isNotEmpty<ElementType>(componentType)) {
    return jsx(componentType, { blueprint, data, error, statusCode })
  } else {
    return jsx('h1', { children: 'An error occurred.' })
  }
}

/**
 * Resolve the event handler for the component.
 *
 * Can also resolve dynamically loaded components.
 *
 * @param container - The service container.
 * @param metaComponent - The meta component event handler.
 * @returns The resolved element type.
 */
export const resolveComponentEventHandler = async (
  container: Container,
  metaComponent?: MetaComponentEventHandler<ReactIncomingEvent>
): Promise<IComponentEventHandler<ReactIncomingEvent> | undefined> => {
  if (
    metaComponent?.lazy === true &&
    isFunctionModule<LazyComponentEventHandler<ReactIncomingEvent>>(metaComponent?.module)
  ) {
    metaComponent.module = await metaComponent.module()
  }

  if (isMetaClassModule<ComponentEventHandlerClass<ReactIncomingEvent>>(metaComponent)) {
    return container.resolve<IComponentEventHandler<ReactIncomingEvent>>(metaComponent.module)
  } else if (isMetaFactoryModule<FactoryComponentEventHandler<ReactIncomingEvent>>(metaComponent)) {
    return metaComponent.module(container)
  }
}

/**
 * Resolve the error handler for the component.
 *
 * Can also resolve dynamically loaded components.
 *
 * @param container - The service container.
 * @param metaComponent - The meta component error handler.
 * @returns The resolved error handler.
 */
export const resolveComponentErrorHandler = async (
  container: Container,
  metaComponent?: MetaComponentErrorHandler<ReactIncomingEvent>
): Promise<IComponentErrorHandler<ReactIncomingEvent> | undefined> => {
  if (
    metaComponent?.lazy === true &&
    isFunctionModule<LazyComponentErrorHandler<ReactIncomingEvent>>(metaComponent?.module)
  ) {
    metaComponent.module = await metaComponent.module()
  }

  if (isMetaClassModule<ComponentErrorHandlerClass<ReactIncomingEvent>>(metaComponent)) {
    return container.resolve<IComponentErrorHandler<ReactIncomingEvent>>(metaComponent.module)
  } else if (isMetaFactoryModule<FactoryComponentErrorHandler<ReactIncomingEvent>>(metaComponent)) {
    return metaComponent.module(container)
  }
}

/**
 * Get the root element to render the React components.
 *
 * @param blueprint - The blueprint.
 * @returns The root element to render the React components.
 * @throws {UseReactError} If the root container is not found.
 */
export const getAppRootElement = (blueprint: IBlueprint): HTMLElement => {
  const rootElementId = blueprint.get<string>('stone.useReact.rootElementId', 'root')
  const appContainer = document.getElementById(rootElementId) ?? undefined
  if (appContainer === undefined) { throw new UseReactError('Root container is required to render React components.') }
  return appContainer
}

/**
 * Define a class component.
 *
 * @param module - The class component module.
 * @param options - The options for the component.
 * @returns The meta component event handler.
 */
export const defineClassComponent = (
  module: ComponentEventHandlerClass<ReactIncomingEvent> | LazyComponentEventHandlerClass<ReactIncomingEvent>,
  options: Pick<MetaComponentEventHandler<ReactIncomingEvent>, 'lazy' | 'layout'>
): MetaComponentEventHandler<ReactIncomingEvent> => {
  return { ...options, isClass: true, isFactory: false, isComponent: true, module }
}

/**
 * Define a factory component.
 *
 * @param module - The factory component module.
 * @param options - The options for the component.
 * @returns The meta component event handler.
 */
export const defineFactoryComponent = (
  module: FactoryComponentEventHandler<ReactIncomingEvent> | LazyFactoryComponentEventHandler<ReactIncomingEvent>,
  options: Pick<MetaComponentEventHandler<ReactIncomingEvent>, 'lazy' | 'layout'>
): MetaComponentEventHandler<ReactIncomingEvent> => {
  return { ...options, isClass: false, isFactory: true, isComponent: true, module }
}

/**
 * Renders the React app.
 *
 * @param app - The React app to render.
 * @param blueprint - The blueprint.
 * @returns The React root instance.
 */
export const renderReactApp = (app: ReactNode, blueprint: IBlueprint): ReactRootInstance => {
  const reactRoot = blueprint.get<ReactRootInstance>('stone.useReact.reactRoot') ??
    createRoot(getAppRootElement(blueprint))

  reactRoot.render(app)

  blueprint.setIf('stone.useReact.reactRoot', reactRoot)

  return reactRoot
}

/**
 * Hydrates the React app when SSR is enabled.
 *
 * @param app - The React app to hydrate.
 * @param blueprint - The blueprint.
 * @returns The React root instance.
 */
export const hydrateReactApp = (app: ReactNode, blueprint: IBlueprint): ReactRootInstance => {
  const reactRoot = hydrateRoot(getAppRootElement(blueprint), app)
  blueprint.setIf('stone.useReact.reactRoot', reactRoot)

  return reactRoot
}

/**
 * Check if the current environment is the server.
 *
 * @returns True if the current environment is the server.
 */
export const isServer = (): boolean => typeof window === 'undefined'

/**
 * Check if the current environment is the client.
 *
 * @returns True if the current environment is the client.
 */
export const isClient = (): boolean => !isServer()
