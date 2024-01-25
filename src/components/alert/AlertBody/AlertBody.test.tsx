import React from 'react'
import { render } from '@testing-library/react'

import AlertBody from './AlertBody'

describe('AlertBody component', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders without errors', () => {
    const { queryByTestId } = render(<AlertBody />)
    expect(queryByTestId('alertBody')).toBeInTheDocument()
  })

  it('accepts className prop', () => {
    const { queryByTestId } = render(
      <AlertBody className="myClass" />
    )
    expect(queryByTestId('alertBody')).toHaveClass('myClass')
  })
})
