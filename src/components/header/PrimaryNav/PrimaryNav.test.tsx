import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import { PrimaryNav } from './PrimaryNav'

vi.mock('../../modal/utils', async (importOriginal) => {
  const utils = await importOriginal<typeof import('../../modal/utils')>()

  return {
    ...utils,
    getScrollbarWidth: vi.fn().mockReturnValue('15px'),
  }
})

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

const renderNav = (mobileExpanded: boolean) => (
  <React.StrictMode>
    <PrimaryNav
      items={testItems}
      onToggleMobileNav={onToggleMobileNav}
      mobileExpanded={mobileExpanded}
    />
  </React.StrictMode>
)

describe('PrimaryNav component', () => {
  afterEach(() => {
    document.body.classList.remove('usa-js-mobile-nav--active')
    document.body.style.removeProperty('padding-right')
  })

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
    const onToggleMobileNav = vi.fn()
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

  it('locks body scrolling only while the mobile navigation is expanded', () => {
    document.body.style.paddingRight = '5px'

    const { rerender, unmount } = render(renderNav(false))

    rerender(renderNav(true))
    expect(document.body).toHaveClass('usa-js-mobile-nav--active')
    expect(document.body).toHaveStyle({ paddingRight: '20px' })

    rerender(renderNav(false))
    expect(document.body).not.toHaveClass('usa-js-mobile-nav--active')
    expect(document.body).toHaveStyle({ paddingRight: '5px' })

    rerender(renderNav(true))
    unmount()
    expect(document.body).not.toHaveClass('usa-js-mobile-nav--active')
    expect(document.body).toHaveStyle({ paddingRight: '5px' })

    document.body.style.removeProperty('padding-right')

    const { unmount: unmountWithoutInitialPadding } = render(renderNav(true))
    unmountWithoutInitialPadding()
    expect(document.body.style.paddingRight).toBe('')
  })

  it('locks body scrolling when initially expanded in StrictMode', () => {
    document.body.style.paddingRight = '5px'

    render(renderNav(true))

    expect(document.body).toHaveClass('usa-js-mobile-nav--active')
    expect(document.body).toHaveStyle({ paddingRight: '20px' })
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
