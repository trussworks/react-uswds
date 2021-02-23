import React, {
  Children,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from 'react'
import classnames from 'classnames'
interface TooltipProps {
  label: string
  position?: 'top' | 'bottom' | 'left' | 'right'
  className?: string
  children: ReactElement
}

const TRIANGLE_SIZE = 5
const SPACER = 2

function isElementInViewport(
  el: HTMLElement,
  win = window,
  docEl = document.documentElement
): boolean {
  const rect = el.getBoundingClientRect()
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (win.innerHeight || docEl.clientHeight) &&
    rect.right <= (win.innerWidth || docEl.clientWidth)
  )
}

export const Tooltip = (
  props: TooltipProps & JSX.IntrinsicElements['span']
): React.ReactElement => {
  const { label, position, children, ...spanProps } = props
  const wrapperRef = useRef<HTMLElement>(null)
  const triggerElementRef = useRef<HTMLElement>(null)
  const tooltipBodyRef = useRef<HTMLElement>(null)
  const tooltipTrigger = React.cloneElement(Children.only(children), {
    ref: triggerElementRef,
  })
  const [isVisible, setVisible] = useState(false)

  const tooltipClasses = classnames('usa-tooltip__body', {
    'is-set': isVisible,
    'usa-tooltip__body--top': position === 'top',
    'usa-tooltip__body--bottom': position === 'bottom',
    'usa-tooltip__body--right': position === 'right',
    'usa-tooltip__body--left': position === 'left',
    'is-visible': isVisible,
  })

  // try useEffect
  // https://erikmartinjordan.com/parent-child-height-width-react-hooks

  useEffect(() => {
    if (
      triggerElementRef.current &&
      tooltipBodyRef.current &&
      wrapperRef.current
    ) {
      const tooltipTrigger = triggerElementRef.current
      const tooltipBody = tooltipBodyRef.current
      const wrapper = wrapperRef.current
      // Calculate sizing and adjustments for positioning
      const tooltipWidth = tooltipTrigger.offsetWidth
      const tooltipHeight = tooltipTrigger.offsetHeight
      const offsetForTopMargin = Number.parseInt(
        window.getComputedStyle(tooltipTrigger).getPropertyValue('margin-top'),
        10
      )
      const offsetForBottomMargin = Number.parseInt(
        window
          .getComputedStyle(tooltipTrigger)
          .getPropertyValue('margin-bottom'),
        10
      )
      const offsetForTopPadding = Number.parseInt(
        window.getComputedStyle(wrapper).getPropertyValue('padding-top'),
        10
      )
      const offsetForBottomPadding = Number.parseInt(
        window.getComputedStyle(wrapper).getPropertyValue('padding-bottom'),
        10
      )
      // issue dealing with null here
      const offsetForTooltipBodyHeight = Number.parseInt(
        window.getComputedStyle(tooltipBody).getPropertyValue('height'),
        10
      )
      const leftOffset = tooltipTrigger.offsetLeft
      const tooltipBodyWidth = tooltipBodyRef.current.offsetWidth
      const adjustHorizontalCenter = tooltipWidth / 2 + leftOffset
      const adjustToEdgeX = tooltipWidth + TRIANGLE_SIZE + SPACER
      const adjustToEdgeY = tooltipHeight + TRIANGLE_SIZE + SPACER

      /**
       * Positions tooltip at the top
       * We check if the element is in the viewport so we know whether or not we
       * need to constrain the width
       * @param {HTMLElement} e - this is the tooltip body
       */
      const positionTop = (e: HTMLElement): void => {
        e.style.marginLeft = `${adjustHorizontalCenter}px`
        if (!isElementInViewport(e)) {
          e.classList.add('usa-tooltip__body--wrap')
        }
        e.style.marginBottom = `${adjustToEdgeY + offsetForBottomMargin}px`
      }
      /**
       * Positions tooltip at the bottom
       * We check if the element is in theviewport so we know whether or not we
       * need to constrain the width
       */
      const positionBottom = (e: HTMLElement): void => {
        e.style.marginLeft = `${adjustHorizontalCenter}px`
        if (!isElementInViewport(e)) {
          e.classList.add('usa-tooltip__body--wrap')
        }
        e.style.marginTop = `${adjustToEdgeY + offsetForTopMargin}px`
      }
      /**
       * Positions tooltip at the right
       */
      const positionRight = (e: HTMLElement): void => {
        e.style.marginBottom = '0'
        e.style.marginLeft = `${adjustToEdgeX + leftOffset}px`
        e.style.bottom = `${
          (tooltipHeight - offsetForTooltipBodyHeight) / 2 +
          offsetForBottomMargin
        }px`
      }

      /**
       * Positions tooltip at the left
       * @param {HTMLElement} e - this is the tooltip body
       */
      const positionLeft = (e: HTMLElement): void => {
        e.style.marginBottom = '0'
        if (leftOffset > tooltipBodyWidth) {
          e.style.marginLeft = `${
            leftOffset - tooltipBodyWidth - (TRIANGLE_SIZE + SPACER)
          }px`
        } else {
          e.style.marginLeft = `-${
            tooltipBodyWidth - leftOffset + (TRIANGLE_SIZE + SPACER)
          }px`
        }
        e.style.bottom = `${
          (tooltipHeight - offsetForTooltipBodyHeight) / 2 +
          offsetForBottomMargin
        }px`
      }
      /**
       * We try to set the position based on the
       * original intention, but make adjustments
       * if the element is clipped out of the viewport
       */
      switch (position) {
        case 'top':
          positionTop(tooltipBody)
          if (!isElementInViewport(tooltipBody)) {
            positionBottom(tooltipBody)
          }
          break
        case 'bottom':
          positionBottom(tooltipBody)
          if (!isElementInViewport(tooltipBody)) {
            positionTop(tooltipBody)
          }
          break
        case 'right':
          positionRight(tooltipBody)
          if (!isElementInViewport(tooltipBody)) {
            positionLeft(tooltipBody)
            if (!isElementInViewport(tooltipBody)) {
              positionTop(tooltipBody)
            }
          }
          break
        case 'left':
          positionLeft(tooltipBody)
          if (!isElementInViewport(tooltipBody)) {
            positionRight(tooltipBody)
            if (!isElementInViewport(tooltipBody)) {
              positionTop(tooltipBody)
            }
          }
          break

        default:
          // skip default case
          break
      }
    }
  }, [isVisible])

  return (
    <span
      ref={wrapperRef}
      className="usa-tooltip"
      {...spanProps}
      onMouseEnter={() => {
        setVisible(true)
      }}
      onMouseLeave={() => {
        setVisible(false)
      }}>
      {tooltipTrigger}
      <span ref={tooltipBodyRef} className={tooltipClasses} role="tooltip">
        {label}
      </span>
    </span> // the span that wraps the element with have the tooltip class
  )
}

Tooltip.defaultProps = {
  position: 'top',
}

export default Tooltip
