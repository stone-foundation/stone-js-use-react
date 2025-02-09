import { IServiceProvider } from '@stone-js/core'
import { ReactIncomingEvent, ReactOutgoingResponse } from './declarations'

/**
 * Class representing a UseReactServiceProvider.
 *
 * @author Mr. Stone <evensstone@gmail.com>
 */
export class UseReactServiceProvider implements IServiceProvider<ReactIncomingEvent, ReactOutgoingResponse> {
  /**
   * Determines if the provider should be skipped.
   *
   * @returns True if the provider should be skipped, false otherwise
   * @remarks This method is used to skip the provider during SSR.
   */
  mustSkip (): boolean {
    return import.meta.env.SSR || typeof window === 'undefined'
  }

  /**
   * Hook that runs once after the context is created.
   *
   * The browser adapter only execute onInit and onPrepare hooks we first loaded.
   * As Stone.js is an event-driven framework, we need to dispatch an event to continue with the flow.
   */
  async onPrepare (): Promise<void> {
    window.dispatchEvent(new Event('@stonejs/router.navigate'))
  }
}
