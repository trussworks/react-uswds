import React from 'react'
import { render } from '@testing-library/react'

import { IdentifierGov } from './IdentifierGov'

describe('IdentifierGov component', () => {
  it('renders without errors', () => {
    const { queryByTestId } = render(<IdentifierGov />)
    expect(queryByTestId('identifierGov')).toBeInTheDocument()
  })

  it('renders section attributes passed in through props', () => {
    const { queryByTestId } = render(
      <IdentifierGov aria-label="U.S. government information and services" />
    )
    expect(queryByTestId('identifierGov')).toHaveAttribute('aria-label')
  })
})
