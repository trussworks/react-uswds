import React from 'react'
import { render } from '@testing-library/react'

import { ProcessList } from '../ProcessList/ProcessList'

describe('ProcessList component', () => {
  it('renders without errors', () => {
    const { queryByText } = render(<ProcessList />)
    expect(queryByText('process list text')).toBeInTheDocument()
  })
})
