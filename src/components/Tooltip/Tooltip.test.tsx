import React from 'react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Tooltip } from './Tooltip'

describe('Tooltip component', () => {
  it('renders without errors', () => {
    const { queryByTestId } = render(
      <Tooltip label="Click me">My Tooltip</Tooltip>
    )
    expect(queryByTestId('tooltipWrapper')).toBeInTheDocument()
    expect(queryByTestId('triggerElement')).toBeInTheDocument()
    expect(queryByTestId('tooltipBody')).toBeInTheDocument()
  })

  it('hides tooltip by default', () => {
    const { getByTestId } = render(
      <Tooltip label="Click me">My Tooltip</Tooltip>
    )
    expect(getByTestId('tooltipBody')).not.toHaveClass('is-visible')
  })

  it('shows tooltip with mouse event', () => {
    const { getByTestId } = render(
      <Tooltip label="Click me">My Tooltip</Tooltip>
    )
    userEvent.hover(getByTestId('triggerElement'))
    expect(getByTestId('tooltipBody')).toHaveClass('is-visible')
  })

  describe('with a position prop', () => {
    it('applies the default tooltip position', () => {
      const { getByTestId } = render(
        <Tooltip label="Click me">My Tooltip</Tooltip>
      )
      expect(getByTestId('tooltipBody')).toHaveClass(
        `usa-tooltip__body usa-tooltip__body--top`
      )
    })

    it('applies the correct tooltip position when position prop is defined', () => {
      const { getByTestId } = render(
        <Tooltip position="bottom" label="Click me">
          My Tooltip
        </Tooltip>
      )
      expect(getByTestId('tooltipBody')).toHaveClass(
        `usa-tooltip__body usa-tooltip__body--bottom`
      )
    })
  })

  describe('with a className prop', () => {
    it('applies the className', () => {
      const customClass = 'custom-class'
      const { getByTestId } = render(
        <Tooltip className={customClass} position="left" label="Click me">
          My Tooltip
        </Tooltip>
      )
      expect(getByTestId('tooltipWrapper')).toHaveClass(`${customClass}`)
    })
  })
})
