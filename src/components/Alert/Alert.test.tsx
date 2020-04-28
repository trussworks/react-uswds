import React from 'react'
import { render } from '@testing-library/react'

import { Alert } from './Alert'

describe('Alert component', () => {
  it('renders without errors', () => {
    const { queryByTestId } = render(<Alert type="success" />)
    expect(queryByTestId('alert')).toBeInTheDocument()
  })

  it('accepts className prop', () => {
    const { queryByTestId } = render(
      <Alert type="success" className="myClass" />
    )
    expect(queryByTestId('alert')).toHaveClass('myClass')
  })

  describe('with a CTA', () => {
    it('renders the CTA', () => {
      const testCTA = <button type="button">Click Here</button>
      const { queryByText } = render(<Alert type="success" cta={testCTA} />)
      expect(queryByText('Click Here')).toBeInTheDocument()
    })
  })
})
