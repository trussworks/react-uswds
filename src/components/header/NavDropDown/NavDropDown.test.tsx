import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import { NavDropDown } from './NavDropDown'

const testLabel = 'Nav Label'

describe('NavDropDown component', () => {
  it('renders without errors', () => {
    const onToggle = (): void => {
      /* mock toggle fn */
    }
    const { container } = render(
      <NavDropDown
        label={testLabel}
        id="testOne"
        isOpen={true}
        onToggle={onToggle}
      />
    )
    expect(container.querySelector('.usa-nav__link')).toBeInTheDocument()
  })

  it('implements an onClick handler', () => {
    const onClickFn = jest.fn()
    const { getByText } = render(
      <NavDropDown
        label={testLabel}
        id="testOne"
        isOpen={true}
        onToggle={onClickFn}
      />
    )

    fireEvent.click(getByText(testLabel))
    expect(onClickFn).toHaveBeenCalledTimes(1)
  })
})
