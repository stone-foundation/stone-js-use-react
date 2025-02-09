import { isNotEmpty } from '@stone-js/core'
import { STONE_PAGE_EVENT_OUTLET } from '../constants'
import { ReactNode, useEffect, useState, FunctionComponent } from 'react'

interface StoneOutletOptions {
  children: ReactNode
}

const StoneOutlet: FunctionComponent<StoneOutletOptions> = ({ children }) => {
  const [currentView, setCurrentView] = useState<ReactNode>(children)

  useEffect(() => {
    const eventName = STONE_PAGE_EVENT_OUTLET
    const handleEvent = (e: Event): void => {
      if (isNotEmpty<CustomEvent>(e) && isNotEmpty<ReactNode>(e.detail)) {
        setCurrentView(e.detail)
      }
    }

    window.addEventListener(eventName, handleEvent)

    return () => window.removeEventListener(eventName, handleEvent)
  }, [])

  return <div data-stone-outlet='true'>{currentView}</div>
}

export { StoneOutlet }
