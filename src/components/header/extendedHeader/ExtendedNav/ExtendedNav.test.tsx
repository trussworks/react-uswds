import React from 'react'
import { render } from '@testing-library/react'

import { ExtendedNav } from './ExtendedNav'

const testPrimaryItems = [
  <a className="usa-current" href="#linkOne" key="one">
    <span>Simple link one</span>
  </a>,
  <a href="#linkTwo" key="two">
    <span>Simple link two</span>
  </a>,
]

const testSecondaryItems = [
  <a className="usa-current" href="#linkThree" key="three">
    <span>Simple link three</span>
  </a>,
  <a href="#linkFour" key="four">
    <span>Simple link four</span>
  </a>,
]

describe('Title component', () => {
  it('renders without errors', () => {
    const { queryByRole } = render(
      <ExtendedNav
        primaryItems={testPrimaryItems}
        secondaryItems={testSecondaryItems}
      />
    )
    expect(queryByRole('navigation')).toBeInTheDocument()
  })

  it('renders primary items', () => {
    const { getByText } = render(
      <ExtendedNav
        primaryItems={testPrimaryItems}
        secondaryItems={testSecondaryItems}
      />
    )
    expect(getByText('Simple link one')).toBeInTheDocument()
    expect(getByText('Simple link two')).toBeInTheDocument()
  })

  it('renders secondary items', () => {
    const { getByText } = render(
      <ExtendedNav
        primaryItems={testPrimaryItems}
        secondaryItems={testSecondaryItems}
      />
    )
    expect(getByText('Simple link three')).toBeInTheDocument()
    expect(getByText('Simple link four')).toBeInTheDocument()
  })

  it('renders nav button', () => {
    const { getByTestId } = render(
      <ExtendedNav
        primaryItems={testPrimaryItems}
        secondaryItems={testSecondaryItems}
      />
    )
    expect(getByTestId('navButton')).toBeInTheDocument()
  })
})
