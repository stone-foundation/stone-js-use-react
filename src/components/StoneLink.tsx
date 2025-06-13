import {
  useState,
  ReactNode,
  useEffect,
  useContext,
  MouseEvent,
  FunctionComponent
} from 'react'
import { StoneContext } from '../StoneContext'
import { IRouter, IRoute } from '../declarations'
import { isObjectLikeModule } from '@stone-js/core'
import { NavigateOptions, RouteEvent, Router } from '@stone-js/router'

interface BaseProps {
  rel?: string
  href?: string
  target?: string
  noRel?: boolean
  external?: boolean
  className?: string
  children: ReactNode
  defaultNav?: boolean
  selectedClass?: string
  ariaCurrentValue?: 'time' | 'location' | 'page' | 'step' | 'date' | 'true' | 'false'
}

export type StoneLinkOptions =
  | (BaseProps & { href: string, to?: string | NavigateOptions })
  | (BaseProps & { href?: string, to: string | NavigateOptions })

/**
 * Internal link component using Stone.js router.
 */
const InternalLink: FunctionComponent<StoneLinkOptions> = ({
  to,
  href,
  noRel,
  children,
  className,
  defaultNav,
  selectedClass = 'selected',
  ariaCurrentValue = 'page',
  rel = 'noopener noreferrer'
}) => {
  const router = useContext(StoneContext).container.resolve<IRouter>(Router)
  const path = isObjectLikeModule<NavigateOptions>(to) ? router.generate(to) : to ?? href
  const [currentRoute, setCurrentRoute] = useState<IRoute | undefined>(router.getCurrentRoute())
  const selectedClassName = currentRoute?.path === path ? selectedClass : undefined
  const elemClassName = [className, selectedClassName].filter(Boolean).join(' ').trim()

  const handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault()
    router.navigate(to ?? '')
  }

  useEffect(() => {
    const routerEventHandler = (event: RouteEvent): void => {
      setCurrentRoute(event.get<IRoute>('route'))
    }

    router.on(RouteEvent.ROUTED, routerEventHandler)

    return () => {
      router.off(RouteEvent.ROUTED, routerEventHandler)
    }
  }, [router])

  return defaultNav === true
    ? (
      <a
        href={path}
        className={elemClassName}
        aria-current={ariaCurrentValue}
        rel={noRel !== undefined ? undefined : rel}
      >
        {children}
      </a>
      )
    : (
      <button
        onClick={handleClick}
        className={elemClassName}
        aria-current={ariaCurrentValue}
        rel={noRel !== undefined ? undefined : rel}
      >
        {children}
      </button>
      )
}

/**
 * External link component rendering a regular <a> tag.
 */
const ExternalLink: FunctionComponent<StoneLinkOptions> = ({
  to,
  href,
  noRel,
  target,
  children,
  className,
  ariaCurrentValue = 'page',
  rel = 'noopener noreferrer'
}) => (
  <a
    target={target}
    className={className}
    aria-current={ariaCurrentValue}
    rel={noRel !== undefined ? undefined : rel}
    href={typeof to === 'string' ? to : href}
  >
    {children}
  </a>
)

/**
 * Main StoneLink component delegating to internal or external versions.
 */
export const StoneLink: FunctionComponent<StoneLinkOptions> = (props) => {
  return props.external === true ? <ExternalLink {...props} /> : <InternalLink {...props} />
}
