import React from 'react'
import { render } from '@testing-library/react'

import { IdentifierMasthead } from './IdentifierMasthead'

describe('IdentifierMasthead component', () => {
  it('renders without errors', () => {
    const { queryByTestId } = render(<IdentifierMasthead />)
    expect(queryByTestId('identifierMasthead')).toBeInTheDocument()
  })
})
