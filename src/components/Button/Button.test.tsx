import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import { Button } from './Button'

describe('Button component', () => {
  it('renders without errors', () => {
    const { queryByTestId } = render(<Button type="button">Click Me</Button>)
    expect(queryByTestId('button')).toBeInTheDocument()
  })

  describe('renders uswds classes', () => {
    it('usa-button', () => {
      const { queryByTestId } = render(<Button type="button">Click Me</Button>)
      expect(queryByTestId('button')).toHaveClass('usa-button')
    })

    const optionalClasses = [
      ['secondary', 'usa-button--secondary'],
      ['base', 'usa-button--base'],
      ['accent', 'usa-button--accent-cool'],
      ['outline', 'usa-button--outline'],
      ['inverse', 'usa-button--inverse'],
      ['big', 'usa-button--big'],
      ['small', 'usa-button--small'],
      ['icon', 'usa-button--icon'],
      ['unstyled', 'usa-button--unstyled'],
    ]

    optionalClasses.map((data) => {
      it(`${data[1]}`, () => {
        const additionalProps: { [key: string]: boolean } = {}
        additionalProps[data[0]] = true

        const { queryByTestId } = render(
          <Button type="button" {...additionalProps}>
            Click Me
          </Button>
        )
        expect(queryByTestId('button')).toHaveClass(data[1])
      })
    })

    it('renders uswds class for size small', () => {
      const { queryByTestId } = render(
        <Button type="button" size="small">
          Click Me
        </Button>
      )
      expect(queryByTestId('button')).toHaveClass('usa-button--small')
      expect(queryByTestId('button')).not.toHaveClass('usa-button--big')
    })

    it('renders uswds class for size big', () => {
      const { queryByTestId } = render(
        <Button type="button" size="big">
          Click Me
        </Button>
      )
      expect(queryByTestId('button')).toHaveClass('usa-button--big')
      expect(queryByTestId('button')).not.toHaveClass('usa-button--small')
    })
  })

  it('implements an onClick handler', () => {
    const onClickFn = jest.fn()
    const { getByText } = render(
      <Button type="button" onClick={onClickFn}>
        Click Me
      </Button>
    )

    fireEvent.click(getByText('Click Me'))

    expect(onClickFn).toHaveBeenCalledTimes(1)
  })

  it('accepts additional custom class names', () => {
    const { getByTestId } = render(
      <Button className="customClass" type="button">
        Click Me
      </Button>
    )
    expect(getByTestId('button')).toHaveClass('usa-button')
    expect(getByTestId('button')).toHaveClass('customClass')
  })
})
