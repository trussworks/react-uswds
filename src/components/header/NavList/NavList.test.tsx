import React from 'react'
import { render } from '@testing-library/react'

import { NavList } from './NavList'

const testItems = ['item 1', 'item 2', 'item 3']

describe('NavList component', () => {
  it('renders without errors', () => {
    const { container } = render(<NavList items={testItems} primary={true} />)
    expect(container.querySelector('.usa-nav__primary')).toBeInTheDocument()
    expect(
      container.querySelector('.usa-nav__primary-item')
    ).toBeInTheDocument()
  })

  it('renders all test items', () => {
    const { getByText } = render(<NavList items={testItems} />)
    expect(getByText('item 1')).toBeInTheDocument()
    expect(getByText('item 2')).toBeInTheDocument()
    expect(getByText('item 3')).toBeInTheDocument()
  })
})
