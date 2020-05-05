import React from 'react'
import { render } from '@testing-library/react'

import { PrimaryNav } from './PrimaryNav'

const testItems = [
  <a className="usa-current" href="#linkOne" key="one">
    <span>Simple link</span>
  </a>,
  <a href="#linkTwo" key="two">
    <span>Simple link Two</span>
  </a>,
]

describe('Title component', () => {
  it('renders without errors', () => {
    const { queryByText } = render(<PrimaryNav items={testItems} />)
    expect(queryByText('Simple link')).toBeInTheDocument()
  })
})
