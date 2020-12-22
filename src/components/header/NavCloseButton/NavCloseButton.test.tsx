import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import { NavCloseButton } from './NavCloseButton'

describe('NavCloseButton component', () => {
  it('renders without errors', () => {
    const { getByTestId } = render(<NavCloseButton />)
    expect(getByTestId('navCloseButton')).toBeInTheDocument()
  })

  it('renders custom styles', () => {
    const { getByTestId } = render(<NavCloseButton className="custom-class" />)
    expect(getByTestId('navCloseButton')).toHaveClass('custom-class')
  })

  it('implements an onClick handler', () => {
    const onClickFn = jest.fn()
    const { getByTestId } = render(<NavCloseButton onClick={onClickFn} />)

    fireEvent.click(getByTestId('navCloseButton'))

    expect(onClickFn).toHaveBeenCalledTimes(1)
  })
})
