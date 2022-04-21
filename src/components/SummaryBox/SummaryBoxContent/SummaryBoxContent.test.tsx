import React from 'react'
import { render } from '@testing-library/react'
import { SummaryBoxContent } from './SummaryBoxContent'

describe('SummaryBoxContent component', () => {
  it('renders without errors', () => {
    const { queryByTestId } = render(
      <SummaryBoxContent data-testid="collection-heading" />
    )

    expect(queryByTestId('collection-heading')).toBeInTheDocument()
  })

  it('renders children', () => {
    const { queryByTestId } = render(
      <SummaryBoxContent data-testid="collection-heading">
        <div data-testid="test-child" />
      </SummaryBoxContent>
    )

    expect(queryByTestId('test-child')).toBeInTheDocument()
  })

  it('renders custom class name', () => {
    const { getByTestId } = render(
      <SummaryBoxContent
        data-testid="collection-heading"
        className="custom-class"
      />
    )

    expect(getByTestId('collection-heading')).toHaveClass('custom-class')
  })

  it('renders custom heading attributes', () => {
    const { getByTestId } = render(
      <SummaryBoxContent data-testid="collection-heading" aria-label="Hello" />
    )

    expect(getByTestId('collection-heading')).toHaveAttribute(
      'aria-label',
      'Hello'
    )
  })
})
