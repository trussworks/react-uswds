import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import { ExtendedNav } from './ExtendedNav'

const testPrimaryItems = [
  <a className="usa-current" href="#linkOne" key="one">
    Simple link one
  </a>,
  <a href="#linkTwo" key="two">
    Simple link two
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

const onToggleMobileNav = (): void => {
  /* mock submit fn */
}

describe('ExtendedNav component', () => {
  it('renders without errors', () => {
    const { queryByRole } = render(
      <ExtendedNav
        onToggleMobileNav={onToggleMobileNav}
        primaryItems={testPrimaryItems}
        secondaryItems={testSecondaryItems}
      />
    )
    expect(queryByRole('navigation')).toBeInTheDocument()
  })

  it('renders primary items', () => {
    const { getByText } = render(
      <ExtendedNav
        onToggleMobileNav={onToggleMobileNav}
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
        onToggleMobileNav={onToggleMobileNav}
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
        onToggleMobileNav={onToggleMobileNav}
        primaryItems={testPrimaryItems}
        secondaryItems={testSecondaryItems}
      />
    )
    expect(getByTestId('navCloseButton')).toBeInTheDocument()
  })

  it('implements an onClick handler', () => {
    const onToggleMobileNav = jest.fn()
    const { getByTestId } = render(
      <ExtendedNav
        onToggleMobileNav={onToggleMobileNav}
        primaryItems={testPrimaryItems}
        secondaryItems={testSecondaryItems}
      />
    )

    fireEvent.click(getByTestId('navCloseButton'))
    expect(onToggleMobileNav).toHaveBeenCalledTimes(1)
  })

  it('renders the is-visible class when mobileExpanded is true', () => {
    const { container } = render(
      <ExtendedNav
        onToggleMobileNav={onToggleMobileNav}
        primaryItems={testPrimaryItems}
        secondaryItems={testSecondaryItems}
        mobileExpanded={true}
      />
    )
    expect(container.querySelector('.is-visible')).toBeInTheDocument()
  })

  it('does not render the is-visible class when mobileExpanded is false', () => {
    const { container } = render(
      <ExtendedNav
        onToggleMobileNav={onToggleMobileNav}
        primaryItems={testPrimaryItems}
        secondaryItems={testSecondaryItems}
        mobileExpanded={false}
      />
    )
    expect(container.querySelector('.is-visible')).not.toBeInTheDocument()
  })
})
