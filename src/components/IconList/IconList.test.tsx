import React from 'react'
import { render } from '@testing-library/react'

import { IconList } from './IconList'

describe('IconList component', () => {
  it('renders without errors', () => {
    const { getAllByRole } = render(<IconList>children</IconList>)

    expect(getAllByRole('listitem')).toHaveLength(3)
  })

  it('accepts a className', () => {
    const { queryByRole } = render(
      <IconList className="custom-class">children</IconList>
    )

    expect(queryByRole('list')).toHaveClass('custom-class')
  })

  it('accepts attributes passed in through props', () => {
    const { queryByRole } = render(
      <IconList aria-label="icon list component">children</IconList>
    )
    expect(queryByRole('list')).toHaveAttribute(
      'aria-label',
      'icon list component'
    )
  })
})
