import React from 'react'
import { render } from '@testing-library/react'

import { ProcessListHeading } from './ProcessListHeading'

describe('ProcessListHeading component', () => {
  it('renders without errors', () => {
    const { queryByTestId } = render(
      <ProcessListHeading type="h4">a heading</ProcessListHeading>
    )
    expect(queryByTestId('processListHeading')).toBeInTheDocument
    expect(queryByTestId('processListHeading')).toHaveClass(
      'usa-process-list__heading'
    )
  })
  it('renders with a p tag', () => {
    const { queryByTestId } = render(
      <ProcessListHeading type="p">a heading</ProcessListHeading>
    )
    expect(queryByTestId('processListHeading')).toBeInTheDocument
    expect(queryByTestId('processListHeading')).toHaveClass(
      'usa-process-list__heading'
    )
  })
})
