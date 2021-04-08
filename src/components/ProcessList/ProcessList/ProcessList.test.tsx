import React from 'react'
import { render } from '@testing-library/react'

import { ProcessList } from '../ProcessList/ProcessList'

const testListItems = [
  <li key="one">some text</li>,
  <li key="two">some more text</li>,
  <li key="three">third item</li>,
]

describe('ProcessList component', () => {
  it('renders without errors', () => {
    const { getAllByRole, queryByText } = render(
      <ProcessList>{testListItems}</ProcessList>
    )

    expect(queryByText('third item')).toBeInTheDocument()
    expect(getAllByRole('listitem')).toHaveLength(3)
  })

  it('accepts a class name', () => {
    const { getByRole } = render(
      <ProcessList className="custom-class-name">{testListItems}</ProcessList>
    )

    expect(getByRole('list')).toHaveClass('usa-process-list custom-class-name')
  })
})
