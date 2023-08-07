import React from 'react'
import { render } from '@testing-library/react'
import { InPageNavigation } from './InPageNavigation'

describe('InPageNavigation component', () => {
  it('renders without errors', () => {
    const { queryByTestId } = render(<InPageNavigation />)
    expect(queryByTestId('InPageNavigation')).toBeInTheDocument()
  })
})
