import { ReactNode } from 'react'
import { getAppRootElement } from '../utils'
import { NextPipe } from '@stone-js/pipeline'
import { NAVIGATION_EVENT } from '@stone-js/router'
import { STONE_PAGE_EVENT_OUTLET } from '../constants'
import { UseReactError } from '../errors/UseReactError'
import { BrowserAdapterResponseBuilder } from '@stone-js/browser-adapter'
import { classMiddleware, IBlueprint, isEmpty, isNotEmpty } from '@stone-js/core'
import { BrowserResponseContent, ReactBrowserAdapterContext } from '../declarations'
import { createRoot, hydrateRoot, Root as ReactRootInstance } from 'react-dom/client'

/**
 * Middleware for handling outgoing responses and rendering them in the browser.
 */
export class BrowserResponseMiddleware {
  private readonly blueprint: IBlueprint
  private reactRoot?: ReactRootInstance
  private readonly isRendered: boolean

  /**
   * Create a BrowserResponseMiddleware.
   *
   * @param {blueprint} options - Options for creating the BrowserResponseMiddleware.
   */
  constructor ({ blueprint }: { blueprint: IBlueprint }) {
    this.blueprint = blueprint
    this.reactRoot = blueprint.get<ReactRootInstance | undefined>('stone.useReact.reactRoot')
    this.isRendered = isNotEmpty(this.reactRoot)
  }

  /**
   * Handles the outgoing response, processes it, and invokes the next middleware in the pipeline.
   *
   * @param context - The adapter context containing the raw event, execution context, and other data.
   * @param next - The next middleware to be invoked in the pipeline.
   * @returns A promise resolving to the processed context.
   * @throws {NodeHttpAdapterError} If required components are missing in the context.
   */
  async handle (
    context: ReactBrowserAdapterContext,
    next: NextPipe<ReactBrowserAdapterContext, BrowserAdapterResponseBuilder>
  ): Promise<BrowserAdapterResponseBuilder> {
    const rawResponseBuilder = await next(context)

    this.ensureValidContext(context, rawResponseBuilder)
    rawResponseBuilder.add('render', async () => await this.renderComponent(context.outgoingResponse?.content))

    return rawResponseBuilder
  }

  /**
   * Ensures the context and response builder have the required components.
   */
  private ensureValidContext (
    context: ReactBrowserAdapterContext,
    rawResponseBuilder?: BrowserAdapterResponseBuilder
  ): void {
    if (
      context.rawEvent === undefined ||
      context.incomingEvent === undefined ||
      context.outgoingResponse === undefined ||
      rawResponseBuilder?.add === undefined
    ) {
      throw new UseReactError('The context is missing required components.')
    }
  }

  /**
   * Renders the provided React content.
   */
  private async renderComponent (content?: BrowserResponseContent): Promise<void> {
    if (isEmpty(content)) {
      throw new UseReactError('No content to render.')
    }

    if (isNotEmpty<string | URL>(content.targetUrl)) {
      return this.handleRedirect(content.targetUrl)
    }

    if (content.ssr === true && !this.isRendered && isNotEmpty(content.app)) {
      return this.hydrateReactApp(content.app)
    }

    if ((!this.isRendered || content.fullRender === true) && isNotEmpty(content.app)) {
      return this.renderReactApp(content.app)
    }

    if (isNotEmpty(content.component)) {
      return await this.dispatchComponentToOutlet(content.component)
    }

    throw new UseReactError('Invalid content provided for rendering.')
  }

  /**
   * Handles navigation redirection.
   */
  private handleRedirect (targetUrl: string | URL): void {
    window.history.pushState({ path: targetUrl }, '', targetUrl)
    window.dispatchEvent(new Event(NAVIGATION_EVENT))
  }

  /**
   * Hydrates the React app when SSR is enabled.
   */
  private hydrateReactApp (app: ReactNode): void {
    this.reactRoot = hydrateRoot(getAppRootElement(this.blueprint), app)
    this.blueprint.set('stone.useReact.reactRoot', this.reactRoot)
  }

  /**
   * Renders the React app.
   */
  private renderReactApp (app: ReactNode): void {
    this.reactRoot ??= createRoot(getAppRootElement(this.blueprint))
    this.reactRoot.render(app)
    this.blueprint.set('stone.useReact.reactRoot', this.reactRoot)
  }

  /**
   * Dispatches a component to the layout outlet when no layout is defined.
   */
  private async dispatchComponentToOutlet (component: ReactNode): Promise<void> {
    window.dispatchEvent(new CustomEvent(STONE_PAGE_EVENT_OUTLET, { detail: component }))
  }
}

/**
 * Meta Middleware for processing browser responses.
 */
export const MetaBrowserResponseMiddleware = classMiddleware(BrowserResponseMiddleware)
