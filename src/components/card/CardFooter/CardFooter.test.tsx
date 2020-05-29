import React from 'react'
import { render } from '@testing-library/react'

import { CardFooter } from './CardFooter'

describe('CardGroup component', () => {
  it('renders without errors', () => {
    const { queryByTestId } = render(<CardFooter />)
    expect(queryByTestId('CardFooter')).toBeInTheDocument()
  })

  it('renders its children', () => {
    const { queryByText } = render(<CardFooter>My Header</CardFooter>)
    expect(queryByText('My Header')).toBeInTheDocument()
  })

  it('renders optional header props', () => {
    const { queryByTestId } = render(<CardFooter className="testClass" />)
    expect(queryByTestId('CardFooter')).toHaveClass('testClass')
  })
})
