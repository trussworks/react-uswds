import React from 'react'
import { render } from '@testing-library/react'

import { CardHeader } from './CardHeader'

describe('CardGroup component', () => {
  it('renders without errors', () => {
    const { queryByTestId } = render(<CardHeader />)
    expect(queryByTestId('CardHeader')).toBeInTheDocument()
  })

  it('renders its children', () => {
    const { queryByText } = render(<CardHeader>My Header</CardHeader>)
    expect(queryByText('My Header')).toBeInTheDocument()
  })

  it('renders optional header props', () => {
    const { queryByTestId } = render(<CardHeader className="testClass" />)
    expect(queryByTestId('CardHeader')).toHaveClass('testClass')
  })

  it('renders proper class when exdent is true', () => {
    const { queryByTestId } = render(
      <CardHeader exdent={true}>Content</CardHeader>
    )
    expect(queryByTestId('CardHeader')).toHaveClass('usa-card__header--exdent')
  })
})
