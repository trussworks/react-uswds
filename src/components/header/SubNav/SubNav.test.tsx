import React from 'react'
import { render } from '@testing-library/react'

import { SubNav } from './SubNav'

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
      <SubNav label={testLabel} items={testItems}></SubNav>
    )
    expect(queryByText('Simple link')).toBeInTheDocument()
  })
})
