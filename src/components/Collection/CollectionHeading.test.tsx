import React from 'react'
import { render } from '@testing-library/react'
import { CollectionHeading } from './CollectionHeading'

describe('CollectionHeading component', () => {
  it('renders without errors', () => {
    const { queryByTestId } = render(
      <CollectionHeading data-testid="collection-heading" />
    )

    expect(queryByTestId('collection-heading')).toBeInTheDocument()
  })

  it('renders children', () => {
    const { queryByTestId } = render(
      <CollectionHeading data-testid="collection-heading">
        <div data-testid="test-child" />
      </CollectionHeading>
    )

    expect(queryByTestId('test-child')).toBeInTheDocument()
  })

  it('renders default heading level', () => {
    const { getByTestId } = render(
      <CollectionHeading data-testid="collection-heading" />
    )

    expect(getByTestId('collection-heading').tagName).toEqual('H3')
  })

  it('renders custom level', () => {
    const { getByTestId } = render(
      <CollectionHeading data-testid="collection-heading" headingLevel="h6" />
    )

    expect(getByTestId('collection-heading').tagName).toEqual('H6')
  })

  it('renders custom class name', () => {
    const { getByTestId } = render(
      <CollectionHeading
        data-testid="collection-heading"
        className="custom-class"
      />
    )

    expect(getByTestId('collection-heading')).toHaveClass('custom-class')
  })

  it('renders custom heading attributes', () => {
    const { getByTestId } = render(
      <CollectionHeading data-testid="collection-heading" aria-label="Hello" />
    )

    expect(getByTestId('collection-heading')).toHaveAttribute(
      'aria-label',
      'Hello'
    )
  })
})
