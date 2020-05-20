import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import { NavMenuButton } from './NavMenuButton'

const label = 'Menu'

describe('NavMenuButton component', () => {
  it('renders without errors', () => {
    const { getByTestId } = render(<NavMenuButton label={label} />)
    expect(getByTestId('navMenuButton')).toBeInTheDocument()
  })

  it('implements an onClick handler', () => {
    const onClickFn = jest.fn()
    const { getByText } = render(
      <NavMenuButton label={label} onClick={onClickFn} />
    )

    fireEvent.click(getByText('Menu'))

    expect(onClickFn).toHaveBeenCalledTimes(1)
  })

  it('renders the correct class names', () => {
    const { getByTestId } = render(<NavMenuButton label={label} />)
    expect(getByTestId('navMenuButton')).toHaveClass('usa-menu-btn')
  })
})
