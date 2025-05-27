import { preparePage } from '../src/UseReactPageRenderer'
import { IncomingBrowserEvent } from '@stone-js/browser-core'
import { resolveComponent, executeHandler, buildPageComponent, buildAppComponent, getServerContent, getBrowserContent, executeHooks, isSSR } from '../src/UseReactPageInternals'

vi.mock('../src/UseReactPageInternals', async () => {
  const actual = await vi.importActual('../src/UseReactPageInternals')
  return {
    ...actual,
    resolveComponent: vi.fn(),
    executeHandler: vi.fn(),
    executeHooks: vi.fn(),
    buildPageComponent: vi.fn(),
    buildAppComponent: vi.fn(),
    isSSR: vi.fn(),
    getServerContent: vi.fn(),
    getBrowserContent: vi.fn()
  }
})

describe('preparePage', () => {
  let response: any
  let container: any
  let event: IncomingBrowserEvent

  beforeEach(() => {
    container = { make: vi.fn() }
    event = { fingerprint: vi.fn().mockReturnValue('fp') } as any

    response = {
      statusCode: 200,
      content: {},
      setContent: vi.fn()
    }

    vi.mocked(resolveComponent).mockResolvedValue({
      render: vi.fn(),
      head: vi.fn().mockResolvedValue({ title: 'Test' })
    })

    vi.mocked(executeHandler).mockResolvedValue({ message: 'hello' })
    vi.mocked(buildPageComponent).mockResolvedValue('<Component />')
    vi.mocked(buildAppComponent).mockResolvedValue('<App />')
    vi.mocked(getServerContent).mockResolvedValue('<html>SSR</html>')
    vi.mocked(getBrowserContent).mockReturnValue({ app: '<html>SSR</html>' })
    vi.mocked(executeHooks).mockResolvedValue()
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('calls getServerContent and sets content in SSR mode', async () => {
    vi.mocked(isSSR).mockReturnValue(true)

    await preparePage(event, response, container, { ssr: true })

    expect(resolveComponent).toHaveBeenCalled()
    expect(executeHandler).toHaveBeenCalled()
    expect(executeHooks).toHaveBeenCalled()
    expect(getServerContent).toHaveBeenCalled()
    expect(response.setContent).toHaveBeenCalledWith('<html>SSR</html>')
  })

  it('calls getBrowserContent and sets content in client mode', async () => {
    vi.mocked(isSSR).mockReturnValue(false)

    await preparePage(event, response, container, { ssr: false })

    expect(getBrowserContent).toHaveBeenCalled()
    expect(response.setContent).toHaveBeenCalledWith({ app: '<html>SSR</html>' })
  })

  it('uses layout from response.content or fallback to "default"', async () => {
    response.content = {} // no layout provided

    await preparePage(event, response, container, { ssr: false })

    expect(buildAppComponent).toHaveBeenCalledWith(
      event,
      container,
      expect.anything(),
      'default', // fallback layout
      expect.anything(),
      expect.anything()
    )
  })

  it('executes head() and passes result to hooks', async () => {
    const mockHead = vi.fn().mockResolvedValue({ title: 'Hello' })

    vi.mocked(resolveComponent).mockResolvedValue({
      render: vi.fn(),
      head: mockHead
    })

    await preparePage(event, response, container, { ssr: false })

    expect(mockHead).toHaveBeenCalled()
    expect(executeHooks).toHaveBeenCalledWith(
      'onPreparingPage',
      expect.objectContaining({
        head: { title: 'Hello' },
        event,
        response,
        container
      })
    )
  })
})
