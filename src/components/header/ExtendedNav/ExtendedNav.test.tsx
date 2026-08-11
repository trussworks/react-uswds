import React, { useState } from 'react'
import { render, fireEvent, screen, waitFor } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'

import { ExtendedNav } from './ExtendedNav'
import { Header } from '../Header/Header'
import { NavMenuButton } from '../NavMenuButton/NavMenuButton'

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

const ExtendedNavHarness = () => {
  const [expanded, setExpanded] = useState(false)
  const toggleNav = (): void => setExpanded((current) => !current)

  return (
    <>
      <Header extended>
        <div className="usa-nav-container">
          <NavMenuButton label="Menu" onClick={toggleNav} />
          <ExtendedNav
            onToggleMobileNav={toggleNav}
            primaryItems={testPrimaryItems}
            secondaryItems={testSecondaryItems}
            mobileExpanded={expanded}
          />
        </div>
      </Header>
      <main data-testid="pageContent">Page content</main>
    </>
  )
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
    const onToggleMobileNav = vi.fn()
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
    expect(document.body).toHaveClass('usa-js-mobile-nav--active')
  })

  it('contains focus and hides page content while expanded', async () => {
    const user = userEvent.setup()
    render(<ExtendedNavHarness />)

    await user.click(screen.getByRole('button', { name: 'Menu' }))

    await waitFor(() =>
      expect(
        screen.getByRole('button', { name: 'Close Navigation Menu' })
      ).toHaveFocus()
    )
    expect(screen.getByTestId('pageContent')).toHaveAttribute(
      'aria-hidden',
      'true'
    )
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
