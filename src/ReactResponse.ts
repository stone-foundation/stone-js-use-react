import { isNotEmpty } from '@stone-js/core'
import { ReactOutgoingResponse } from './declarations'
import { ReactBrowserResponse, ReactBrowserResponseOptions } from './ReactBrowserResponse'
import { RedirectResponse as RedirectResponseType, RedirectResponseOptions } from '@stone-js/http-core'
import { ReactHttpResponseOptions, ReactHttpResponse as ReactHttpResponseType } from './server/ReactHttpResponse'
import { ReactRedirectBrowserResponse, ReactRedirectBrowserResponseOptions } from './ReactRedirectBrowserResponse'

/**
 * Create a React response.
 *
 * @param options - The options for creating the response.
 * @returns The React response.
 */
export const reactResponse = async (
  options:
  | ReactHttpResponseOptions
  | ReactBrowserResponseOptions
  | RedirectResponseOptions
  | ReactRedirectBrowserResponseOptions
): Promise<ReactOutgoingResponse> => {
  if (
    isNotEmpty<RedirectResponseOptions | ReactRedirectBrowserResponseOptions>(options) &&
    (
      isNotEmpty(options.url) ||
      (isNotEmpty<any>(options.content) && isNotEmpty(options.content.redirect))
    )
  ) {
    return await reactRedirectResponse(options)
  }

  return import.meta.env.SSR
    ? (await import('./server/ReactHttpResponse').then(m => m.ReactHttpResponse)).create<ReactHttpResponseType>(options)
    : ReactBrowserResponse.create<ReactBrowserResponse>(options)
}

/**
 * Create a React redirect response.
 *
 * @param options - The options for creating the response.
 * @returns The React redirect response.
 */
export const reactRedirectResponse = async (
  options: RedirectResponseOptions | ReactRedirectBrowserResponseOptions
): Promise<ReactOutgoingResponse> => {
  return import.meta.env.SSR
    ? (await import('@stone-js/http-core').then(m => m.RedirectResponse)).create<RedirectResponseType>(options)
    : ReactRedirectBrowserResponse.create<ReactRedirectBrowserResponse>(options)
}
