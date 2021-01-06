import React from 'react'
import { render } from '@testing-library/react'

import { Menu } from './Menu'

const testItems = [
  <a href="#linkOne" key="one">
    Simple link one
  </a>,
  <a href="#linkTwo" key="two">
    Simple link two
  </a>,
]

describe('Menu component', () => {
  it('renders without errors', () => {
    const { container } = render(<Menu items={testItems} isOpen={true} />)
    expect(container.querySelector('.usa-nav__submenu')).toBeInTheDocument()
  })

  it('renders custom styles', () => {
    const { container } = render(
      <Menu className="custom-class" items={testItems} isOpen={true} />
    )
    expect(container.querySelector('.usa-nav__submenu')).toHaveClass(
      'custom-class'
    )
  })

  it('renders all test items when open', () => {
    const { getByText } = render(<Menu items={testItems} isOpen={true} />)
    expect(getByText('Simple link one')).toBeInTheDocument()
    expect(getByText('Simple link two')).toBeInTheDocument()
  })
})
