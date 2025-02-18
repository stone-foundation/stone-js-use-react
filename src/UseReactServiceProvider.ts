import { Config } from '@stone-js/config'
import { STONE_SNAPSHOT } from './constants'
import { NAVIGATION_EVENT } from '@stone-js/router'
import { IContainer, IServiceProvider } from '@stone-js/core'
import { ReactIncomingEvent, ReactOutgoingResponse } from './declarations'

/**
 * Class representing a UseReactServiceProvider.
 *
 * @author Mr. Stone <evensstone@gmail.com>
 */
export class UseReactServiceProvider implements IServiceProvider<ReactIncomingEvent, ReactOutgoingResponse> {
  /**
   * Create a new UseReactServiceProvider.
   */
  constructor (private readonly container: IContainer) {}

  /**
   * Determine if the application is running on the server side.
   *
   * @returns True if the application is running on the server side, false otherwise.
   */
  isSSR (): boolean {
    return import.meta.env.SSR || typeof window === 'undefined'
  }

  /**
   * Hook that runs once after the context is created.
   *
   * The browser adapter only execute onStart and onPrepare hooks when first loaded.
   * As Stone.js is an event-driven framework, we need to dispatch an event to continue with the flow.
   */
  onPrepare (): void {
    this.registerSnapshot()
    !this.isSSR() && window.dispatchEvent(new Event(NAVIGATION_EVENT))
  }

  /**
   * Register the snapshot.
   *
   * We save the snapshot on server side rendering and
   * we use it to hydrate the application on the client side.
  */
  private registerSnapshot (): void {
    const textContent = this.isSSR()
      ? '{}'
      : (window.document.getElementById(STONE_SNAPSHOT)?.textContent ?? '{}')
    this.container.singletonIf('snapshot', () => Config.fromJson(textContent))
  }
}
