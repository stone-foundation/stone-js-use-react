import { isNotEmpty } from '@stone-js/core'
import { ReactOutgoingResponse } from './declarations'
import { OutgoingHttpResponse, RedirectResponseOptions, OutgoingHttpResponseOptions, RedirectResponse } from '@stone-js/http-core'
import { OutgoingBrowserResponse, OutgoingBrowserResponseOptions, RedirectBrowserResponse, RedirectBrowserResponseOptions } from '@stone-js/browser-core'

/**
 * Create an UseReact response.
 *
 * @param options - The options for creating the response.
 * @returns The React response.
 */
export const reactResponse = async (
  options:
  | OutgoingHttpResponseOptions
  | OutgoingBrowserResponseOptions
  | RedirectResponseOptions
  | RedirectBrowserResponseOptions
): Promise<ReactOutgoingResponse> => {
  if (
    isNotEmpty<RedirectResponseOptions | RedirectBrowserResponseOptions>(options) &&
    (
      isNotEmpty(options.url) ||
      (isNotEmpty<any>(options.content) && isNotEmpty(options.content.redirect))
    )
  ) {
    return await reactRedirectResponse(options)
  }

  return import.meta.env.SSR
    ? (await import('@stone-js/http-core').then(m => m.OutgoingHttpResponse)).create<OutgoingHttpResponse>(options)
    : OutgoingBrowserResponse.create(options)
}

/**
 * Create an UseReact redirect response.
 *
 * @param options - The options for creating the response.
 * @returns The React redirect response.
 */
export const reactRedirectResponse = async (
  options: RedirectResponseOptions | RedirectBrowserResponseOptions
): Promise<ReactOutgoingResponse> => {
  return import.meta.env.SSR
    ? (await import('@stone-js/http-core').then(m => m.RedirectResponse)).create<RedirectResponse>(options)
    : RedirectBrowserResponse.create(options)
}
