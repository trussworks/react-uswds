import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import { NavButton } from './NavButton'

describe('NavButton component', () => {
  it('renders without errors', () => {
    const { getByTestId } = render(<NavButton>Menu</NavButton>)
    expect(getByTestId('navButton')).toBeInTheDocument()
  })

  it('renders children', () => {
    const { getByText } = render(<NavButton>Menu</NavButton>)
    expect(getByText('Menu')).toBeInTheDocument()
  })

  it('implements an onClick handler', () => {
    const onClickFn = jest.fn()
    const { getByText } = render(
      <NavButton onClick={onClickFn}>Menu</NavButton>
    )

    fireEvent.click(getByText('Menu'))

    expect(onClickFn).toHaveBeenCalledTimes(1)
  })

  it('accepts additional custom class names', () => {
    const { getByTestId } = render(
      <NavButton className="customClass">Menu</NavButton>
    )
    expect(getByTestId('navButton')).toHaveClass('customClass')
  })
})
