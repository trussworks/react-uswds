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

  it('renders custom styles', () => {
    const { container } = render(
      <Address className="custom-class" items={addressItems} />
    )
    expect(container.querySelector('address')).toHaveClass('custom-class')
  })

  it.each([
    ['big', '.grid-col-auto', '.mobile-lg\\:grid-col-12'],
    ['medium', '.grid-col-auto', '.mobile-lg\\:grid-col-12'],
    ['slim', '.mobile-lg\\:grid-col-12', undefined],
  ])(
    'renders with a size prop %s',
    (sizeString, expectedClass, missingClass) => {
      const size = sizeString as 'big' | 'medium' | 'slim'
      const { container } = render(<Address items={addressItems} size={size} />)
      expect(container.querySelector(expectedClass)).toBeInTheDocument()
      if (missingClass !== undefined) {
        expect(container.querySelector(missingClass)).not.toBeInTheDocument()
      }
    }
  )
})
