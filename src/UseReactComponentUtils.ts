import {
  Laziable,
  IBlueprint,
  isNotEmpty,
  isFunctionModule,
  isMetaClassModule,
  isMetaFactoryModule,
  AdapterErrorContext
} from '@stone-js/core'
import {
  IPage,
  MetaPage,
  PageType,
  PageClass,
  IErrorPage,
  IPageLayout,
  FactoryPage,
  MetaErrorPage,
  MetaPageLayout,
  PageLayoutClass,
  StoneContextType,
  FactoryPageLayout,
  IAdapterErrorPage,
  ReactIncomingEvent,
  MetaAdapterErrorPage,
  AdapterErrorPageClass,
  FactoryAdapterErrorPage
} from './declarations'
import { jsx } from 'react/jsx-runtime'
import { ElementType, ReactNode } from 'react'
import { StonePage } from './components/StonePage'
import { StoneError } from './components/StoneError'
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
  const layoutElement = await buildLayoutComponent(container, componentElement, layout)
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
 * @param container - Service Container.
 * @param children - The children to render.
 * @param layoutName - The layout name.
 * @returns The resolved layout element.
 */
export const buildLayoutComponent = async (
  container: Container,
  children: ReactNode,
  layoutName?: unknown
): Promise<ReactNode | undefined> => {
  const metavalue = container
    .make<IBlueprint>('blueprint')
    .get<MetaPageLayout>(
      `stone.useReact.layout.${String(layoutName)}`
  )

  const handler = await resolveComponent(container, metavalue)
  const componentType = isNotEmpty<IPageLayout>(handler)
    ? handler.render.bind(handler)
    : undefined

  if (isNotEmpty<ElementType>(componentType)) {
    return jsx(componentType, { container, children })
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
 * @param blueprint - The blueprint.
 * @param context - The context of the adapter.
 * @param statusCode - The status code of the error.
 * @param error - The error object.
 * @returns The resolved layout element.
 */
export const buildAdapterErrorComponent = async <RawEventType, RawResponseType, ExecutionContextType>(
  blueprint: IBlueprint,
  context: AdapterErrorContext<RawEventType, RawResponseType, ExecutionContextType>,
  statusCode: number,
  error: any
): Promise<ReactNode | undefined> => {
  const handlerMetavalue = blueprint.get<MetaAdapterErrorPage<RawEventType, RawResponseType, ExecutionContextType>>(
    `stone.useReact.adapterErrorHandlers.${String(error?.name ?? 'default')}`
  )
  const layoutMetavalue = blueprint.get<MetaPageLayout>(
    `stone.useReact.layout.${String(handlerMetavalue?.layout)}`
  )

  let layoutHandler: (IPageLayout | undefined)
  let handler: (IAdapterErrorPage<RawEventType, RawResponseType, ExecutionContextType> | undefined)

  if (isMetaClassModule<AdapterErrorPageClass<RawEventType, RawResponseType, ExecutionContextType>>(handlerMetavalue)) {
    handler = new handlerMetavalue.module.prototype.constructor({ blueprint })
  } else if (isMetaFactoryModule<FactoryAdapterErrorPage<RawEventType, RawResponseType, ExecutionContextType>>(handlerMetavalue)) {
    handler = handlerMetavalue.module({ blueprint })
  }

  if (isMetaClassModule<PageLayoutClass>(layoutMetavalue)) {
    layoutHandler = new layoutMetavalue.module.prototype.constructor({ blueprint })
  } else if (isMetaFactoryModule<FactoryPageLayout>(layoutMetavalue)) {
    layoutHandler = layoutMetavalue.module({ blueprint })
  }

  await handler?.handle?.(error, context)

  const componentType = handler?.render.bind(handler) as (ElementType | undefined)
  const layoutType = layoutHandler?.render.bind(layoutHandler) as (ElementType | undefined)

  if (isNotEmpty<ElementType>(componentType) && isNotEmpty<ElementType>(layoutType)) {
    const children = jsx(componentType, { blueprint, error, statusCode })
    return jsx(layoutType, { blueprint, children })
  } else if (isNotEmpty<ElementType>(componentType)) {
    return jsx(componentType, { blueprint, error, statusCode })
  } else {
    return jsx(StoneError, { blueprint, error, statusCode })
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
export const resolveComponent = async <T = IPage<ReactIncomingEvent> | IErrorPage<ReactIncomingEvent> | IPageLayout>(
  container: Container,
  metaComponent?: MetaPage<ReactIncomingEvent> | MetaErrorPage<ReactIncomingEvent> | MetaPageLayout
): Promise<T | undefined> => {
  if (
    metaComponent?.lazy === true &&
    isFunctionModule<Laziable<PageType<ReactIncomingEvent>>>(metaComponent?.module)
  ) {
    metaComponent.lazy = false
    metaComponent.module = await metaComponent.module()
  }

  if (isMetaClassModule<PageClass<ReactIncomingEvent>>(metaComponent)) {
    return container.resolve<IPage<ReactIncomingEvent>>(metaComponent.module) as T
  } else if (isMetaFactoryModule<FactoryPage<ReactIncomingEvent>>(metaComponent)) {
    return metaComponent.module(container) as T
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

/**
 * Get the HTML template for the React application.
 *
 * @param blueprint - The blueprint.
 * @returns The HTML template.
 */
export const htmlTemplate = async (blueprint: IBlueprint): Promise<string> => {
  const path = blueprint.get<string>('stone.useReact.htmlTemplatePath', './template.mjs')
  return await import(/* @vite-ignore */path).then(v => Object.values<string>(v)[0])
}

/**
 * Determine if the application is running on the server side.
 *
 * @returns True if the application is running on the server side, false otherwise.
 */
export function isSSR (): boolean {
  return import.meta.env.SSR || typeof window === 'undefined'
}
