import { ReactNode } from 'react'
import { getAppRootElement } from '../utils'
import { NextPipe } from '@stone-js/pipeline'
import { STONE_PAGE_EVENT_OUTLET } from '../constants'
import { UseReactError } from '../errors/UseReactError'
import { classMiddleware, IBlueprint, isNotEmpty } from '@stone-js/core'
import { BrowserAdapterResponseBuilder } from '@stone-js/browser-adapter'
import { createRoot, hydrateRoot, Root as ReactRootInstance } from 'react-dom/client'
import { BrowserResponseContent, ReactBrowserAdapterContext } from '../declarations'

/**
 * Middleware for handling outgoing responses and transforming them into the appropriate browser responses.
 *
 * This middleware processes outgoing responses to be rendered in the browser.
 */
export class BrowserResponseMiddleware {
  /**
   * The blueprint for resolving configuration and dependencies.
   */
  private readonly blueprint: IBlueprint

  /**
   * The React root instance.
   */
  private readonly isRendered: boolean

  /**
   * The React root instance.
   */
  private reactRoot?: ReactRootInstance

  /**
   * Create a BrowserResponseMiddleware.
   *
   * @param {blueprint} options - Options for creating the BrowserResponseMiddleware.
   */
  constructor ({ blueprint }: { blueprint: IBlueprint }) {
    this.blueprint = blueprint
    this.reactRoot = blueprint.get('stone.useReact.reactRoot')
    this.isRendered = blueprint.has('stone.useReact.reactRoot')
  }

  /**
   * Handles the outgoing response, processes it, and invokes the next middleware in the pipeline.
   *
   * @param context - The adapter context containing the raw event, execution context, and other data.
   * @param next - The next middleware to be invoked in the pipeline.
   * @returns A promise resolving to the processed context.
   * @throws {NodeHttpAdapterError} If required components are missing in the context.
   */
  async handle (context: ReactBrowserAdapterContext, next: NextPipe<ReactBrowserAdapterContext, BrowserAdapterResponseBuilder>): Promise<BrowserAdapterResponseBuilder> {
    const rawResponseBuilder = await next(context)

    if (context.rawEvent === undefined || context.incomingEvent === undefined || context.outgoingResponse === undefined || rawResponseBuilder?.add === undefined) {
      throw new UseReactError('The context is missing required components.')
    }

    rawResponseBuilder
      .add(
        'render',
        async () => await this.renderComponent(context.outgoingResponse?.content)
      )

    return rawResponseBuilder
  }

  /**
   * Renders the React component.
   *
   * @param content - The response content to render.
   * @throws {UseReactError} If the root container is not found.
   */
  private async renderComponent (content?: BrowserResponseContent): Promise<void> {
    if (content?.ssr === true && isNotEmpty<BrowserResponseContent>(content?.app)) {
      this.reactRoot = hydrateRoot(getAppRootElement(this.blueprint), content.app)
    } else if ((!this.isRendered || content?.fullRender === true) && isNotEmpty<BrowserResponseContent>(content?.app)) {
      this.reactRoot ??= createRoot(getAppRootElement(this.blueprint))
      this.reactRoot.render(content.app)
    } else if (isNotEmpty<BrowserResponseContent>(content?.component)) {
      await this.dispatchComponentToOutlet(content.component)
    } else {
      throw new UseReactError('No content to render.')
    }

    !this.isRendered && this.blueprint.set('stone.useReact.reactRoot', this.reactRoot)
  }

  /**
   * When no layout is defined in the response,
   * we dispatch the component to the layout outlet.
   */
  private async dispatchComponentToOutlet (component: ReactNode): Promise<void> {
    window.dispatchEvent(new CustomEvent(STONE_PAGE_EVENT_OUTLET, { detail: component }))
  }
}

/**
 * Meta Middleware for processing browser responses.
 */
export const MetaBrowserResponseMiddleware = classMiddleware(BrowserResponseMiddleware)
