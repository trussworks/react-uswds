import React from 'react'
import { render } from '@testing-library/react'

import { CardFooter } from './CardFooter'

describe('CardFooter component', () => {
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

  it('renders proper class when exdent is true', () => {
    const { queryByTestId } = render(<CardFooter exdent>Content</CardFooter>)
    expect(queryByTestId('CardFooter')).toHaveClass('usa-card__footer--exdent')
  })
})
