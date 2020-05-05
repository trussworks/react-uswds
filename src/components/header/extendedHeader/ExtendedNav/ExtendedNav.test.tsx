import React from 'react'
import { render } from '@testing-library/react'

import { ExtendedNav } from './ExtendedNav'

const testPrimaryItems = [
  <a className="usa-current" href="#linkOne" key="one">
    <span>Current Simple link</span>
  </a>,
  <a href="#linkTwo" key="two">
    <span>Simple link Two</span>
  </a>,
]

const testSecondaryItems = [
  <a className="usa-current" href="#linkOne" key="one">
    <span>Simple link</span>
  </a>,
  <a href="#linkTwo" key="two">
    <span>Simple link Two</span>
  </a>,
]

describe('Title component', () => {
  it('renders without errors', () => {
    const { queryByText } = render(
      <ExtendedNav
        primaryItems={testPrimaryItems}
        secondaryItems={testSecondaryItems}
      />
    )
    expect(queryByText('Current Simple link')).toBeInTheDocument()
  })
})
