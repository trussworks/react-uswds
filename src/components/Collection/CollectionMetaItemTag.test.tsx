import React from 'react'
import { render } from '@testing-library/react'
import { CollectionMetaItemTag } from './CollectionMetaItemTag'

describe('CollectionMetaItemTag', () => {
  it('renders without errors', () => {
    const { getByTestId } = render(
      <CollectionMetaItemTag data-testid="collection-meta-item-tag" />
    )

    expect(getByTestId('collection-meta-item-tag')).toBeInTheDocument()
  })

  it('renders children', () => {
    const { getByTestId } = render(
      <CollectionMetaItemTag data-testid="collection-meta-item-tag">
        Test Text
      </CollectionMetaItemTag>
    )

    expect(getByTestId('collection-meta-item-tag')).toHaveTextContent(
      'Test Text'
    )
  })

  it('renders usa-tag class name', () => {
    const { getByTestId } = render(
      <CollectionMetaItemTag data-testid="collection-meta-item-tag">
        Test Text
      </CollectionMetaItemTag>
    )

    expect(getByTestId('collection-meta-item-tag')).toHaveClass('usa-tag')
  })

  it('renders custom class name', () => {
    const { getByTestId } = render(
      <CollectionMetaItemTag
        data-testid="collection-meta-item-tag"
        className="test-class">
        Test Text
      </CollectionMetaItemTag>
    )

    expect(getByTestId('collection-meta-item-tag')).toHaveClass('test-class')
  })

  it('renders new meta tag', () => {
    const { getByTestId } = render(
      <CollectionMetaItemTag
        tagStyle="new"
        data-testid="collection-meta-item-tag">
        Test Text
      </CollectionMetaItemTag>
    )

    expect(getByTestId('collection-meta-item-tag')).toHaveClass('usa-tag--new')
  })

  it('renders custom HTML attributes', () => {
    const { getByTestId } = render(
      <CollectionMetaItemTag
        data-testid="collection-meta-item-tag"
        aria-label="hello">
        Test Text
      </CollectionMetaItemTag>
    )

    expect(getByTestId('collection-meta-item-tag')).toHaveAttribute(
      'aria-label',
      'hello'
    )
  })
})
