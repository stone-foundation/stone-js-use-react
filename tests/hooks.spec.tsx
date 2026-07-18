import React from 'react'
import { renderHook } from '@testing-library/react'
import { StoneContext } from '../src/StoneContext'
import { StoneContextType } from '../src/declarations'
import {
  useHead,
  useData,
  useStone,
  useEvent,
  useConfig,
  useRouter,
  useService,
  useRuntime,
  useBlueprint,
  useContainer,
  useEventEmitter
} from '../src/hooks'

const makeContext = (): { context: StoneContextType, services: Record<string, any> } => {
  const services: Record<string, any> = {
    blueprint: { get: vi.fn() },
    config: { get: vi.fn() },
    router: { navigate: vi.fn() },
    reactRuntime: { head: vi.fn() },
    eventEmitter: { emit: vi.fn(), on: vi.fn() }
  }
  const container: any = {
    make: vi.fn((key: string) => services[key])
  }
  const context: StoneContextType = {
    container,
    event: { fingerprint: () => 'fp' } as any,
    data: { user: 'John' }
  }
  return { context, services }
}

const wrapperFor = (context: StoneContextType) => ({ children }: { children: React.ReactNode }) =>
  <StoneContext.Provider value={context}>{children}</StoneContext.Provider>

describe('React hooks', () => {
  it('useStone returns the full context', () => {
    const { context } = makeContext()
    const { result } = renderHook(() => useStone(), { wrapper: wrapperFor(context) })
    expect(result.current).toBe(context)
  })

  it('useStone throws outside a Stone tree', () => {
    expect(() => renderHook(() => useStone())).toThrow(/no Stone context found/)
  })

  it('useContainer returns the container', () => {
    const { context } = makeContext()
    const { result } = renderHook(() => useContainer(), { wrapper: wrapperFor(context) })
    expect(result.current).toBe(context.container)
  })

  it('useEvent returns the event', () => {
    const { context } = makeContext()
    const { result } = renderHook(() => useEvent(), { wrapper: wrapperFor(context) })
    expect(result.current).toBe(context.event)
  })

  it('useData returns the page data', () => {
    const { context } = makeContext()
    const { result } = renderHook(() => useData<{ user: string }>(), { wrapper: wrapperFor(context) })
    expect(result.current).toEqual({ user: 'John' })
  })

  it('useService resolves by key', () => {
    const { context, services } = makeContext()
    const { result } = renderHook(() => useService('router'), { wrapper: wrapperFor(context) })
    expect(result.current).toBe(services.router)
  })

  it('useBlueprint / useConfig / useRouter / useRuntime / useEventEmitter resolve their aliases', () => {
    const { context, services } = makeContext()
    const w = wrapperFor(context)
    expect(renderHook(() => useBlueprint(), { wrapper: w }).result.current).toBe(services.blueprint)
    expect(renderHook(() => useConfig(), { wrapper: w }).result.current).toBe(services.config)
    expect(renderHook(() => useRouter(), { wrapper: w }).result.current).toBe(services.router)
    expect(renderHook(() => useRuntime(), { wrapper: w }).result.current).toBe(services.reactRuntime)
    expect(renderHook(() => useEventEmitter(), { wrapper: w }).result.current).toBe(services.eventEmitter)
  })

  it('useHead applies the head via the runtime on the client', () => {
    const { context, services } = makeContext()
    const head = { title: 'Hello' }
    renderHook(() => useHead(head), { wrapper: wrapperFor(context) })
    expect(services.reactRuntime.head).toHaveBeenCalledWith(head)
  })
})
