import React from 'react'
import { render } from '@testing-library/react'

import { Footer } from './Footer'

const nav = (
  <nav>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  </nav>
)

const address = (
  <address>
    A mythical address. More address information. You can def find us online.
  </address>
)

describe('Footer component', () => {
  it('renders without errors', () => {
    const { container } = render(<Footer primary={nav} secondary={address} />)
    expect(container.querySelector('footer')).toBeInTheDocument()
  })

  it('renders primary content', () => {
    const { getByRole } = render(<Footer primary={nav} secondary={address} />)
    expect(getByRole('navigation')).toBeInTheDocument()
  })

  it('renders secondary content', () => {
    const { container } = render(<Footer primary={nav} secondary={address} />)
    expect(container.querySelector('address')).toBeInTheDocument()
  })
})
