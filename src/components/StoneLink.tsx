import { StoneContext } from '../StoneContext'
import { isObjectLikeModule } from '@stone-js/core'
import { NavigateOptions, Router } from '@stone-js/router'
import { FunctionComponent, MouseEvent, ReactNode, useContext } from 'react'

/**
 * Options for configuring the Stone Link component.
 */
export interface StoneLinkOptions {
  rel?: string
  href?: string
  target?: string
  noRel?: boolean
  external?: boolean
  className?: string
  children: ReactNode
  defaultNav?: boolean
  to: string | NavigateOptions
  ariaCurrentValue?: 'time' | 'location' | 'page' | 'step' | 'date' | 'true' | 'false'
}

/**
 * A navigation component that renders either an `<a>` or `<button>` element
 * based on whether the link is external or internal.
 *
 * - External links render an `<a>` tag with `href`, `rel`, `target`, and `aria-current` attributes.
 * - Internal links render a `<button>` that uses the Stone.js router for navigation.
 *
 * This component integrates with the `@stone-js/router` for internal navigation
 * and respects accessibility attributes.
 *
 * @param options - The options to create the Stone Link.
 * @returns The Stone Link component.
 */
export const StoneLink: FunctionComponent<StoneLinkOptions> = ({
  to,
  href,
  noRel,
  target,
  external,
  children,
  className,
  defaultNav,
  ariaCurrentValue = 'page',
  rel = 'noopener noreferrer'
}) => {
  if (external === true) {
    return (
      <a
        target={target}
        className={className}
        aria-current={ariaCurrentValue}
        rel={noRel === true ? undefined : rel}
        href={typeof to === 'string' ? to : href}
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
    const path = isObjectLikeModule<NavigateOptions>(to) ? router.generate(to) : (to ?? href)

    return defaultNav === true
      ? (
        <a
          href={path}
          className={className}
          aria-current={ariaCurrentValue}
          rel={noRel === true ? undefined : rel}
        >
          {children}
        </a>
        )
      : (
        <button
          className={className}
          onClick={handleClick}
          aria-current={ariaCurrentValue}
          rel={noRel === true ? undefined : rel}
        >
          {children}
        </button>
        )
  }
}
