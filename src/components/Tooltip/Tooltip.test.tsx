import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'

import { Tooltip } from './Tooltip'
import { isElementInViewport, calculateMarginOffset } from './utils'

jest.mock('./utils')

const mockedIsElementInViewport = isElementInViewport as jest.MockedFunction<
  typeof isElementInViewport
>
mockedIsElementInViewport.mockReturnValue(true)

const mockedCalculateMarginOffset =
  calculateMarginOffset as jest.MockedFunction<typeof calculateMarginOffset>
mockedCalculateMarginOffset.mockReturnValue(100)

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

    fireEvent.mouseEnter(screen.getByTestId('triggerElement'))
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

  it('shows tooltip body on mouse enter', () => {
    render(<Tooltip label="Click me">My Tooltip</Tooltip>)
    fireEvent.mouseEnter(screen.getByTestId('triggerElement'))

    const bodyEl = screen.queryByRole('tooltip')
    expect(bodyEl).toHaveClass('is-visible')
    expect(bodyEl).toBeVisible()
    expect(bodyEl).toHaveAttribute('aria-hidden', 'false')
  })

  it('hides tooltip on mouse leave', () => {
    render(<Tooltip label="Click me">My Tooltip</Tooltip>)
    const bodyEl = screen.queryByRole('tooltip', { hidden: true })

    fireEvent.mouseEnter(screen.getByTestId('triggerElement'))
    expect(bodyEl).toHaveClass('is-visible')
    expect(bodyEl).toHaveAttribute('aria-hidden', 'false')

    fireEvent.mouseLeave(screen.getByTestId('triggerElement'))
    expect(bodyEl).not.toHaveClass('is-visible')
    expect(bodyEl).toHaveAttribute('aria-hidden', 'true')
  })

  it('shows tooltip on focus', () => {
    render(<Tooltip label="Click me">My Tooltip</Tooltip>)
    fireEvent.focus(screen.getByTestId('triggerElement'))

    const bodyEl = screen.queryByRole('tooltip')
    expect(bodyEl).toHaveClass('is-visible')
    expect(bodyEl).toBeVisible()
    expect(bodyEl).toHaveAttribute('aria-hidden', 'false')
  })

  it('hides tooltip on blur', () => {
    render(<Tooltip label="Click me">My Tooltip</Tooltip>)
    const bodyEl = screen.queryByRole('tooltip', { hidden: true })

    fireEvent.focus(screen.getByTestId('triggerElement'))
    expect(bodyEl).toHaveClass('is-visible')
    expect(bodyEl).toHaveAttribute('aria-hidden', 'false')

    fireEvent.blur(screen.getByTestId('triggerElement'))

    expect(bodyEl).not.toHaveClass('is-visible')
    expect(bodyEl).toHaveAttribute('aria-hidden', 'true')
  })

  it('hides tooltip on keydown after focus', () => {
    render(<Tooltip label="Click me">My Tooltip</Tooltip>)
    const bodyEl = screen.queryByRole('tooltip', { hidden: true })

    fireEvent.focus(screen.getByTestId('triggerElement'))
    expect(bodyEl).toHaveClass('is-visible')
    expect(bodyEl).toHaveAttribute('aria-hidden', 'false')

    fireEvent.keyDown(screen.getByTestId('triggerElement'), { key: 'Escape' })

    expect(bodyEl).not.toHaveClass('is-visible')
    expect(bodyEl).toHaveAttribute('aria-hidden', 'true')
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

      fireEvent.mouseEnter(screen.getByTestId('triggerElement'))
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

    const CustomLink: React.ForwardRefExoticComponent<CustomLinkProps> =
      React.forwardRef(
        (
          { to, className, children, ...tooltipProps }: CustomLinkProps,
          ref
        ) => (
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
      beforeEach(() => {
        jest.clearAllMocks()

        render(
          <Tooltip label="Click me" position="top">
            My Tooltip
          </Tooltip>
        )

        const triggerEl = screen.getByTestId('triggerElement')
        const bodyEl = screen.getByTestId('tooltipBody')

        jest.spyOn(triggerEl, 'offsetHeight', 'get').mockReturnValue(250)
        jest.spyOn(triggerEl, 'offsetWidth', 'get').mockReturnValue(350)
        jest.spyOn(triggerEl, 'offsetLeft', 'get').mockReturnValue(100)

        jest.spyOn(bodyEl, 'offsetHeight', 'get').mockReturnValue(225)
        jest.spyOn(bodyEl, 'offsetWidth', 'get').mockReturnValue(300)
      })

      it('positions on the top', () => {
        fireEvent.mouseEnter(screen.getByTestId('triggerElement'))

        const bodyEl = screen.queryByRole('tooltip')
        expect(bodyEl).toHaveClass('usa-tooltip__body--top')
        expect(bodyEl).toHaveStyle({
          left: '50%',
          top: '-5px',
          margin: '-100px 0 0 -50px',
        })
      })
    })

    describe('when position is bottom', () => {
      beforeEach(() => {
        jest.clearAllMocks()

        render(
          <Tooltip label="Click me" position="bottom">
            My Tooltip
          </Tooltip>
        )

        const triggerEl = screen.getByTestId('triggerElement')
        const bodyEl = screen.getByTestId('tooltipBody')

        jest.spyOn(triggerEl, 'offsetHeight', 'get').mockReturnValue(250)
        jest.spyOn(triggerEl, 'offsetWidth', 'get').mockReturnValue(350)
        jest.spyOn(triggerEl, 'offsetLeft', 'get').mockReturnValue(100)

        jest.spyOn(bodyEl, 'offsetHeight', 'get').mockReturnValue(225)
        jest.spyOn(bodyEl, 'offsetWidth', 'get').mockReturnValue(300)
      })

      it('positions on the bottom', () => {
        fireEvent.mouseEnter(screen.getByTestId('triggerElement'))

        const bodyEl = screen.queryByRole('tooltip')
        expect(bodyEl).toHaveClass('usa-tooltip__body--bottom')
        expect(bodyEl).toHaveStyle({
          left: '50%',
          margin: '5px 0 0 -50px',
        })
      })
    })

    describe('when position is right', () => {
      beforeEach(() => {
        jest.clearAllMocks()

        render(
          <Tooltip label="Click me" position="right">
            My Tooltip
          </Tooltip>
        )

        const triggerEl = screen.getByTestId('triggerElement')
        const bodyEl = screen.getByTestId('tooltipBody')

        jest.spyOn(triggerEl, 'offsetHeight', 'get').mockReturnValue(250)
        jest.spyOn(triggerEl, 'offsetWidth', 'get').mockReturnValue(350)
        jest.spyOn(triggerEl, 'offsetLeft', 'get').mockReturnValue(100)

        jest.spyOn(bodyEl, 'offsetHeight', 'get').mockReturnValue(225)
        jest.spyOn(bodyEl, 'offsetWidth', 'get').mockReturnValue(300)
      })

      it('positions on the right', () => {
        fireEvent.mouseEnter(screen.getByTestId('triggerElement'))

        const bodyEl = screen.queryByRole('tooltip')
        expect(bodyEl).toHaveClass('usa-tooltip__body--right')
        expect(bodyEl).toHaveStyle({
          top: '50%',
          left: '455px',
          margin: '-50px 0 0 0',
        })
      })
    })

    describe('when position is left', () => {
      beforeEach(() => {
        jest.clearAllMocks()

        render(
          <Tooltip label="Click me" position="left">
            My Tooltip
          </Tooltip>
        )

        const triggerEl = screen.getByTestId('triggerElement')
        const bodyEl = screen.getByTestId('tooltipBody')

        jest.spyOn(triggerEl, 'offsetHeight', 'get').mockReturnValue(250)
        jest.spyOn(triggerEl, 'offsetWidth', 'get').mockReturnValue(350)
        jest.spyOn(triggerEl, 'offsetLeft', 'get').mockReturnValue(100)

        jest.spyOn(bodyEl, 'offsetHeight', 'get').mockReturnValue(225)
        jest.spyOn(bodyEl, 'offsetWidth', 'get').mockReturnValue(300)
      })

      it('positions on the left', () => {
        fireEvent.mouseEnter(screen.getByTestId('triggerElement'))

        const bodyEl = screen.queryByRole('tooltip')
        expect(bodyEl).toHaveClass('usa-tooltip__body--left')
        expect(bodyEl).toHaveStyle({
          top: '50%',
          left: '-5px',
          margin: '-50px 0 0 -100px',
        })
      })
    })
  })

  describe('finding the best position', () => {
    beforeEach(() => {
      jest.clearAllMocks()

      render(
        <Tooltip label="Click me" position="left">
          My Tooltip
        </Tooltip>
      )

      const triggerEl = screen.getByTestId('triggerElement')
      const bodyEl = screen.getByTestId('tooltipBody')

      jest.spyOn(triggerEl, 'offsetHeight', 'get').mockReturnValue(250)
      jest.spyOn(triggerEl, 'offsetWidth', 'get').mockReturnValue(350)
      jest.spyOn(triggerEl, 'offsetLeft', 'get').mockReturnValue(100)

      jest.spyOn(bodyEl, 'offsetHeight', 'get').mockReturnValue(225)
      jest.spyOn(bodyEl, 'offsetWidth', 'get').mockReturnValue(300)
    })

    it('tries to position to the top first', () => {
      mockedIsElementInViewport.mockReturnValueOnce(false) // Intended position

      fireEvent.mouseEnter(screen.getByTestId('triggerElement'))

      const bodyEl = screen.queryByRole('tooltip')
      expect(bodyEl).toHaveClass('usa-tooltip__body--top')
      expect(bodyEl).toHaveStyle({
        left: '50%',
        top: '-5px',
        margin: '-100px 0 0 -50px',
      })
    })

    it('tries to position to the bottom second', () => {
      mockedIsElementInViewport.mockReturnValueOnce(false) // Intended position
      mockedIsElementInViewport.mockReturnValueOnce(false) // Tried top

      fireEvent.mouseEnter(screen.getByTestId('triggerElement'))

      const bodyEl = screen.queryByRole('tooltip')
      expect(bodyEl).toHaveClass('usa-tooltip__body--bottom')
      expect(bodyEl).toHaveStyle({
        left: '50%',
        margin: '5px 0 0 -50px',
      })
    })

    it('tries to position to the right third', () => {
      mockedIsElementInViewport.mockReturnValueOnce(false) // Intended position
      mockedIsElementInViewport.mockReturnValueOnce(false) // Tried top
      mockedIsElementInViewport.mockReturnValueOnce(false) // Tried bottom

      fireEvent.mouseEnter(screen.getByTestId('triggerElement'))

      const bodyEl = screen.queryByRole('tooltip')
      expect(bodyEl).toHaveClass('usa-tooltip__body--right')
      expect(bodyEl).toHaveStyle({
        top: '50%',
        left: '455px',
        margin: '-50px 0 0 0',
      })
    })

    it('tries to position to the left fourth', () => {
      mockedIsElementInViewport.mockReturnValueOnce(false) // Intended position
      mockedIsElementInViewport.mockReturnValueOnce(false) // Tried top
      mockedIsElementInViewport.mockReturnValueOnce(false) // Tried bottom
      mockedIsElementInViewport.mockReturnValueOnce(false) // Tried right

      fireEvent.mouseEnter(screen.getByTestId('triggerElement'))

      const bodyEl = screen.queryByRole('tooltip')
      expect(bodyEl).toHaveClass('usa-tooltip__body--left')
      expect(bodyEl).toHaveStyle({
        top: '50%',
        left: '-5px',
        margin: '-50px 0 0 -100px',
      })
    })

    it('adds the wrap class if none of the positions worked', () => {
      mockedIsElementInViewport.mockReturnValueOnce(false) // Intended position
      mockedIsElementInViewport.mockReturnValueOnce(false) // Tried top
      mockedIsElementInViewport.mockReturnValueOnce(false) // Tried bottom
      mockedIsElementInViewport.mockReturnValueOnce(false) // Tried right
      mockedIsElementInViewport.mockReturnValueOnce(false) // Tried left
      mockedIsElementInViewport.mockReturnValueOnce(false) // Tried intended again

      fireEvent.mouseEnter(screen.getByTestId('triggerElement'))

      const bodyEl = screen.queryByRole('tooltip')
      expect(bodyEl).toHaveClass('usa-tooltip__body--top')
      expect(bodyEl).toHaveClass('usa-tooltip__body--wrap')
      expect(bodyEl).toHaveStyle({
        left: '50%',
        top: '-5px',
        margin: '-100px 0 0 -50px',
      })
    })
  })
})
