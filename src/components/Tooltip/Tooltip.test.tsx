import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'

import { Tooltip } from './Tooltip'
import { isElementInViewport } from './utils'

jest.mock('./utils')

const mockedIsElementInViewport = isElementInViewport as jest.MockedFunction<
  typeof isElementInViewport
>
mockedIsElementInViewport.mockReturnValue(true)

describe('Tooltip component', () => {
  beforeEach(jest.clearAllMocks)

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

  describe('positioning the tooltip', () => {
    describe('when position is top', () => {
      it('positions on the top', () => {
        render(
          <Tooltip label="Click me" position="top">
            My Tooltip
          </Tooltip>
        )
        fireEvent.mouseEnter(screen.getByTestId('triggerElement'))

        const bodyEl = screen.queryByRole('tooltip')
        expect(bodyEl).toHaveClass('usa-tooltip__body--top')
        // TODO - marginLeft & marginBottom
      })

      it('adds the wrap class if the width is outside the viewport', () => {
        mockedIsElementInViewport.mockReturnValueOnce(true)
        mockedIsElementInViewport.mockReturnValueOnce(false)

        render(
          <Tooltip label="Click me" position="top">
            My Tooltip
          </Tooltip>
        )

        fireEvent.mouseEnter(screen.getByTestId('triggerElement'))

        const bodyEl = screen.queryByRole('tooltip')
        expect(bodyEl).toHaveClass('usa-tooltip__body--top')
        expect(bodyEl).toHaveClass('usa-tooltip__body--wrap')
      })

      it('positions to the bottom if the height is outside the viewport', () => {
        mockedIsElementInViewport.mockReturnValueOnce(false)
        mockedIsElementInViewport.mockReturnValueOnce(false)

        render(
          <Tooltip label="Click me" position="top">
            My Tooltip
          </Tooltip>
        )

        fireEvent.mouseEnter(screen.getByTestId('triggerElement'))

        const bodyEl = screen.queryByRole('tooltip')
        expect(bodyEl).toHaveClass('usa-tooltip__body--bottom')
        expect(bodyEl).toHaveClass('usa-tooltip__body--wrap')
        // TODO - marginLeft & marginBottom
      })
    })

    describe('when position is bottom', () => {
      it('positions on the bottom', () => {
        render(
          <Tooltip label="Click me" position="bottom">
            My Tooltip
          </Tooltip>
        )
        fireEvent.mouseEnter(screen.getByTestId('triggerElement'))

        const bodyEl = screen.queryByRole('tooltip')
        expect(bodyEl).toHaveClass('usa-tooltip__body--bottom')
        // TODO - marginLeft & marginTop
      })

      it('adds the wrap class if the width is outside the viewport', () => {
        mockedIsElementInViewport.mockReturnValueOnce(true)
        mockedIsElementInViewport.mockReturnValueOnce(false)

        render(
          <Tooltip label="Click me" position="bottom">
            My Tooltip
          </Tooltip>
        )

        fireEvent.mouseEnter(screen.getByTestId('triggerElement'))

        const bodyEl = screen.queryByRole('tooltip')
        expect(bodyEl).toHaveClass('usa-tooltip__body--bottom')
        expect(bodyEl).toHaveClass('usa-tooltip__body--wrap')
      })

      it('positions to the top if the height is outside the viewport', () => {
        mockedIsElementInViewport.mockReturnValueOnce(false)
        mockedIsElementInViewport.mockReturnValueOnce(false)

        render(
          <Tooltip label="Click me" position="bottom">
            My Tooltip
          </Tooltip>
        )

        fireEvent.mouseEnter(screen.getByTestId('triggerElement'))

        const bodyEl = screen.queryByRole('tooltip')
        expect(bodyEl).toHaveClass('usa-tooltip__body--top')
        expect(bodyEl).toHaveClass('usa-tooltip__body--wrap')
        // TODO - marginLeft & marginTop
      })
    })

    describe('when position is right', () => {
      it('positions on the right', () => {
        render(
          <Tooltip label="Click me" position="right">
            My Tooltip
          </Tooltip>
        )
        fireEvent.mouseEnter(screen.getByTestId('triggerElement'))

        const bodyEl = screen.queryByRole('tooltip')
        expect(bodyEl).toHaveClass('usa-tooltip__body--right')
        expect(bodyEl).toHaveStyle('margin-bottom: 0px')
        // TODO - marginLeft & bottom pos
      })

      it('positions to the left if the width is outside the viewport', () => {
        mockedIsElementInViewport.mockReturnValueOnce(false)

        render(
          <Tooltip label="Click me" position="right">
            My Tooltip
          </Tooltip>
        )

        fireEvent.mouseEnter(screen.getByTestId('triggerElement'))

        const bodyEl = screen.queryByRole('tooltip')
        expect(bodyEl).toHaveClass('usa-tooltip__body--left')
      })

      it('positions to the top if the width is still outside the viewport', () => {
        mockedIsElementInViewport.mockReturnValueOnce(false)
        mockedIsElementInViewport.mockReturnValueOnce(false)

        render(
          <Tooltip label="Click me" position="right">
            My Tooltip
          </Tooltip>
        )

        fireEvent.mouseEnter(screen.getByTestId('triggerElement'))

        const bodyEl = screen.queryByRole('tooltip')
        expect(bodyEl).toHaveClass('usa-tooltip__body--top')
      })
    })

    describe('when position is left', () => {
      it('positions on the left', () => {
        render(
          <Tooltip label="Click me" position="left">
            My Tooltip
          </Tooltip>
        )
        fireEvent.mouseEnter(screen.getByTestId('triggerElement'))

        const bodyEl = screen.queryByRole('tooltip')
        expect(bodyEl).toHaveClass('usa-tooltip__body--left')
        expect(bodyEl).toHaveStyle('margin-bottom: 0px')
        // TODO - marginLeft & bottom pos
      })

      it('positions to the right if the width is outside the viewport', () => {
        mockedIsElementInViewport.mockReturnValueOnce(false)

        render(
          <Tooltip label="Click me" position="left">
            My Tooltip
          </Tooltip>
        )

        fireEvent.mouseEnter(screen.getByTestId('triggerElement'))

        const bodyEl = screen.queryByRole('tooltip')
        expect(bodyEl).toHaveClass('usa-tooltip__body--right')
      })

      it('positions to the top if the width is still outside the viewport', () => {
        mockedIsElementInViewport.mockReturnValueOnce(false)
        mockedIsElementInViewport.mockReturnValueOnce(false)

        render(
          <Tooltip label="Click me" position="left">
            My Tooltip
          </Tooltip>
        )

        fireEvent.mouseEnter(screen.getByTestId('triggerElement'))

        const bodyEl = screen.queryByRole('tooltip')
        expect(bodyEl).toHaveClass('usa-tooltip__body--top')
      })
    })
  })
})
