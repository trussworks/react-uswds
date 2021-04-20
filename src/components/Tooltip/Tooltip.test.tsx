import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'

import { Tooltip } from './Tooltip'

describe('Tooltip component', () => {
  it('renders without errors', () => {
    render(<Tooltip label="Click me">My Tooltip</Tooltip>)

    const wrapperEl = screen.queryByTestId('tooltipWrapper')
    expect(wrapperEl).toBeInTheDocument()
    expect(wrapperEl).toHaveClass('usa-tooltip')

    const bodyEl = screen.queryByRole('tooltip', { hidden: true })
    expect(bodyEl).toBeInTheDocument()
    const tooltipId = bodyEl?.getAttribute('id')
    expect(bodyEl).toHaveAttribute('role', 'tooltip')
    expect(bodyEl).toHaveAttribute('aria-hidden', 'true')
    expect(bodyEl).toHaveTextContent('Click me')

    const triggerEl = screen.queryByTestId('triggerElement')
    expect(triggerEl).toBeInTheDocument()
    expect(triggerEl).toHaveAttribute('aria-describedby', tooltipId)
    expect(triggerEl).toHaveAttribute('tabindex', '0')
    expect(triggerEl).toHaveAttribute('title', '')
    expect(triggerEl).not.toHaveClass('usa-tooltip')
    expect(triggerEl).toHaveClass('usa-tooltip__trigger')
  })

  it('defaults the position to top if no position prop is given', () => {
    render(<Tooltip label="Click me">My Tooltip</Tooltip>)
    expect(screen.getByTestId('tooltipBody')).toHaveClass(
      `usa-tooltip__body--top`
    )
  })

  it('hides tooltip body by default', () => {
    render(<Tooltip label="Click me">My Tooltip</Tooltip>)

    const bodyEl = screen.queryByRole('tooltip', { hidden: true })
    expect(bodyEl).not.toHaveClass('is-visible')
    expect(bodyEl).not.toHaveClass('is-set')
    expect(bodyEl).not.toHaveClass('usa-tooltip__body--wrap')

    // Can't test this because USWDS CSS is not present in the render environment
    // expect(bodyEl).not.toBeVisible()

    expect(bodyEl).toHaveAttribute('aria-hidden', 'true')
  })

  it('shows tooltip body with mouse event', () => {
    render(<Tooltip label="Click me">My Tooltip</Tooltip>)
    fireEvent.mouseEnter(screen.getByTestId('triggerElement'))

    const bodyEl = screen.queryByRole('tooltip')
    expect(bodyEl).toHaveClass('is-visible')
    expect(bodyEl).toBeVisible()
    expect(bodyEl).toHaveAttribute('aria-hidden', 'false')
  })

  it('hides tooltip with mouse event', () => {
    render(<Tooltip label="Click me">My Tooltip</Tooltip>)
    fireEvent.mouseLeave(screen.getByTestId('triggerElement'))

    const bodyEl = screen.queryByRole('tooltip', { hidden: true })
    expect(bodyEl).not.toHaveClass('is-visible')
    expect(bodyEl).toHaveAttribute('aria-hidden', 'true')

    // Can't test this because USWDS CSS is not present in the render environment
    // expect(bodyEl).not.toBeVisible()
  })

  it('shows tooltip with keyboard event', () => {
    render(<Tooltip label="Click me">My Tooltip</Tooltip>)
    fireEvent.focus(screen.getByTestId('triggerElement'))

    const bodyEl = screen.queryByRole('tooltip')
    expect(bodyEl).toHaveClass('is-visible')
    expect(bodyEl).toBeVisible()
    expect(bodyEl).toHaveAttribute('aria-hidden', 'false')
  })

  it('hides tooltip with keyboard event', () => {
    render(<Tooltip label="Click me">My Tooltip</Tooltip>)
    fireEvent.blur(screen.getByTestId('triggerElement'))

    const bodyEl = screen.queryByRole('tooltip', { hidden: true })
    expect(bodyEl).not.toHaveClass('is-visible')
    expect(bodyEl).toHaveAttribute('aria-hidden', 'true')

    // Can't test this because USWDS CSS is not present in the render environment
    // expect(bodyEl).not.toBeVisible()
  })

  it('applies custom classes to the wrapper element', () => {
    render(
      <Tooltip label="Click me" wrapperclasses="customWrapperClass">
        My Tooltip
      </Tooltip>
    )

    expect(screen.queryByTestId('tooltipWrapper')).toHaveClass(
      'customWrapperClass'
    )
  })

  describe('with a position prop', () => {
    it('applies the correct tooltip position when position prop is defined', () => {
      const { getByTestId } = render(
        <Tooltip position="bottom" label="Click me">
          My Tooltip
        </Tooltip>
      )
      expect(getByTestId('tooltipBody')).toHaveClass(
        `usa-tooltip__body--bottom`
      )
    })
  })

  describe('with a className prop', () => {
    it('applies the className to the trigger element', () => {
      const customClass = 'custom-class'
      const { getByTestId } = render(
        <Tooltip className={customClass} position="left" label="Click me">
          My Tooltip
        </Tooltip>
      )
      expect(getByTestId('triggerElement')).toHaveClass(customClass)
    })
  })

  describe('with a custom component', () => {
    type CustomLinkProps = React.PropsWithChildren<{
      to: string
      className?: string
    }> &
      JSX.IntrinsicElements['a'] &
      React.RefAttributes<HTMLAnchorElement>

    const CustomLink: React.ForwardRefExoticComponent<CustomLinkProps> = React.forwardRef(
      ({ to, className, children, ...tooltipProps }: CustomLinkProps, ref) => (
        <a ref={ref} href={to} className={className} {...tooltipProps}>
          {children}
        </a>
      )
    )

    CustomLink.displayName = 'custom link'

    it('renders the custom component as the trigger element', () => {
      render(
        <Tooltip<CustomLinkProps>
          label="Click me"
          asCustom={CustomLink}
          to="http://www.truss.works"
          className="customTriggerClass">
          This is a custom link tooltip
        </Tooltip>
      )

      const bodyEl = screen.queryByRole('tooltip', { hidden: true })
      const tooltipId = bodyEl?.getAttribute('id')

      const triggerEl = screen.queryByTestId('triggerElement')
      expect(triggerEl).toBeInTheDocument()
      expect(triggerEl).toHaveAttribute('aria-describedby', tooltipId)
      expect(triggerEl).toHaveAttribute('tabindex', '0')
      expect(triggerEl).toHaveAttribute('title', '')
      expect(triggerEl).not.toHaveClass('usa-tooltip')
      expect(triggerEl).toHaveClass('usa-tooltip__trigger')
      expect(triggerEl).toHaveClass('customTriggerClass')

      expect(triggerEl).toBeInstanceOf(HTMLAnchorElement)
      expect(triggerEl).toHaveAttribute('href', 'http://www.truss.works')
    })
  })
})
