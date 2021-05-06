import React from 'react'
import { render } from '@testing-library/react'
import { CollectionDescription } from './CollectionDescription'

describe('CollectionDescription component', () => {
  it('renders without errors', () => {
    const { getByTestId } = render(
      <CollectionDescription data-testid="collection-description">
        The quick brown fox jumps over the lazy dog.
      </CollectionDescription>
    )

    expect(getByTestId('collection-description')).toBeInTheDocument()
  })

  it('renders the description text', () => {
    const { getByTestId } = render(
      <CollectionDescription data-testid="collection-description">
        The quick brown fox jumps over the lazy dog.
      </CollectionDescription>
    )

    expect(getByTestId('collection-description')).toHaveTextContent(
      'The quick brown fox jumps over the lazy dog.'
    )
  })

  it('renders extra paragraph attributes', () => {
    const { getByTestId } = render(
      <CollectionDescription
        data-testid="collection-description"
        aria-label="Hi">
        The quick brown fox jumps over the lazy dog.
      </CollectionDescription>
    )

    expect(getByTestId('collection-description')).toHaveAttribute(
      'aria-label',
      'Hi'
    )
  })
})
