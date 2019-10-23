import React from 'react'
import { render } from '@testing-library/react'

import { Alert } from './Alert'

describe('Alert component', () => {
  it('renders without errors', () => {
    const { queryByTestId } = render(<Alert />)
    expect(queryByTestId('alert')).toBeInTheDocument()
  })

  describe('with a CTA', () => {
    const testCTA = <button type="button">Click Here</button>
    const { queryByText } = render(<Alert cta={testCTA} />)
    expect(queryByText('Click Here')).toBeInTheDocument()
  })
})
