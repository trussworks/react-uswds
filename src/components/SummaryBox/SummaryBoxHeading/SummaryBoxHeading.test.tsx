import React from 'react'
import { render } from '@testing-library/react'
import { SummaryBoxHeading } from './SummaryBoxHeading'

describe('SummaryBoxHeading component', () => {
  it('renders without errors', () => {
    const { queryByTestId, queryByText } = render(
      <SummaryBoxHeading data-testid="collection-heading" heading="test text" />
    )

    expect(queryByTestId('collection-heading')).toBeInTheDocument()
    expect(queryByText('test text')).toBeInTheDocument()
  })

  it('renders default heading level', () => {
    const { getByTestId } = render(
      <SummaryBoxHeading data-testid="collection-heading" heading="test text" />
    )

    expect(getByTestId('collection-heading').tagName).toEqual('H3')
  })

  it('renders custom level', () => {
    const { getByTestId } = render(
      <SummaryBoxHeading
        data-testid="collection-heading"
        headingLevel="h6"
        heading="test text"
      />
    )

    expect(getByTestId('collection-heading').tagName).toEqual('H6')
  })

  it('renders custom class name', () => {
    const { getByTestId } = render(
      <SummaryBoxHeading
        data-testid="collection-heading"
        className="custom-class"
        heading="test text"
      />
    )

    expect(getByTestId('collection-heading')).toHaveClass('custom-class')
  })

  it('renders custom heading attributes', () => {
    const { getByTestId } = render(
      <SummaryBoxHeading
        data-testid="collection-heading"
        aria-label="Hello"
        heading="test text"
      />
    )

    expect(getByTestId('collection-heading')).toHaveAttribute(
      'aria-label',
      'Hello'
    )
  })
})
