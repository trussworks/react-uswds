import React from 'react'
import { render } from '@testing-library/react'

import { Menu } from './Menu'

const testItems = [
  <a href="#linkOne" key="one">
    Simple link
  </a>,
  <a href="#linkTwo" key="two">
    Simple link Two
  </a>,
]

describe('Menu component', () => {
  it('renders without errors', () => {
    const { queryByText } = render(<Menu items={testItems} isOpen={true} />)
    expect(queryByText('Simple link')).toBeInTheDocument()
  })
})
