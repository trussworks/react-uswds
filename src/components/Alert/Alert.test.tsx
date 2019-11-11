import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import { Alert } from './Alert'

describe('Alert component', () => {
  it('renders without errors', () => {
    const { queryByTestId } = render(<Alert type="success" />)
    expect(queryByTestId('alert')).toBeInTheDocument()
  })

  describe('with a CTA', () => {
    it('renders the CTA', () => {
      const testCTA = <button type="button">Click Here</button>
      const { queryByText } = render(<Alert type="success" cta={testCTA} />)
      expect(queryByText('Click Here')).toBeInTheDocument()
    })
  })
})
