import { StoneContext } from '../StoneContext'
import { StoneContextType } from '../declarations'
import { FunctionComponent, ReactNode, StrictMode } from 'react'

interface StonePageOptions {
  children: ReactNode
  context: StoneContextType
}

export const StonePage: FunctionComponent<StonePageOptions> = ({ context, children }) => {
  return (
    <StrictMode>
      <StoneContext.Provider value={context}>
        {children}
      </StoneContext.Provider>
    </StrictMode>
  )
}
