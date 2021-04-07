import React from 'react'
import { render } from '@testing-library/react'

import { ProcessListItem } from './ProcessListItem'

describe('ProcessListItem component', () => {
  it('renders without errors', () => {
    const { queryByText } = render(<ProcessListItem />)

    expect(queryByText('process list item')).toBeInTheDocument()
  })
})
