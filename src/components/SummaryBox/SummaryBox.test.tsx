import React from 'react'
import { render } from '@testing-library/react'
import { SummaryBox } from './SummaryBox'

describe('SummaryBox component', () => {
  it('renders without errors', () => {
    const { getByRole } = render(
      <SummaryBox heading="Example heading">some text</SummaryBox>
    )
    expect(getByRole('heading')).toBeInTheDocument()
  })
})
