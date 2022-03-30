import React from 'react'
import { render } from '@testing-library/react'
import { SummaryBoxHeading } from './SummaryBoxHeading'

describe('SummaryBoxHeading component', () => {
  it('renders without errors', () => {
    const { queryByTestId, queryByText } = render(
      <SummaryBoxHeading headingLevel="h3">test text</SummaryBoxHeading>
    )

    expect(queryByTestId('summaryBoxHeading')).toBeInTheDocument()
    expect(queryByText('test text')).toBeInTheDocument()
  })

  it('renders default heading level', () => {
    const { getByTestId } = render(
      <SummaryBoxHeading headingLevel="h3">test text</SummaryBoxHeading>
    )

    expect(getByTestId('summaryBoxHeading').tagName).toEqual('H3')
  })

  it('renders custom level', () => {
    const { getByTestId } = render(
      <SummaryBoxHeading headingLevel="h6">test text </SummaryBoxHeading>
    )

    expect(getByTestId('summaryBoxHeading').tagName).toEqual('H6')
  })

  it('renders custom class name', () => {
    const { getByTestId } = render(
      <SummaryBoxHeading className="custom-class" headingLevel="h3">
        test text{' '}
      </SummaryBoxHeading>
    )

    expect(getByTestId('summaryBoxHeading')).toHaveClass('custom-class')
  })

  it('renders custom heading attributes', () => {
    const { getByTestId } = render(
      <SummaryBoxHeading aria-label="Hello" headingLevel="h3">
        test text{' '}
      </SummaryBoxHeading>
    )

    expect(getByTestId('summaryBoxHeading')).toHaveAttribute(
      'aria-label',
      'Hello'
    )
  })
})
