import React from 'react'
import { render } from '@testing-library/react'

import { Tooltip } from './Tooltip'

describe('Tooltip component', () => {
  it('renders without errors', () => {
    const { queryByTestId } = render(
      <Tooltip label="Click me">
        <button>My Tooltip</button>
      </Tooltip>
    )
    expect(queryByTestId('tooltip')).toBeInTheDocument()
    expect(queryByTestId('tooltipBody')).toBeInTheDocument()
  })

  describe('with a position prop', () => {
    it('applies the default tooltip position', () => {
      const { getByTestId } = render(
        <Tooltip label="Click me">
          <button>My Tooltip</button>
        </Tooltip>
      )
      expect(getByTestId('tooltipBody')).toHaveClass(
        `usa-tooltip__body usa-tooltip__body--top`
      )
    })

    it('applies the correct tooltip position when position prop is defined', () => {
      const { getByTestId } = render(
        <Tooltip position="bottom" label="Click me">
          <button>My Tooltip</button>
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
          <button>My Tooltip</button>
        </Tooltip>
      )
      expect(getByTestId('tooltip')).toHaveClass(`${customClass}`)
    })
  })
})
