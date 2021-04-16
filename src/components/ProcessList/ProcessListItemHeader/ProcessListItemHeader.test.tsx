import React from 'react'
import { render } from '@testing-library/react'
import { ProcessListItemHeader } from './ProcessListItemHeader'

const testChildren = <h4>ProcessListItemHeader h4</h4>

describe('ProcessListItemHeader component', () => {
  // it('renders without errors', () => {
  //   const { getByRole } = render(
  //     <ProcessListItemHeader>{testChildren}</ProcessListItemHeader>
  //   )
  //   expect(getByRole('heading')).toBeInTheDocument()
  // })

  it('applies attributes passed in as props', () => {
    const { queryByTestId } = render(
      <ProcessListItemHeader aria-label="Process list item header">
        {testChildren}
      </ProcessListItemHeader>
    )

    expect(queryByTestId('listItemHeader')).toHaveAttribute(
      'aria-label',
      'Process list item header'
    )
  })
})
