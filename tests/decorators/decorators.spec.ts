import { GET } from '@stone-js/router'
import { Page } from '../../src/decorators/Page'
import { Hook } from '../../src/decorators/Hook'
import { ReactRuntime } from '../../src/ReactRuntime'
import { UseReact } from '../../src/decorators/UseReact'
import { Snapshot } from '../../src/decorators/Snapshot'
import { ErrorPage } from '../../src/decorators/ErrorPage'
import { PageLayout } from '../../src/decorators/PageLayout'
import { PageStatus } from '../../src/decorators/PageStatus'
import { AdapterErrorPage } from '../../src/decorators/AdapterErrorPage'
import { setMetadata, addBlueprint, addMetadata, LIFECYCLE_HOOK_KEY } from '@stone-js/core'
import { STONE_REACT_APP_KEY, REACT_PAGE_KEY, REACT_ADAPTER_ERROR_PAGE_KEY, REACT_ERROR_PAGE_KEY, REACT_PAGE_LAYOUT_KEY } from '../../src/decorators/constants'

/* eslint-disable @typescript-eslint/no-extraneous-class */

// Mocks
vi.mock('@stone-js/core', async (importOriginal) => {
  const actual: any = await importOriginal()
  return {
    ...actual,
    addMetadata: vi.fn(() => {}),
    setMetadata: vi.fn(() => {}),
    addBlueprint: vi.fn(() => {}),
    classDecoratorLegacyWrapper: (fn: Function) => {
      fn(class {}, { kind: 'class' })
      return fn
    }
  }
})

describe('UseReact', () => {
  it('should call setMetadata and addBlueprint with provided options', () => {
    const options: any = { foo: 'bar' }
    UseReact(options)(class {})

    expect(setMetadata).toHaveBeenCalledWith(
      expect.any(Object),
      STONE_REACT_APP_KEY,
      { isComponent: true, isClass: true }
    )

    expect(addBlueprint).toHaveBeenCalledWith(
      expect.any(Function),
      expect.any(Object),
      expect.anything(),
      { stone: { useReact: options } }
    )
  })

  it('should use empty options if none are passed', () => {
    UseReact()(class {})

    expect(addBlueprint).toHaveBeenCalledWith(
      expect.anything(),
      expect.anything(),
      expect.anything(),
      { stone: { useReact: {} } }
    )
  })
})

describe('Page', () => {
  it('should call setMetadata with default layout and method GET', () => {
    Page('/dashboard')(class {})

    expect(setMetadata).toHaveBeenCalledWith(
      expect.objectContaining({ kind: 'class' }),
      REACT_PAGE_KEY,
      expect.objectContaining({
        path: '/dashboard',
        method: GET,
        methods: [],
        handler: {
          module: expect.any(Function),
          isComponent: true,
          isClass: true,
          layout: undefined
        }
      })
    )
  })

  it('should respect layout passed in options', () => {
    Page('/login', { layout: 'auth' })(class {})

    expect(setMetadata).toHaveBeenCalledWith(
      expect.anything(),
      REACT_PAGE_KEY,
      expect.objectContaining({
        path: '/login',
        layout: 'auth',
        handler: expect.objectContaining({
          layout: 'auth'
        })
      })
    )
  })
})

describe('Snapshot decorator', () => {
  it('should call snapshot on ReactRuntime', async () => {
    const spy = vi.fn()
    ReactRuntime.instance = {
      snapshot: spy
    } as any

    const decorated = Snapshot('test.snapshot')(async function () {
      return 'data'
    }, { kind: 'method', name: 'testMethod' } as any, {}) as any

    await decorated.call({})
    expect(spy).toHaveBeenCalledWith('test.snapshot', expect.any(Function))
  })

  it('should infer name if not provided', async () => {
    const spy = vi.fn()
    class Example {}
    ReactRuntime.instance = {
      snapshot: spy
    } as any

    const decorated = Snapshot()(async function () {
      return 'data'
    }, { kind: 'method', name: 'show' } as any, {}) as any

    await decorated.call(new Example())
    expect(spy).toHaveBeenCalledWith('Example.show', expect.any(Function))
  })
})

describe('PageStatus decorator', () => {
  it('should wrap method and return content + statusCode + headers', async () => {
    const decorated = PageStatus(201, { 'X-Test': 'yes' })(async function () {
      return 'data'
    }, { kind: 'method', name: 'show' } as any, {}) as any

    const result = await decorated()
    expect(result).toEqual({ content: 'data', statusCode: 201, headers: { 'X-Test': 'yes' } })
  })

  it('should default to 200 and empty headers', async () => {
    const decorated = PageStatus()(async function () {
      return 'ok'
    }, { kind: 'method', name: 'show' } as any, {}) as any

    const result = await decorated()
    expect(result).toEqual({ content: 'ok', statusCode: 200, headers: {} })
  })
})

describe('Hook decorator', () => {
  it('should call addMetadata with lifecycle key and method name', () => {
    const ctx = { kind: 'method', name: 'onPreparingPage' } as any
    Hook('onPreparingPage')(() => {}, ctx, {})
    expect(addMetadata).toHaveBeenCalledWith(ctx, LIFECYCLE_HOOK_KEY, {
      name: 'onPreparingPage',
      method: 'onPreparingPage'
    })
  })
})

describe('PageLayout decorator', () => {
  it('should call setMetadata with layout options', () => {
    const opts = { name: 'MainLayout' }
    PageLayout(opts)(class {})
    expect(setMetadata).toHaveBeenCalledWith(
      expect.any(Object),
      REACT_PAGE_LAYOUT_KEY,
      { ...opts, isClass: true }
    )
  })
})

describe('ErrorPage decorator', () => {
  it('should call setMetadata with error page options', () => {
    const opts = { error: 'MyError' }
    ErrorPage(opts)(class {})
    expect(setMetadata).toHaveBeenCalledWith(
      expect.any(Object),
      REACT_ERROR_PAGE_KEY,
      { ...opts, isClass: true }
    )
  })
})

describe('AdapterErrorPage decorator', () => {
  it('should call setMetadata with adapter error page options', () => {
    const opts = { error: 'MyAdapterError' }
    AdapterErrorPage(opts)(class {})
    expect(setMetadata).toHaveBeenCalledWith(
      expect.any(Object),
      REACT_ADAPTER_ERROR_PAGE_KEY,
      { ...opts, isClass: true }
    )
  })
})
