import { NODE_CONSOLE_PLATFORM } from '@stone-js/router'
import { hasMetadata, getMetadata } from '@stone-js/core'
import { SetUseReactHooksMiddleware, SetReactKernelErrorPageMiddleware, SetReactRouteDefinitionsMiddleware, SetReactPageLayoutMiddleware, SetUseReactEventHandlerMiddleware } from '../../src/middleware/BlueprintMiddleware'

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

const mockBlueprint = (): any => {
  const store: Record<string, any> = {}
  return {
    get: vi.fn((key: string, fallback: any) => store[key] ?? fallback),
    set: vi.fn((key: string, value: any) => {
      store[key] = value
    }),
    setIf: vi.fn((key: string, value: any) => {
      if (store[key] === undefined) store[key] = value
    }),
    add: vi.fn((key: string, value: any[]) => {
      if (!Array.isArray(store[key])) store[key] = []
      store[key].push(...value)
    }),
    has: vi.fn((key: string) => store[key] !== undefined)
  }
}

const runMiddleware = async (middleware: any, contextOverrides: any = {}): Promise<any> => {
  const blueprint = contextOverrides.blueprint ?? mockBlueprint()
  const modules = contextOverrides.modules ?? []
  const context = {
    modules,
    blueprint
  }
  const next = vi.fn().mockResolvedValue(blueprint)
  const result = await middleware(context, next)
  return { blueprint, context, result, next }
}

describe('BlueprintMiddleware', () => {
  it('SetUseReactHooksMiddleware adds onPreparingResponse if not an ignorePlatforms', async () => {
    const get = vi.fn()
      .mockReturnValueOnce('browser-adapter')
      .mockReturnValueOnce(['node-cli', 'node-http'])
    const { blueprint } = await runMiddleware(SetUseReactHooksMiddleware, {
      blueprint: { ...mockBlueprint(), get, add: vi.fn() }
    })
    expect(blueprint.add).toHaveBeenCalledWith('stone.lifecycleHooks.onPreparingResponse', expect.any(Array))
  })

  it('SetUseReactHooksMiddleware skips for console platform', async () => {
    const get = vi.fn()
      .mockReturnValueOnce(NODE_CONSOLE_PLATFORM)
      .mockReturnValueOnce([NODE_CONSOLE_PLATFORM, 'node-http'])
    const { blueprint } = await runMiddleware(SetUseReactHooksMiddleware, {
      blueprint: { ...mockBlueprint(), get, add: vi.fn() }
    })
    expect(blueprint.add).not.toHaveBeenCalled()
  })

  it('SetReactKernelErrorPageMiddleware sets default and named handlers from metadata', async () => {
    vi.mocked(hasMetadata).mockReturnValue(true)
    vi.mocked(getMetadata).mockReturnValue({ error: 'NotFound', layout: 'default' })
    const blueprint = mockBlueprint()

    blueprint.set('stone.useReact.errorPages', { NotFound: { module: () => {} } })

    const fakeModule = class {}
    await runMiddleware(SetReactKernelErrorPageMiddleware, {
      blueprint,
      modules: [fakeModule]
    })

    expect(blueprint.set).toHaveBeenCalledWith('stone.kernel.errorHandlers.default', expect.objectContaining({ isClass: true }))
    expect(blueprint.set).toHaveBeenCalledWith('stone.useReact.errorPages.NotFound', expect.objectContaining({ layout: 'default' }))
    expect(blueprint.set).toHaveBeenCalledWith('stone.kernel.errorHandlers.NotFound', expect.objectContaining({ isClass: true }))
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
