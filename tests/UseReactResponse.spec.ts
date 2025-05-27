import { isNotEmpty } from '@stone-js/core'
import { OutgoingHttpResponse, RedirectResponse } from '@stone-js/http-core'
import { reactResponse, reactRedirectResponse } from '../src/UseReactResponse'
import { OutgoingBrowserResponse, RedirectBrowserResponse } from '@stone-js/browser-core'

vi.mock('@stone-js/core', () => ({
  isNotEmpty: vi.fn()
}))
vi.mock('@stone-js/http-core', () => ({
  OutgoingHttpResponse: {
    create: vi.fn()
  },
  RedirectResponse: {
    create: vi.fn()
  }
}))
vi.mock('@stone-js/browser-core', () => ({
  OutgoingBrowserResponse: {
    create: vi.fn()
  },
  RedirectBrowserResponse: {
    create: vi.fn()
  }
}))

describe('reactResponse and reactRedirectResponse', () => {
  const setSSR = (value: boolean) => {
    import.meta.env.SSR = value
  }

  beforeEach(() => {
    vi.resetModules()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should return redirect response if options.url is present', async () => {
    setSSR(true)

    vi.mocked(isNotEmpty)
      .mockImplementationOnce(() => true) // isNotEmpty(options)
      .mockImplementationOnce(() => true) // isNotEmpty(options.url)

    const mockRedirect: any = { redirected: true }
    vi.mocked(RedirectResponse.create).mockResolvedValue(mockRedirect)

    const result = await reactResponse({ url: '/redirect' })

    expect(result).toBe(mockRedirect)
    expect(RedirectResponse.create).toHaveBeenCalledWith({ statusCode: 302, url: '/redirect' })
  })

  it('should return redirect response if options.content.redirect is present', async () => {
    setSSR(true)

    vi.mocked(isNotEmpty)
      .mockImplementationOnce(() => true) // isNotEmpty(options)
      .mockImplementationOnce(() => false) // isNotEmpty(options.url)
      .mockImplementationOnce(() => true) // isNotEmpty(options.content)
      .mockImplementationOnce(() => true) // isNotEmpty(options.content.redirect)

    const mockRedirect: any = { redirected: true }
    vi.mocked(RedirectResponse.create).mockResolvedValue(mockRedirect)

    const result = await reactResponse({ content: { redirect: '/login' } })

    expect(result).toBe(mockRedirect)
  })

  it('should return http response in SSR if not redirect', async () => {
    setSSR(true)

    vi.mocked(isNotEmpty).mockReturnValue(false)

    const mockHttp: any = { html: '<div>SSR</div>' }
    vi.mocked(OutgoingHttpResponse.create).mockResolvedValue(mockHttp)

    const result = await reactResponse({ content: '<div>SSR</div>' })

    expect(result).toBe(mockHttp)
    expect(OutgoingHttpResponse.create).toHaveBeenCalled()
  })

  it('should return browser response if not SSR and not redirect', async () => {
    setSSR(false)

    vi.mocked(isNotEmpty).mockReturnValue(false)

    const mockBrowser: any = { html: '<div>Browser</div>' }
    vi.mocked(OutgoingBrowserResponse.create).mockResolvedValue(mockBrowser)

    const result = await reactResponse({ content: '<div>Browser</div>' })

    expect(result).toBe(mockBrowser)
    expect(OutgoingBrowserResponse.create).toHaveBeenCalled()
  })

  it('reactRedirectResponse should return RedirectResponse in SSR', async () => {
    setSSR(true)

    const mockRedirect: any = { server: true }
    vi.mocked(RedirectResponse.create).mockResolvedValue(mockRedirect)

    const result = await reactRedirectResponse({ url: '/home' })

    expect(result).toBe(mockRedirect)
    expect(RedirectResponse.create).toHaveBeenCalledWith({ statusCode: 302, url: '/home' })
  })

  it('reactRedirectResponse should return RedirectBrowserResponse in browser', async () => {
    setSSR(false)

    const mockRedirect: any = { client: true }
    vi.mocked(RedirectBrowserResponse.create).mockResolvedValue(mockRedirect)

    const result = await reactRedirectResponse({ url: '/home' })

    expect(result).toBe(mockRedirect)
    expect(RedirectBrowserResponse.create).toHaveBeenCalledWith({ statusCode: 302, url: '/home' })
  })
})
