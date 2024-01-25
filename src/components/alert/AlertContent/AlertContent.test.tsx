import React from 'react'
import { render } from '@testing-library/react'

import AlertContent from './AlertContent'

describe('Alert component', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders without errors', () => {
    const { queryByTestId } = render(<AlertContent />)
    expect(queryByTestId('alertContent')).toBeInTheDocument()
  })

  it('accepts className prop', () => {
    const { queryByTestId } = render(<AlertContent className="myClass" />)
    expect(queryByTestId('alertContent')).toHaveClass('myClass')
  })
})
