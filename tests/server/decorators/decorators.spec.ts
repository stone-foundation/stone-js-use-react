import { setMetadata, addBlueprint } from '@stone-js/core'
import { UseReact } from '../../../src/server/decorators/UseReact'
import { STONE_REACT_APP_KEY } from '../../../src/decorators/constants'
import { useReactBlueprint } from '../../../src/server/options/ServerUseReactBlueprint'

/* eslint-disable @typescript-eslint/no-extraneous-class */

// Mocks
vi.mock('@stone-js/core', async (importOriginal) => {
  const actual: any = await importOriginal()
  return {
    ...actual,
    addMetadata: vi.fn(() => {}),
    setMetadata: vi.fn(() => {}),
    addBlueprint: vi.fn(() => {}),
    classDecoratorLegacyWrapper: vi.fn((fn: Function) => {
      fn(class {}, { kind: 'class' })
      return fn
    })
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
      useReactBlueprint,
      { stone: { useReact: options } }
    )
  })

  it('should use empty options if none are passed', () => {
    UseReact()(class {})

    expect(addBlueprint).toHaveBeenCalledWith(
      expect.anything(),
      expect.anything(),
      useReactBlueprint,
      { stone: { useReact: {} } }
    )
  })
})
