import React from 'react'
import { render } from '@testing-library/react'

import { Address } from './Address'

const addressItems = [
  <a key="phone" href="tel:123-456-7890">
    (123) 456 - 7890
  </a>,
  <a key="email" href="mailto:thisnotfake@emailaddress.com">
    thisnotfake@emailaddress.com
  </a>,
]

describe('Address component', () => {
  it('renders without errors', () => {
    const { container } = render(<Address items={addressItems} />)
    expect(container.querySelector('address')).toBeInTheDocument()
  })

  it('renders address items', () => {
    const { getByText } = render(<Address items={addressItems} />)
    expect(getByText('(123) 456 - 7890')).toBeInTheDocument()
    expect(getByText('thisnotfake@emailaddress.com')).toBeInTheDocument()
  })
})
