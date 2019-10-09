import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import { Button } from './Button'

describe('Button component', () => {
  it('renders without errors', () => {
    const { queryByTestId } = render(<Button type="button">Click Me</Button>)
    expect(queryByTestId('button')).toBeInTheDocument()
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
})
