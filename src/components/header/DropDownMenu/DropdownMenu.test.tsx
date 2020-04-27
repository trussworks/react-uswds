import React from 'react'
import { render } from '@testing-library/react'

import { DropDownLink } from './DropDownMenu'

const testLabel = 'Nav Label'
const testItems = [
  <a href="#linkOne" key="one">
    Simple link
  </a>,
  <a href="#linkTwo" key="two">
    Simple link Two
  </a>,
]

describe('DropDownLink component', () => {
  it('renders without errors', () => {
    const { queryByText } = render(
      <DropDownLink
        label={testLabel}
        items={testItems}
        id="testId"></DropDownLink>
    )
    expect(queryByText('Simple link')).toBeInTheDocument()
  })
})
