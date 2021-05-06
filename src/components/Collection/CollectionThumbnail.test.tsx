import React from 'react'
import { render } from '@testing-library/react'
import { CollectionThumbnail } from './CollectionThumbnail'

describe('CollectionThumbnail component', () => {
  it('renders without errors', () => {
    const { getByTestId } = render(
      <CollectionThumbnail data-testid="collection-thumbnail" />
    )

    expect(getByTestId('collection-thumbnail')).toBeInTheDocument()
  })

  it('renders image src', () => {
    const { getByTestId } = render(
      <CollectionThumbnail
        data-testid="collection-thumbnail"
        src="https://truss.works"
      />
    )

    expect(getByTestId('collection-thumbnail')).toHaveAttribute(
      'src',
      'https://truss.works'
    )
  })

  it('renders image alt text', () => {
    const { getByTestId } = render(
      <CollectionThumbnail
        data-testid="collection-thumbnail"
        src="https://truss.works"
        alt="TrussWorks"
      />
    )

    expect(getByTestId('collection-thumbnail')).toHaveAttribute(
      'alt',
      'TrussWorks'
    )
  })

  it('renders custom HTML attributes', () => {
    const { getByTestId } = render(
      <CollectionThumbnail
        data-testid="collection-thumbnail"
        src="https://truss.works"
        alt="TrussWorks"
        width="500"
      />
    )

    expect(getByTestId('collection-thumbnail')).toHaveAttribute('width', '500')
  })
})
