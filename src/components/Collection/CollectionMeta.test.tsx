import React from 'react'
import { render } from '@testing-library/react'
import { CollectionMeta } from './CollectionMeta'
import { CollectionMetaItem } from './CollectionMetaItem'

describe('CollectionMeta component', () => {
  it('renders without errors', () => {
    const { getByTestId } = render(
      <CollectionMeta data-testid="collection-meta" />
    )

    expect(getByTestId('collection-meta')).toBeInTheDocument()
  })

  it('renders children', () => {
    const { getByTestId } = render(
      <CollectionMeta>
        <CollectionMetaItem data-testid="collection-meta-item">
          Hi
        </CollectionMetaItem>
      </CollectionMeta>
    )

    expect(getByTestId('collection-meta-item')).toBeInTheDocument()
  })

  it('renders custom class name', () => {
    const { getByTestId } = render(
      <CollectionMeta className="custom-class" data-testid="collection-meta">
        <CollectionMetaItem>Hi</CollectionMetaItem>
      </CollectionMeta>
    )

    expect(getByTestId('collection-meta')).toHaveClass('custom-class')
  })

  it('renders custom HTML attributes', () => {
    const { getByTestId } = render(
      <CollectionMeta
        data-testid="collection-meta"
        aria-label="More Information">
        <CollectionMetaItem>Hi</CollectionMetaItem>
      </CollectionMeta>
    )

    expect(getByTestId('collection-meta')).toHaveAttribute(
      'aria-label',
      'More Information'
    )
  })
})
