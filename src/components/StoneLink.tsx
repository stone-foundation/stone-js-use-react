import { StoneContext } from '../StoneContext'
import { NavigateOptions, Router } from '@stone-js/router'
import { FunctionComponent, MouseEvent, ReactNode, useContext } from 'react'

interface StonePageOptions {
  href?: string
  rel?: string
  noRel?: boolean
  target?: string
  external?: boolean
  children: ReactNode
  activeClass?: string
  exactActiveClass?: string
  to: string | NavigateOptions
  ariaCurrentValue?: 'time' | 'location' | 'page' | 'step' | 'date' | 'true' | 'false'
}

const StoneLink: FunctionComponent<StonePageOptions> = ({
  to,
  href,
  noRel,
  target,
  external,
  children,
  activeClass,
  exactActiveClass,
  ariaCurrentValue = 'page',
  rel = 'noopener noreferrer'
}) => {
  if (external === true) {
    return (
      <a
        href={typeof to === 'string' ? to : href}
        aria-current={ariaCurrentValue}
        rel={noRel === true ? undefined : rel}
        target={target}
        className={`${String(activeClass)} ${String(exactActiveClass)}`}
      >
        {children}
      </a>
    )
  } else {
    const router = useContext(StoneContext).container.resolve<Router>(Router)
    const handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
      event.preventDefault()
      router.navigate(to)
    }

    return (
      <button
        rel={noRel === true ? undefined : rel}
        aria-current={ariaCurrentValue}
        className={`${String(activeClass)} ${String(exactActiveClass)}`}
        onClick={handleClick}
      >
        {children}
      </button>
    )
  }
}

export { StoneLink }
