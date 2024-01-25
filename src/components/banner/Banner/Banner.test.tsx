import React from 'react'
import { render } from '@testing-library/react'
import Banner from './Banner'

describe('Banner component', () => {
  it('renders properly', () => {
    const { container } = render(<Banner>content</Banner>)

    const div = container.querySelector('div')

    expect(div).toHaveTextContent('content')
  })
})
