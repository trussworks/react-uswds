import React from 'react'
import { render } from '@testing-library/react'

import { IconList } from './IconList'

describe('IconList component', () => {
  it('renders without errors', () => {
    const { getAllByRole } = render(<IconList>children</IconList>)

    expect(getAllByRole('listitem')).toHaveLength(3)
  })
})
