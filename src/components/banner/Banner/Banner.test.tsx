import React from 'react'
import { render, screen } from '@testing-library/react'
import { Banner } from './Banner'

describe('Banner component', () => {
  it('renders properly', () => {
    const { container } = render(<Banner>content</Banner>)

    const section = container.querySelector('section')
    const div = container.querySelector('div')

    expect(section).toHaveClass('usa-banner')
    expect(div).toHaveClass('usa-accordion')
    expect(div).toHaveTextContent('content')
  })
})
