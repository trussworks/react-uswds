import React from 'react'
import { render } from '@testing-library/react'

import { ExtendedDropDownLink } from './ExtendedDropDownMenu'

const testLabel = 'Nav Label'
const testItems = [
  [
    <a href="#linkOne" key="one">
      Simple link
    </a>,
    <a href="#linkTwo" key="two">
      Simple link
    </a>,
  ],
  [
    <a href="#linkThree" key="three">
      Simple link Two
    </a>,
    <a href="#linkFour" key="four">
      Simple link Two
    </a>,
  ],
]

describe('ExtendedDropDownLink component', () => {
  it('renders without errors', () => {
    const { queryByText } = render(
      <ExtendedDropDownLink
        label={testLabel}
        items={testItems}
        id="testId"></ExtendedDropDownLink>
    )
    expect(queryByText('Simple link')).toBeInTheDocument()
  })
})
