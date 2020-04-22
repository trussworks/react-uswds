import React from 'react'
import { render } from '@testing-library/react'

import { SecondaryNav } from './SecondaryNav'

const testLabel = 'Nav Label'
const testItems = [
  <a href="#linkOne" key="one">
    Simple link
  </a>,
  <a href="#linkTwo" key="two">
    Simple link Two
  </a>,
]

describe('Title component', () => {
  it('renders without errors', () => {
    const { queryByText } = render(
      <SecondaryNav label={testLabel} items={testItems}></SecondaryNav>
    )
    expect(queryByText('Simple link')).toBeInTheDocument()
  })
})
