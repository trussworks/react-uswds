import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import { NavDropDownButton } from './NavDropDownButton'

const testLabel = 'Nav Label'

describe('NavDropDownButton component', () => {
  it('renders without errors', () => {
    const onToggle = (): void => {
      /* mock toggle fn */
    }
    const { getByTestId } = render(
      <NavDropDownButton
        label={testLabel}
        menuId="testOne"
        isOpen={true}
        onToggle={onToggle}
      />
    )
    expect(getByTestId('navDropDownButton')).toBeInTheDocument()
  })

  it('implements an onClick handler', () => {
    const onClickFn = jest.fn()
    const { getByText } = render(
      <NavDropDownButton
        label={testLabel}
        menuId="testOne"
        isOpen={true}
        onToggle={onClickFn}
      />
    )

    fireEvent.click(getByText(testLabel))
    expect(onClickFn).toHaveBeenCalledTimes(1)
  })

  it('renders when isOpen is set to false', () => {
    const onClickFn = jest.fn()
    const { getByTestId } = render(
      <NavDropDownButton
        label={testLabel}
        menuId="testOne"
        isOpen={false}
        onToggle={onClickFn}
      />
    )
    expect(getByTestId('navDropDownButton')).toHaveAttribute(
      'aria-expanded',
      expect.stringContaining('false')
    )
  })

  it('renders the usa-current class when isCurrent is true', () => {
    const onClickFn = jest.fn()
    const { getByTestId } = render(
      <NavDropDownButton
        label={testLabel}
        menuId="testOne"
        isOpen={false}
        onToggle={onClickFn}
        isCurrent={true}
      />
    )
    expect(getByTestId('navDropDownButton')).toHaveClass('usa-current')
  })
})
