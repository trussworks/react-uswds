import React from 'react'
import { render } from '@testing-library/react'

import { GovBanner } from './GovBanner'

describe('GovBanner component', () => {
  it('renders without errors', () => {
    const { queryByTestId } = render(<GovBanner />)
    expect(queryByTestId('govBanner')).toBeInTheDocument()
  })
})
