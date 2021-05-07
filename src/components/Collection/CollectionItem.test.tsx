import React from 'react'
import { render } from '@testing-library/react'
import { CollectionItem } from './CollectionItem'

describe('CollectionItem component', () => {
  it('renders without errors', () => {
    const { getByTestId } = render(
      <CollectionItem data-testid="collection-item" />
    )

    expect(getByTestId('collection-item')).toBeInTheDocument()
  })

  it('renders children', () => {
    const { getByTestId } = render(
      <CollectionItem>
        <div data-testid="child-component" />
      </CollectionItem>
    )

    expect(getByTestId('child-component')).toBeInTheDocument()
  })

  it('renders collection item variants', () => {
    const { getByTestId } = render(
      <CollectionItem
        variantComponent={<div data-testid="variant-component" />}>
        <div />
      </CollectionItem>
    )

    expect(getByTestId('variant-component')).toBeInTheDocument()
  })
})
