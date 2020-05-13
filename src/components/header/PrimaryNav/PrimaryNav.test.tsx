import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import { PrimaryNav } from './PrimaryNav'

const testItems = [
  <a className="usa-current" href="#linkOne" key="one">
    Simple link one
  </a>,
  <a href="#linkTwo" key="two">
    Simple link two
  </a>,
]

const onToggleMobileNav = (): void => {
  /* mock submit fn */
}

describe('PrimaryNav component', () => {
  it('renders without errors', () => {
    const { queryByRole } = render(
      <PrimaryNav items={testItems} onToggleMobileNav={onToggleMobileNav} />
    )
    expect(queryByRole('navigation')).toBeInTheDocument()
  })

  it('renders items', () => {
    const { getByText } = render(
      <PrimaryNav items={testItems} onToggleMobileNav={onToggleMobileNav} />
    )

    expect(getByText('Simple link one')).toBeInTheDocument()
    expect(getByText('Simple link two')).toBeInTheDocument()
  })

  it('renders nav close button', () => {
    const { getByTestId } = render(
      <PrimaryNav items={testItems} onToggleMobileNav={onToggleMobileNav} />
    )
    expect(getByTestId('navCloseButton')).toBeInTheDocument()
  })

  it('implements an onClick handler for nav close button', () => {
    const onToggleMobileNav = jest.fn()
    const { getByTestId } = render(
      <PrimaryNav items={testItems} onToggleMobileNav={onToggleMobileNav} />
    )

    fireEvent.click(getByTestId('navCloseButton'))
    expect(onToggleMobileNav).toHaveBeenCalledTimes(1)
  })

  it('renders the is-visible class when mobileExpanded is true', () => {
    const { container } = render(
      <PrimaryNav
        items={testItems}
        onToggleMobileNav={onToggleMobileNav}
        mobileExpanded={true}
      />
    )
    expect(container.querySelector('.is-visible')).toBeInTheDocument()
  })

  it('does not render the is-visible class when mobileExpanded is false', () => {
    const { container } = render(
      <PrimaryNav
        items={testItems}
        onToggleMobileNav={onToggleMobileNav}
        mobileExpanded={false}
      />
    )
    expect(container.querySelector('.is-visible')).toEqual(null)
  })

  it('renders childern', () => {
    const { getByText } = render(
      <PrimaryNav items={testItems} onToggleMobileNav={onToggleMobileNav}>
        <span>Test Text</span>
      </PrimaryNav>
    )

    expect(getByText('Test Text')).toBeInTheDocument()
  })
})
