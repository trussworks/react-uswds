import React from 'react'
import { render } from '@testing-library/react'
import { CollectionHeading } from './CollectionHeading'

describe('CollectionHeading component', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders without errors', () => {
    const { queryByTestId } = render(
      <CollectionHeading data-testid="collection-heading" headingLevel="h3" />
    )

    expect(queryByTestId('collection-heading')).toBeInTheDocument()
  })

  it('renders children', () => {
    const { queryByTestId } = render(
      <CollectionHeading data-testid="collection-heading" headingLevel="h3">
        <div data-testid="test-child" />
      </CollectionHeading>
    )

    expect(queryByTestId('test-child')).toBeInTheDocument()
  })

  it('renders custom class name', () => {
    const { getByTestId } = render(
      <CollectionHeading
        data-testid="collection-heading"
        className="custom-class"
        headingLevel="h3"
      />
    )

    expect(getByTestId('collection-heading')).toHaveClass('custom-class')
  })

  it('renders custom heading attributes', () => {
    const { getByTestId } = render(
      <CollectionHeading
        data-testid="collection-heading"
        aria-label="Hello"
        headingLevel="h3"
      />
    )

    expect(getByTestId('collection-heading')).toHaveAttribute(
      'aria-label',
      'Hello'
    )
  })
})
