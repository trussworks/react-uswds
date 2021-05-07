import React from 'react'
import { render } from '@testing-library/react'
import { CollectionMetaItem } from './CollectionMetaItem'

describe('CollectionMetaItem', () => {
  it('renders without errors', () => {
    const { getByTestId } = render(
      <CollectionMetaItem data-testid="collection-meta-item" />
    )
    expect(getByTestId('collection-meta-item')).toBeInTheDocument()
  })

  it('renders children', () => {
    const { getByTestId } = render(
      <CollectionMetaItem data-testid="collection-meta-item">
        By Chris Hui
      </CollectionMetaItem>
    )
    expect(getByTestId('collection-meta-item')).toHaveTextContent(
      'By Chris Hui'
    )
  })

  it('renders custom class', () => {
    const { getByTestId } = render(
      <CollectionMetaItem
        data-testid="collection-meta-item"
        className="custom-class"
      />
    )
    expect(getByTestId('collection-meta-item')).toHaveClass('custom-class')
  })

  it('renders custom HTML attributes', () => {
    const { getByTestId } = render(
      <CollectionMetaItem
        data-testid="collection-meta-item"
        aria-label="hello"
      />
    )
    expect(getByTestId('collection-meta-item')).toHaveAttribute(
      'aria-label',
      'hello'
    )
  })
})
