import { BROWSER_PLATFORM } from '@stone-js/browser-adapter'
import { hasMetadata, getMetadata, isMatchedAdapter } from '@stone-js/core'
import { SetBrowserResponseMiddlewareMiddleware, SetReactAdapterErrorPageMiddleware } from '../../../src/browser/middleware/BlueprintMiddleware'

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
  it('SetBrowserResponseMiddlewareMiddleware adds adapter middleware if platform is browser', async () => {
    const { blueprint } = await runMiddleware(SetBrowserResponseMiddlewareMiddleware, {
      blueprint: { ...mockBlueprint(), get: () => BROWSER_PLATFORM }
    })
    expect(blueprint.add).toHaveBeenCalledWith('stone.adapter.middleware', expect.any(Array))
  })

  it('SetReactAdapterErrorPageMiddleware sets default and platform/alias matched handlers for csr', async () => {
    vi.mocked(hasMetadata).mockReturnValue(true)
    vi.mocked(isMatchedAdapter).mockReturnValue(true)
    vi.mocked(getMetadata).mockReturnValue({ error: 'default', layout: 'x', adapterAlias: 'a', platform: 'p' })
    const blueprint = mockBlueprint()

    blueprint.set('stone.useReact.adapterErrorPages', { NotFound: { module: () => {} } })

    const fakeModule = class {}
    await runMiddleware(SetReactAdapterErrorPageMiddleware, {
      blueprint,
      modules: [fakeModule]
    })

    expect(blueprint.set).toHaveBeenCalledWith('stone.adapter.errorHandlers.default', expect.objectContaining({ isClass: true }))
    expect(blueprint.set).toHaveBeenCalledWith('stone.useReact.adapterErrorPages.default', expect.objectContaining({ layout: 'x' }))
    expect(blueprint.set).toHaveBeenCalledWith('stone.adapter.errorHandlers.default', expect.objectContaining({ isClass: true }))
  })
})
