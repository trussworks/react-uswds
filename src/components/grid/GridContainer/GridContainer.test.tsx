import React from 'react'
import { render } from '@testing-library/react'

import { GridContainer } from './GridContainer'

describe('GridContainer component', () => {
  it('renders without errors', () => {
    const { queryByTestId } = render(<GridContainer />)
    expect(queryByTestId('gridContainer')).toBeInTheDocument()
  })

  it('renders its children', () => {
    const { queryByText } = render(<GridContainer>My Content</GridContainer>)
    expect(queryByText('My Content')).toBeInTheDocument()
  })

  it('implements the containerSize prop', () => {
    const { getByTestId } = render(
      <GridContainer containerSize="tablet-lg">My Content</GridContainer>
    )
    expect(getByTestId('gridContainer')).toHaveClass('grid-container-tablet-lg')
  })
})
