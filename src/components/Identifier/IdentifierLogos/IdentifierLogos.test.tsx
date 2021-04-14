import React from 'react'

import { render } from '@testing-library/react'

import { IdentifierLogos } from './IdentifierLogos'

describe('IdentifierLogos component', () => {
  it('renders without errors', () => {
    const { queryByText } = render(<IdentifierLogos />)

    expect(queryByText('logos text')).toBeInTheDocument()
  })
})
