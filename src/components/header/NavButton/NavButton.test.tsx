import React from 'react'
import { render } from '@testing-library/react'

import { NavButton } from './NavButton'

describe('NavButton component', () => {
  it('renders without errors', () => {
    const { queryByText } = render(<NavButton>Menu</NavButton>)
    expect(queryByText('Menu')).toBeInTheDocument()
  })
})
