import React from 'react'
import { render } from '@testing-library/react'
import { ProcessListItemHeader } from './ProcessListItemHeader'

const testChildren = 'ProcessListItemHeader test children'

describe('ProcessListItemHeader component', () => {
  it('renders without errors', () => {
    const { queryByTestId } = render(
      <ProcessListItemHeader headerType="h4">
        {testChildren}
      </ProcessListItemHeader>
    )
    expect(queryByTestId('listItemHeader')).toBeInTheDocument()
  })

  it('applies attributes passed in as props', () => {
    const { queryByTestId } = render(
      <ProcessListItemHeader
        headerType="h4"
        className="custom-class"
        aria-label="Process list item header">
        {testChildren}
      </ProcessListItemHeader>
    )
    const testIdQuery = queryByTestId('listItemHeader')
    expect(testIdQuery).toHaveAttribute(
      'aria-label',
      'Process list item header'
    )
    expect(testIdQuery).toHaveClass('usa-process-list__heading custom-class')
  })
})
