import React, {
  createElement,
  ForwardRefExoticComponent,
  ReactElement,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react'
import classnames from 'classnames'
import { isElementInViewport } from './utils'

type TooltipProps<T> = {
  label: string
  position?: 'top' | 'bottom' | 'left' | 'right' | undefined
  wrapperclasses?: string
  className?: string
  children: ReactNode
} & T

interface WithCustomTooltipProps<T> {
  asCustom: ForwardRefExoticComponent<T>
}

export type DefaultTooltipProps = TooltipProps<JSX.IntrinsicElements['button']>

export type CustomTooltipProps<T> = TooltipProps<T> & WithCustomTooltipProps<T>

export function isCustomProps<T>(
  props: DefaultTooltipProps | CustomTooltipProps<T>
): props is CustomTooltipProps<T> {
  return 'asCustom' in props
}

const TRIANGLE_SIZE = 5
const SPACER = 2

export function Tooltip(props: DefaultTooltipProps): ReactElement
export function Tooltip<T>(props: CustomTooltipProps<T>): ReactElement
export function Tooltip<FCProps = DefaultTooltipProps>(
  props: DefaultTooltipProps | CustomTooltipProps<FCProps>
): ReactElement {
  const wrapperRef = useRef<HTMLElement>(null)
  const triggerElementRef = useRef<HTMLElement & HTMLButtonElement>(null)
  const tooltipBodyRef = useRef<HTMLElement>(null)
  const tooltipID = useRef(
    `tooltip-${Math.floor(Math.random() * 900000) + 100000}`
  )

  const [isVisible, setVisible] = useState(false)
  const [effectivePosition, setEffectivePosition] = useState<
    'top' | 'bottom' | 'left' | 'right' | undefined
  >(undefined)
  const [wrapTooltip, setWrapTooltip] = useState(false)

  const { position, wrapperclasses, className } = props

  useEffect(() => {
    if (effectivePosition === 'top' || effectivePosition === 'bottom') {
      if (
        tooltipBodyRef.current &&
        !isElementInViewport(tooltipBodyRef.current)
      ) {
        setWrapTooltip(true)
      }
    }
  }, [effectivePosition])

  useEffect(() => {
    if (!isVisible) {
      // Hide tooltip
      setWrapTooltip(false)
    } else {
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
          window
            .getComputedStyle(tooltipTrigger)
            .getPropertyValue('margin-top'),
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
        const tooltipBodyWidth = tooltipBody.offsetWidth
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
          setEffectivePosition('top')
          e.style.marginLeft = `${adjustHorizontalCenter}px`
          e.style.marginBottom = `${
            adjustToEdgeY + offsetForBottomMargin + offsetForBottomPadding
          }px`
        }
        /**
         * Positions tooltip at the bottom
         * We check if the element is in theviewport so we know whether or not we
         * need to constrain the width
         */
        const positionBottom = (e: HTMLElement): void => {
          setEffectivePosition('bottom')
          e.style.marginLeft = `${adjustHorizontalCenter}px`
          e.style.marginTop = `${
            adjustToEdgeY + offsetForTopMargin + offsetForTopPadding
          }px`
        }
        /**
         * Positions tooltip at the right
         */
        const positionRight = (e: HTMLElement): void => {
          setEffectivePosition('right')
          e.style.marginBottom = '0'
          e.style.marginLeft = `${adjustToEdgeX + leftOffset}px`
          e.style.bottom = `${
            (tooltipHeight - offsetForTooltipBodyHeight) / 2 +
            offsetForBottomMargin +
            offsetForBottomPadding
          }px`
        }

        /**
         * Positions tooltip at the left
         */
        const positionLeft = (e: HTMLElement): void => {
          setEffectivePosition('left')
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
            offsetForBottomMargin +
            offsetForBottomPadding
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
    }
  }, [isVisible])

  const activateTooltip = (): void => {
    setVisible(true)
  }
  const deactivateTooltip = (): void => {
    setVisible(false)
  }

  const wrapperClasses = classnames('usa-tooltip', wrapperclasses)

  const tooltipBodyClasses = classnames('usa-tooltip__body', {
    'is-set': isVisible,
    'usa-tooltip__body--top': effectivePosition === 'top',
    'usa-tooltip__body--bottom': effectivePosition === 'bottom',
    'usa-tooltip__body--right': effectivePosition === 'right',
    'usa-tooltip__body--left': effectivePosition === 'left',
    'is-visible': isVisible,
    'usa-tooltip__body--wrap': isVisible && wrapTooltip,
  })

  if (isCustomProps(props)) {
    const { label, asCustom, children, ...remainingProps } = props
    const customProps: FCProps = (remainingProps as unknown) as FCProps

    const triggerClasses = classnames('usa-tooltip__trigger', className)

    const triggerElement = createElement(
      asCustom,
      {
        ...customProps,
        ref: triggerElementRef,
        'data-testid': 'triggerElement',
        'aria-describedby': tooltipID.current,
        tabIndex: 0,
        title: '',
        onMouseEnter: () => activateTooltip(),
        onMouseOver: () => activateTooltip(),
        onFocus: () => activateTooltip(),
        onMouseLeave: () => deactivateTooltip(),
        onBlur: () => deactivateTooltip(),
        onKeyDown: () => deactivateTooltip(),
        className: triggerClasses,
      },
      children
    )

    return (
      <span
        data-testid="tooltipWrapper"
        ref={wrapperRef}
        className={wrapperClasses}>
        {triggerElement}
        <span
          data-testid="tooltipBody"
          title={label}
          id={tooltipID.current}
          ref={tooltipBodyRef}
          className={tooltipBodyClasses}
          role="tooltip"
          aria-hidden={!isVisible}>
          {label}
        </span>
      </span>
    )
  } else {
    const { label, children, ...remainingProps } = props

    const triggerClasses = classnames(
      'usa-button',
      'usa-tooltip__trigger',
      className
    )

    return (
      <span
        data-testid="tooltipWrapper"
        ref={wrapperRef}
        className={wrapperClasses}>
        <button
          {...remainingProps}
          data-testid="triggerElement"
          ref={triggerElementRef}
          aria-describedby={tooltipID.current}
          tabIndex={0}
          type="button"
          className={triggerClasses}
          title=""
          onMouseEnter={activateTooltip}
          onMouseOver={activateTooltip}
          onFocus={activateTooltip}
          onMouseLeave={deactivateTooltip}
          onBlur={deactivateTooltip}
          onKeyDown={deactivateTooltip}>
          {children}
        </button>
        <span
          data-testid="tooltipBody"
          title={label}
          id={tooltipID.current}
          ref={tooltipBodyRef}
          className={tooltipBodyClasses}
          role="tooltip"
          aria-hidden={!isVisible}>
          {label}
        </span>
      </span> // the span that wraps the element with have the tooltip class
    )
  }
}

Tooltip.defaultProps = {
  position: 'top',
}

Tooltip.displayName = 'Tooltip'
