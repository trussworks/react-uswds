import React, { createRef } from 'react'
import { render, fireEvent } from '@testing-library/react'

import Button from './Button.js'

vi.mock('../../deprecation')

describe('Button component', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders without errors', () => {
    const { queryByTestId } = render(<Button type="button">Click Me</Button>)
    expect(queryByTestId('button')).toBeInTheDocument()
  })

  it('renders ref', () => {
    const testRef = createRef<HTMLButtonElement>()
    const { queryByTestId } = render(
      <Button type="button" _ref={testRef}>
        Click Me
      </Button>
    )
    expect(queryByTestId('button')).toBeInTheDocument()
    expect(testRef.current).toBeInstanceOf(HTMLButtonElement)
  })

  describe('renders uswds classes', () => {
    it('usa-button', () => {
      const { queryByTestId } = render(<Button type="button">Click Me</Button>)
      expect(queryByTestId('button')).toHaveClass('usa-button')
    })

    const optionalBooleanClasses = [
      ['secondary', 'usa-button--secondary'],
      ['base', 'usa-button--base'],
      ['outline', 'usa-button--outline'],
      ['inverse', 'usa-button--inverse'],
      ['unstyled', 'usa-button--unstyled'],
    ]

    optionalBooleanClasses.map((data) => {
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

    it('renders uswds class for size big', () => {
      const { queryByTestId } = render(
        <Button type="button" size="big">
          Click Me
        </Button>
      )
      expect(queryByTestId('button')).toHaveClass('usa-button--big')
    })

    it('renders uswds class for cool accent style', () => {
      const { queryByTestId } = render(
        <Button type="button" accentStyle="cool">
          Click Me
        </Button>
      )
      expect(queryByTestId('button')).toHaveClass('usa-button--accent-cool')
    })

    it('renders uswds class for warm accent style', () => {
      const { queryByTestId } = render(
        <Button type="button" accentStyle="warm">
          Click Me
        </Button>
      )
      expect(queryByTestId('button')).toHaveClass('usa-button--accent-warm')
    })
  })

  it('implements an onClick handler', () => {
    const onClickFn = vi.fn()
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
