import React from 'react'
import { render } from '@testing-library/react'
import { SummaryBoxHeading } from './SummaryBoxHeading'

describe('SummaryBoxHeading component', () => {
  it('renders without errors', () => {
    const { queryByText, getByRole } = render(
      <SummaryBoxHeading headingLevel="h3">test text</SummaryBoxHeading>
    )

    expect(getByRole('heading')).toBeInTheDocument()
    expect(queryByText('test text')).toBeInTheDocument()
  })

  it('renders default heading level', () => {
    const { getByRole } = render(
      <SummaryBoxHeading headingLevel="h3">test text</SummaryBoxHeading>
    )

    expect(getByRole('heading').tagName).toEqual('H3')
  })

  it('renders custom level', () => {
    const { getByRole } = render(
      <SummaryBoxHeading headingLevel="h6">test text </SummaryBoxHeading>
    )

    expect(getByRole('heading').tagName).toEqual('H6')
  })

  it('renders custom class name', () => {
    const { getByRole } = render(
      <SummaryBoxHeading className="custom-class" headingLevel="h3">
        test text{' '}
      </SummaryBoxHeading>
    )

    expect(getByRole('heading')).toHaveClass('custom-class')
  })

  it('renders custom heading attributes', () => {
    const { getByRole } = render(
      <SummaryBoxHeading aria-label="Hello" headingLevel="h3">
        test text{' '}
      </SummaryBoxHeading>
    )

    expect(getByRole('heading')).toHaveAttribute('aria-label', 'Hello')
  })
})
