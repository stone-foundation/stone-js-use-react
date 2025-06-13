import { JSX } from 'react'
import { Router } from '@stone-js/router'
import { StoneContext } from '../../src/StoneContext'
import { StoneLink } from '../../src/components/StoneLink'
import { render, fireEvent } from '@testing-library/react'

const mockNavigate = vi.fn()
const mockGenerate = vi.fn((to) => (typeof to === 'string' ? to : '/generated-path'))

const mockRouter = {
  navigate: mockNavigate,
  generate: mockGenerate,
  getCurrentRoute: () => ({ path: '/about' }),
  on: vi.fn((_, handler) => handler({ get: () => ({ path: '/about' }) })),
  off: vi.fn((_, handler) => handler({ get: () => ({ path: '/about' }) }))
} as unknown as Router

const renderWithContext = (ui: JSX.Element): any =>
  render(
    <StoneContext.Provider value={{ container: { resolve: () => mockRouter } } as any}>
      {ui}
    </StoneContext.Provider>
  )

describe('StoneLink', () => {
  it('renders an external link', () => {
    const { getByRole } = renderWithContext(
      <StoneLink href='https://example.com' external>
        External
      </StoneLink>
    )

    const link = getByRole('link')
    expect(link.textContent).toBe('External')
    expect(link.getAttribute('href')).toBe('https://example.com')
    expect(link.getAttribute('rel')).toBe('noopener noreferrer')
  })

  it('renders a defaultNav internal link as <a>', () => {
    const { getByRole } = renderWithContext(
      <StoneLink href='/about' defaultNav>
        About
      </StoneLink>
    )

    const link = getByRole('link')
    expect(link.textContent).toBe('About')
    expect(link.getAttribute('href')).toBe('/about')
  })

  it('renders a button for internal link when defaultNav is false', () => {
    const { getByRole } = renderWithContext(
      <StoneLink to='/home'>Home</StoneLink>
    )

    const button = getByRole('button')
    expect(button.textContent).toBe('Home')

    fireEvent.click(button)
    expect(mockNavigate).toHaveBeenCalledWith('/home')
  })

  it('calls router.generate when to is an object', () => {
    const routeObj = { name: 'user', params: { id: '1' } }
    const { getByRole } = renderWithContext(
      <StoneLink to={routeObj}>User</StoneLink>
    )

    const button = getByRole('button')
    expect(button.textContent).toBe('User')
    expect(mockGenerate).toHaveBeenCalledWith(routeObj)
  })

  it('respects noRel prop on button', () => {
    const { getByRole } = renderWithContext(
      <StoneLink href='https://no-rel.com' noRel>
        NoRel
      </StoneLink>
    )

    const button = getByRole('button')
    expect(button.getAttribute('rel')).toBeFalsy()
    fireEvent.click(button)
  })

  it('respects noRel prop on link', () => {
    const { getByRole } = renderWithContext(
      <StoneLink to='https://no-rel.com' defaultNav noRel>
        NoRel
      </StoneLink>
    )

    const link = getByRole('link')
    expect(link.getAttribute('rel')).toBeFalsy()
  })

  it('respects noRel prop on external link', () => {
    const { getByRole } = renderWithContext(
      <StoneLink to='https://no-rel.com' external noRel>
        NoRel
      </StoneLink>
    )

    const link = getByRole('link')
    expect(link.getAttribute('rel')).toBeFalsy()
  })
})
