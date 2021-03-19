import React from 'react'
import { render } from '@testing-library/react'

import { IdentifierMasthead } from './IdentifierMasthead'

describe('IdentifierMasthead component', () => {
  it('renders without errors', () => {
    const { queryByTestId } = render(<IdentifierMasthead />)
    expect(queryByTestId('identifierMasthead')).toBeInTheDocument()
  })
  it('renders section attributes passed in by props', () => {
    const { queryByTestId } = render(
      <IdentifierMasthead aria-label="Agency identifier" />
    )
    expect(queryByTestId('identifierMasthead')).toHaveAttribute('aria-label')
  })
})
