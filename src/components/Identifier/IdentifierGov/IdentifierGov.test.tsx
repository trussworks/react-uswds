import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import { IdentifierGov } from './IdentifierGov'

describe('IdentifierGov component', () => {
  it('renders a div with text', () => {
    const { queryByTestId } = render(<IdentifierGov />)
    expect(queryByTestId('identifiergov')).toBeInTheDocument()
  })
})
