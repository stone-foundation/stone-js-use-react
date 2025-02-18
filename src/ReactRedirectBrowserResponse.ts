import { BrowserResponseContent } from './declarations'
import {
  OutgoingBrowserResponse,
  RedirectBrowserResponse,
  RedirectBrowserResponseOptions
} from '@stone-js/browser-core'

/**
 * Options for creating a React redirect browser Response.
 */
export interface ReactRedirectBrowserResponseOptions extends RedirectBrowserResponseOptions {}

/**
 * Class representing a ReactRedirectBrowserResponse.
 *
 * @author Mr. Stone <evensstone@gmail.com>
 */
export class ReactRedirectBrowserResponse extends RedirectBrowserResponse {
  static REACT_BROWSER_RESPONSE = 'stonejs@react_redirect_browser_response'

  /**
   * Create an instance of OutgoingHttpResponse.
   *
   * @param options - Options for the outgoing browser response.
   * @returns A new instance of OutgoingHttpResponse.
   */
  static create<T extends OutgoingBrowserResponse = ReactRedirectBrowserResponse>(options: ReactRedirectBrowserResponseOptions): T {
    return new ReactRedirectBrowserResponse(options) as unknown as T
  }

  /**
   * Constructor for ReactRedirectBrowserResponse.
   *
   * @param options - Options for the React browser response.
   */
  constructor (options: ReactRedirectBrowserResponseOptions) {
    super({ ...options, type: ReactRedirectBrowserResponse.REACT_BROWSER_RESPONSE })
  }

  /**
   * The content to be rendered by the React component.
   */
  get content (): BrowserResponseContent {
    return { targetUrl: this.targetUrl }
  }
}
