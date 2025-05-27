import { NODE_CONSOLE_PLATFORM } from '@stone-js/router'
import { BROWSER_PLATFORM } from '@stone-js/browser-adapter'
import { hasMetadata, getMetadata, isMatchedAdapter } from '@stone-js/core'
import { SetUseReactHooksMiddleware, SetBrowserResponseMiddlewareMiddleware, SetReactKernelErrorPageMiddleware, SetReactAdapterErrorPageMiddleware, SetSSRStaticFileMiddleware, SetSSRCompressionMiddleware, SetReactRouteDefinitionsMiddleware, SetReactPageLayoutMiddleware, SetUseReactEventHandlerMiddleware } from '../../src/middleware/BlueprintMiddleware'

/* eslint-disable @typescript-eslint/no-extraneous-class */

// Mock core utils
vi.mock('@stone-js/core', async (mod) => ({
  ...(await mod()),
  hasMetadata: vi.fn(),
  getMetadata: vi.fn(),
  isMatchedAdapter: vi.fn()
}))

beforeEach(() => {
  vi.clearAllMocks()
})

const mockBlueprint = () => {
  const store: Record<string, any> = {}
  return {
    get: vi.fn((key: string, fallback: any) => store[key] ?? fallback),
    set: vi.fn((key: string, value: any) => {
      store[key] = value
    }),
    setIf: vi.fn((key: string, value: any) => {
      if (!store[key]) store[key] = value
    }),
    add: vi.fn((key: string, value: any[]) => {
      if (!Array.isArray(store[key])) store[key] = []
      store[key].push(...value)
    }),
    has: vi.fn((key: string) => !!store[key])
  }
}

const runMiddleware = async (middleware: any, contextOverrides: any = {}) => {
  const blueprint = mockBlueprint()
  const context = {
    modules: [],
    blueprint,
    ...contextOverrides
  }
  const next = vi.fn().mockResolvedValue(blueprint)
  const result = await middleware(context, next)
  return { blueprint, context, result, next }
}

describe('metaUseReactBlueprintMiddleware', () => {
  // it('SetUseReactHooksMiddleware adds onPreparingResponse if not console', async () => {
  //   const platform = 'node-http'
  //   const { blueprint } = await runMiddleware(SetUseReactHooksMiddleware, {
  //     blueprint: { ...mockBlueprint(), get: () => platform, add: vi.fn() }
  //   })
  //   expect(blueprint.add).toHaveBeenCalledWith('stone.lifecycleHooks.onPreparingResponse', expect.any(Array))
  // })

  it('SetUseReactHooksMiddleware skips for console platform', async () => {
    const { blueprint } = await runMiddleware(SetUseReactHooksMiddleware, {
      blueprint: { ...mockBlueprint(), get: () => NODE_CONSOLE_PLATFORM, add: vi.fn() }
    })
    expect(blueprint.add).not.toHaveBeenCalled()
  })

  // it('SetBrowserResponseMiddlewareMiddleware adds adapter middleware if platform is browser', async () => {
  //   const { blueprint } = await runMiddleware(SetBrowserResponseMiddlewareMiddleware, {
  //     blueprint: { ...mockBlueprint(), get: () => BROWSER_PLATFORM }
  //   })
  //   expect(blueprint.add).toHaveBeenCalledWith('stone.adapter.middleware', expect.any(Array))
  // })

  it('SetReactKernelErrorPageMiddleware sets default and named handlers from metadata', async () => {
    vi.mocked(hasMetadata).mockReturnValue(true)
    vi.mocked(getMetadata).mockReturnValue({ error: 'NotFound', layout: 'default' })

    const fakeModule = class {}
    const { blueprint } = await runMiddleware(SetReactKernelErrorPageMiddleware, {
      modules: [fakeModule]
    })

    expect(blueprint.set).toHaveBeenCalledWith('stone.kernel.errorHandlers.default', expect.objectContaining({ isClass: true }))
    expect(blueprint.set).toHaveBeenCalledWith('stone.useReact.errorPages.NotFound', expect.objectContaining({ layout: 'default' }))
    // expect(blueprint.set).toHaveBeenCalledWith('stone.kernel.errorHandlers.NotFound', expect.objectContaining({ isClass: true }))
  })

  it('SetReactAdapterErrorPageMiddleware sets default and platform/alias matched handlers', async () => {
    vi.mocked(hasMetadata).mockReturnValue(true)
    vi.mocked(isMatchedAdapter).mockReturnValue(true)
    vi.mocked(getMetadata).mockReturnValue({ error: 'default', layout: 'x', adapterAlias: 'a', platform: 'p' })

    const fakeModule = class {}
    const { blueprint } = await runMiddleware(SetReactAdapterErrorPageMiddleware, {
      modules: [fakeModule]
    })

    expect(blueprint.set).toHaveBeenCalledWith('stone.adapter.errorHandlers.default', expect.objectContaining({ isClass: true }))
    expect(blueprint.set).toHaveBeenCalledWith('stone.useReact.adapterErrorPages.default', expect.objectContaining({ layout: 'x' }))
    expect(blueprint.set).toHaveBeenCalledWith('stone.adapter.errorHandlers.default', expect.objectContaining({ isClass: true }))
  })

  it('SetSSRStaticFileMiddleware adds static middleware only on SSR', async () => {
    import.meta.env.SSR = true
    const { blueprint } = await runMiddleware(SetSSRStaticFileMiddleware)
    expect(blueprint.add).toHaveBeenCalledWith('stone.kernel.middleware', expect.any(Array))
  })

  it('SetSSRCompressionMiddleware adds compression middleware only on SSR', async () => {
    import.meta.env.SSR = true
    const { blueprint } = await runMiddleware(SetSSRCompressionMiddleware)
    expect(blueprint.add).toHaveBeenCalledWith('stone.kernel.middleware', expect.any(Array))
  })

  it('SetReactRouteDefinitionsMiddleware sets page route definitions', async () => {
    vi.mocked(hasMetadata).mockReturnValue(true)
    vi.mocked(getMetadata).mockReturnValue({ path: '/x', handler: {} })

    const fakeModule = class {}
    const { blueprint } = await runMiddleware(SetReactRouteDefinitionsMiddleware, {
      modules: [fakeModule]
    })

    expect(blueprint.add).toHaveBeenCalledWith('stone.router.definitions', [expect.objectContaining({
      path: '/x',
      handler: expect.objectContaining({ module: fakeModule })
    })])
  })

  it('SetReactPageLayoutMiddleware sets layout definitions from metadata', async () => {
    vi.mocked(hasMetadata).mockReturnValue(true)
    vi.mocked(getMetadata).mockReturnValue({ name: 'default' })

    const fakeModule = class {}
    const { blueprint } = await runMiddleware(SetReactPageLayoutMiddleware, {
      modules: [fakeModule]
    })

    expect(blueprint.set).toHaveBeenCalledWith('stone.useReact.layout.default', { isClass: true, module: fakeModule })
  })

  it('SetUseReactEventHandlerMiddleware sets default and event handler if present', async () => {
    vi.mocked(hasMetadata).mockReturnValue(true)

    const fakeModule = class {}
    const { blueprint } = await runMiddleware(SetUseReactEventHandlerMiddleware, {
      modules: [fakeModule]
    })

    expect(blueprint.setIf).toHaveBeenCalledWith('stone.kernel.eventHandler', expect.objectContaining({ module: expect.any(Function) }))
    expect(blueprint.set).toHaveBeenCalledWith('stone.useReact.componentEventHandler', expect.objectContaining({ module: fakeModule }))
  })
})
