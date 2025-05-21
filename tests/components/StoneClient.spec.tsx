// import { describe, it, expect, vi } from 'vitest'
// import * as Utils from '../../src/BlueprintUtils'
// import { render, screen } from '@testing-library/react'
// import { StoneClient } from '../../src/components/StoneClient'

// describe('StoneClient', () => {
//   it('should render children when isClient returns true', () => {
//     // Mock isClient to return true
//     vi.spyOn(Utils, 'isClient').mockReturnValue(true)

//     render(
//       <StoneClient>
//         <span data-testid='client-content'>Client Only</span>
//       </StoneClient>
//     )

//     expect(screen.getByTestId('client-content')).toBeInTheDocument()
//   })

//   it('should render nothing when isClient returns false', () => {
//     // Mock isClient to return false
//     vi.spyOn(Utils, 'isClient').mockReturnValue(false)

//     const { container } = render(
//       <StoneClient>
//         <span data-testid='client-content'>Client Only</span>
//       </StoneClient>
//     )

//     // Should render an empty fragment
//     expect(container).toBeEmptyDOMElement()
//   })
// })
