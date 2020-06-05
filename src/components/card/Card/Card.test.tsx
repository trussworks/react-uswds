import React from 'react'
import { render } from '@testing-library/react'

import { Card } from './Card'

describe('Card component', () => {
  it('renders without errors', () => {
    const { queryByTestId } = render(<Card layout="standardDefault" />)
    expect(queryByTestId('Card')).toBeInTheDocument()
  })

  it('renders its children', () => {
    const { queryByText } = render(
      <Card layout="standardDefault">My Content</Card>
    )
    expect(queryByText('My Content')).toBeInTheDocument()
  })

  it('renders the header first class when standardHeaderFirst is true', () => {
    const { getByTestId } = render(
      <Card layout="standardDefault" headerFirst={true} />
    )
    expect(getByTestId('Card')).toHaveClass('usa-card--header-first')
  })

  it('renders the flag class when layout is flag', () => {
    const { getByTestId } = render(<Card layout="flagDefault" />)
    expect(getByTestId('Card')).toHaveClass('usa-card--flag')
  })

  it('renders the media right class when layout is flag and mediaOrientation is right', () => {
    const { getByTestId } = render(<Card layout="flagMediaRight" />)
    expect(getByTestId('Card')).toHaveClass('usa-card--media-right')
  })
})
