import { ReactOutgoingResponse } from './declarations'
import { ReactBrowserResponse, ReactBrowserResponseOptions } from './ReactBrowserResponse'
import { ReactHttpResponseOptions, ReactHttpResponse as ReactHttpResponseType } from './server/ReactHttpResponse'

/**
 * Create a React response.
 *
 * @param options - The options for creating the response.
 * @returns The React response.
 */
export const reactResponse = async (options: ReactHttpResponseOptions | ReactBrowserResponseOptions): Promise<ReactOutgoingResponse> => {
  return import.meta.env.SSR
    ? (await import('./server/ReactHttpResponse').then(m => m.ReactHttpResponse)).create<ReactHttpResponseType>(options)
    : ReactBrowserResponse.create<ReactBrowserResponse>(options)
}
