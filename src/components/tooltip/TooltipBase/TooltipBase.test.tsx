import React from 'react'
import { render, screen } from '@testing-library/react'

import TooltipBase from './TooltipBase'

describe('Tooltip component', () => {
  beforeEach(jest.clearAllMocks)

  it('renders without errors', () => {
    render(<TooltipBase>My Tooltip</TooltipBase>)

    const wrapperEl = screen.queryByTestId('tooltipWrapper')
    expect(wrapperEl).toBeInTheDocument()
    expect(wrapperEl).toHaveClass('usa-tooltip')
  })

  it('applies custom classes to the wrapper element', () => {
    render(<TooltipBase className="customWrapperClass">My Tooltip</TooltipBase>)

    expect(screen.queryByTestId('tooltipWrapper')).toHaveClass(
      'customWrapperClass'
    )
  })
})
