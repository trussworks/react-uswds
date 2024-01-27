import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'

import TooltipTrigger from './TooltipTrigger'

const triggerHandler = jest.fn()
const testTooltipId = '123'

describe('Tooltip component', () => {
  beforeEach(jest.clearAllMocks)

  it('renders without errors', () => {
    render(
      <TooltipTrigger tooltipId={testTooltipId}>My Tooltip</TooltipTrigger>
    )

    const triggerEl = screen.queryByTestId('triggerElement')
    expect(triggerEl).toBeInTheDocument()
    expect(triggerEl).toHaveAttribute('tabindex', '0')
    expect(triggerEl).toHaveAttribute('title', '')
    expect(triggerEl).not.toHaveClass('usa-tooltip')
    expect(triggerEl).toHaveClass('usa-tooltip__trigger')
  })

  it('shows tooltip body on mouse enter', () => {
    render(
      <TooltipTrigger onTrigger={triggerHandler}>My Tooltip</TooltipTrigger>
    )
    fireEvent.mouseEnter(screen.getByTestId('triggerElement'))
    expect(triggerHandler).toBeCalledWith(true)
  })

  it('hides tooltip on mouse leave', () => {
    render(
      <TooltipTrigger onTrigger={triggerHandler}>My Tooltip</TooltipTrigger>
    )

    fireEvent.mouseEnter(screen.getByTestId('triggerElement'))
    expect(triggerHandler).toBeCalledWith(true)

    fireEvent.mouseLeave(screen.getByTestId('triggerElement'))
    expect(triggerHandler).toBeCalledWith(false)
  })

  it('shows tooltip on focus', () => {
    render(
      <TooltipTrigger onTrigger={triggerHandler}>My Tooltip</TooltipTrigger>
    )
    fireEvent.focus(screen.getByTestId('triggerElement'))

    expect(triggerHandler).toBeCalledWith(true)
  })

  it('hides tooltip on blur', () => {
    render(
      <TooltipTrigger onTrigger={triggerHandler}>My Tooltip</TooltipTrigger>
    )

    fireEvent.focus(screen.getByTestId('triggerElement'))
    expect(triggerHandler).toBeCalledWith(true)

    fireEvent.blur(screen.getByTestId('triggerElement'))
    expect(triggerHandler).toBeCalledWith(false)
  })

  it('hides tooltip on keydown after focus', () => {
    render(
      <TooltipTrigger onTrigger={triggerHandler}>My Tooltip</TooltipTrigger>
    )

    fireEvent.focus(screen.getByTestId('triggerElement'))
    expect(triggerHandler).toBeCalledWith(true)

    fireEvent.keyDown(screen.getByTestId('triggerElement'), { key: 'Escape' })
    expect(triggerHandler).toBeCalledWith(false)
  })

  it('applies custom classes to the wrapper element', () => {
    render(
      <TooltipTrigger className="customWrapperClass">My Tooltip</TooltipTrigger>
    )

    expect(screen.queryByTestId('triggerElement')).toHaveClass(
      'customWrapperClass'
    )
  })

  describe('with a custom component', () => {
    type CustomLinkProps = React.PropsWithChildren<{
      to: string
      className?: string
    }> &
      JSX.IntrinsicElements['a'] &
      React.RefAttributes<HTMLAnchorElement>

    const CustomLinkForwardRef: React.ForwardRefRenderFunction<
      HTMLAnchorElement,
      CustomLinkProps
    > = ({ to, className, children, ...tooltipProps }, ref) => (
      <a ref={ref} href={to} className={className} {...tooltipProps}>
        {children}
      </a>
    )
    const CustomLink = React.forwardRef(CustomLinkForwardRef)

    it('renders the custom component as the trigger element', () => {
      render(
        <TooltipTrigger
          label="Click me"
          asCustom={CustomLink}
          to="http://www.truss.works"
          className="customTriggerClass">
          This is a custom link tooltip
        </TooltipTrigger>
      )

      const triggerEl = screen.queryByTestId('triggerElement')
      expect(triggerEl).toBeInTheDocument()
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
