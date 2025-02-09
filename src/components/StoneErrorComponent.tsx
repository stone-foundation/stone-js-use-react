import { StoneContext } from '../StoneContext'
import { StoneContextType } from '../declarations'
import { FunctionComponent, ReactNode, StrictMode } from 'react'

interface StoneErrorComponentOptions {
  children?: ReactNode
  context: StoneContextType
}

export const StoneErrorComponent: FunctionComponent<StoneErrorComponentOptions> = ({ context, children }) => {
  return (
    <StrictMode>
      <StoneContext.Provider value={context}>
        <div data-stone-error='true'>{children ?? 'An error has occured!'}</div>
      </StoneContext.Provider>
    </StrictMode>
  )
}
