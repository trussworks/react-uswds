import React, { useState } from 'react'
import { render, fireEvent, screen, waitFor } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'

import { PrimaryNav } from './PrimaryNav'
import { Header } from '../Header/Header'
import { NavMenuButton } from '../NavMenuButton/NavMenuButton'

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

const MobileNavHarness = ({
  initiallyExpanded = false,
}: {
  initiallyExpanded?: boolean
}) => {
  const [expanded, setExpanded] = useState(initiallyExpanded)
  const toggleNav = (): void => setExpanded((current) => !current)

  return (
    <>
      <Header basic showMobileOverlay={expanded}>
        <div className="usa-nav-container">
          <NavMenuButton label="Menu" onClick={toggleNav} />
          <PrimaryNav
            items={testItems}
            onToggleMobileNav={toggleNav}
            mobileExpanded={expanded}
          />
        </div>
      </Header>
      <main data-testid="pageContent">Page content</main>
      <aside data-testid="alreadyHidden" aria-hidden="true">
        Already hidden
      </aside>
    </>
  )
}

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

  it('contains focus and restores the opener and page accessibility state', async () => {
    const user = userEvent.setup()
    render(<MobileNavHarness />)

    const menuButton = screen.getByRole('button', { name: 'Menu' })
    await user.click(menuButton)

    const closeButton = screen.getByRole('button', {
      name: 'Close Navigation Menu',
    })
    const lastLink = screen.getByRole('link', { name: 'Simple link two' })
    const pageContent = screen.getByTestId('pageContent')

    await waitFor(() => expect(closeButton).toHaveFocus())
    expect(pageContent).toHaveAttribute('aria-hidden', 'true')
    expect(pageContent).toHaveAttribute('data-nav-hidden')
    expect(screen.getByTestId('header')).not.toHaveAttribute('aria-hidden')
    expect(screen.getByTestId('header').parentElement).not.toHaveAttribute(
      'aria-hidden'
    )
    expect(screen.getByRole('navigation')).not.toHaveAttribute('aria-hidden')
    expect(screen.getByTestId('alreadyHidden')).toHaveAttribute(
      'aria-hidden',
      'true'
    )
    expect(screen.getByTestId('alreadyHidden')).not.toHaveAttribute(
      'data-nav-hidden'
    )

    await user.tab({ shift: true })
    expect(lastLink).toHaveFocus()
    await user.tab()
    expect(closeButton).toHaveFocus()

    await user.keyboard('{Escape}')

    await waitFor(() => expect(menuButton).toHaveFocus())
    expect(pageContent).not.toHaveAttribute('aria-hidden')
    expect(pageContent).not.toHaveAttribute('data-nav-hidden')
    expect(screen.getByTestId('alreadyHidden')).toHaveAttribute(
      'aria-hidden',
      'true'
    )
  })

  it('does not trap focus without a mobile navigation toggle handler', () => {
    render(
      <>
        <PrimaryNav items={testItems} mobileExpanded />
        <button type="button">Outside</button>
      </>
    )

    const outsideButton = screen.getByText('Outside')
    outsideButton.focus()

    expect(outsideButton).toHaveFocus()
  })

  it('restores page accessibility state when unmounted while expanded', () => {
    const pageContent = document.createElement('main')
    document.body.appendChild(pageContent)

    const { unmount } = render(
      <React.StrictMode>
        <MobileNavHarness initiallyExpanded />
      </React.StrictMode>
    )
    expect(pageContent).toHaveAttribute('aria-hidden', 'true')

    unmount()
    expect(pageContent).not.toHaveAttribute('aria-hidden')
    expect(pageContent).not.toHaveAttribute('data-nav-hidden')

    pageContent.remove()
  })

  it('closes the mobile navigation when it becomes hidden at desktop width', async () => {
    const user = userEvent.setup()
    render(<MobileNavHarness />)

    const menuButton = screen.getByRole('button', { name: 'Menu' })
    await user.click(menuButton)

    const closeButton = screen.getByRole('button', {
      name: 'Close Navigation Menu',
    })
    closeButton.style.display = 'none'

    fireEvent(window, new Event('resize'))

    await waitFor(() => expect(menuButton).toHaveFocus())
    expect(screen.getByRole('navigation')).not.toHaveClass('is-visible')
    expect(screen.getByTestId('pageContent')).not.toHaveAttribute('aria-hidden')
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
