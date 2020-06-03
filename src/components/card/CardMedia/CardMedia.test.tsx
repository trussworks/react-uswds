import React from 'react'
import { render } from '@testing-library/react'

import { CardMedia } from './CardMedia'

describe('CardMedia component', () => {
  it('renders without errors', () => {
    const { queryByTestId } = render(<CardMedia>Media Content</CardMedia>)
    expect(queryByTestId('CardMedia')).toBeInTheDocument()
  })

  it('renders its children', () => {
    const { queryByText } = render(<CardMedia>Media Content</CardMedia>)
    expect(queryByText('Media Content')).toBeInTheDocument()
  })

  it('renders optional media props', () => {
    const { queryByTestId } = render(
      <CardMedia className="testClass">Media Content</CardMedia>
    )
    expect(queryByTestId('CardMedia')).toHaveClass('testClass')
  })

  it('renders proper class when exdent is true', () => {
    const { queryByTestId } = render(
      <CardMedia exdent>Media Content</CardMedia>
    )
    expect(queryByTestId('CardMedia')).toHaveClass('usa-card__media--exdent')
  })

  it('renders proper class when inset is true', () => {
    const { queryByTestId } = render(<CardMedia inset>Inset Content</CardMedia>)
    expect(queryByTestId('CardMedia')).toHaveClass('usa-card__media--inset')
  })
})
