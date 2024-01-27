import React from 'react'
import { render, screen } from '@testing-library/react'

import TooltipBody from './TooltipBody'

describe('Tooltip component', () => {
  beforeEach(jest.clearAllMocks)

  it('hides tooltip body by default', () => {
    render(<TooltipBody>My Tooltip</TooltipBody>)

    const bodyEl = screen.queryByRole('tooltip', { hidden: true })
    expect(bodyEl).not.toHaveClass('is-visible')
    expect(bodyEl).not.toHaveClass('is-set')
    expect(bodyEl).not.toHaveClass('usa-tooltip__body--wrap')

    // Can't test this because USWDS CSS is not present in the render environment
    // expect(bodyEl).not.toBeVisible()

    expect(bodyEl).toHaveAttribute('aria-hidden', 'true')
  })

  it('applies custom classes to the element', () => {
    const { getByTestId } = render(
      <TooltipBody className="customWrapperClass">My Tooltip</TooltipBody>
    )

    expect(getByTestId('tooltipBody')).toHaveClass('customWrapperClass')
  })

  describe('with a position prop', () => {
    it('applies the correct tooltip position when position prop is defined', () => {
      const { getByTestId } = render(
        <TooltipBody position="bottom">My Tooltip</TooltipBody>
      )

      expect(getByTestId('tooltipBody')).toHaveClass(
        `usa-tooltip__body--bottom`
      )
    })
  })

  describe('with a isVisible prop', () => {
    it('applies is-set class', () => {
      const { getByTestId } = render(
        <TooltipBody isVisible>My Tooltip</TooltipBody>
      )

      expect(getByTestId('tooltipBody')).toHaveClass(`is-set`)
    })
    it('applies visibility', () => {
      const { getByTestId } = render(
        <TooltipBody isVisible>My Tooltip</TooltipBody>
      )

      expect(getByTestId('tooltipBody')).toBeVisible()
    })
  })

  describe('with a isShown prop', () => {
    it('applies the is-visible class', () => {
      const { getByTestId } = render(
        <TooltipBody isShown>My Tooltip</TooltipBody>
      )

      expect(getByTestId('tooltipBody')).toHaveClass(`is-visible`)
    })
  })
})
