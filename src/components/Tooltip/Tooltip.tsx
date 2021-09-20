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
  const [isShown, setIsShown] = useState(false)
  const [effectivePosition, setEffectivePosition] = useState<
    'top' | 'bottom' | 'left' | 'right' | undefined
  >(undefined)
  const [wrapTooltip, setWrapTooltip] = useState(false)
  const [positionStyles, setPositionStyles] = useState({})

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
    if (isVisible) setIsShown(true)
  }, [effectivePosition, positionStyles])

  useEffect(() => {
    if (!isVisible) {
      // Hide tooltip
      setIsShown(false)
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

        const positionTop = (): void => {
          setEffectivePosition('top')
          setPositionStyles({
            marginLeft: `${adjustHorizontalCenter}px`,
            marginBottom: `${
              adjustToEdgeY + offsetForBottomMargin + offsetForBottomPadding
            }px`,
          })
        }

        const positionBottom = (): void => {
          setEffectivePosition('bottom')
          setPositionStyles({
            marginLeft: `${adjustHorizontalCenter}px`,
            marginTop: `${
              adjustToEdgeY + offsetForTopMargin + offsetForTopPadding
            }px`,
          })
        }

        const positionRight = (): void => {
          setEffectivePosition('right')
          setPositionStyles({
            marginBottom: '0',
            marginLeft: `${adjustToEdgeX + leftOffset}px`,
            bottom: `${
              (tooltipHeight - offsetForTooltipBodyHeight) / 2 +
              offsetForBottomMargin +
              offsetForBottomPadding
            }px`,
          })
        }

        const positionLeft = (): void => {
          setEffectivePosition('left')
          setPositionStyles({
            marginBottom: '0',
            marginLeft:
              leftOffset > tooltipBodyWidth
                ? `${
                    leftOffset - tooltipBodyWidth - (TRIANGLE_SIZE + SPACER)
                  }px`
                : `-${
                    tooltipBodyWidth - leftOffset + (TRIANGLE_SIZE + SPACER)
                  }px`,
            bottom: `${
              (tooltipHeight - offsetForTooltipBodyHeight) / 2 +
              offsetForBottomMargin +
              offsetForBottomPadding
            }px`,
          })
        }

        /**
         * We try to set the position based on the
         * original intention, but make adjustments
         * if the element is clipped out of the viewport
         */
        switch (position) {
          case 'top':
            positionTop()
            if (!isElementInViewport(tooltipBody)) {
              positionBottom()
            }
            break
          case 'bottom':
            positionBottom()
            if (!isElementInViewport(tooltipBody)) {
              positionTop()
            }
            break
          case 'right':
            positionRight()
            if (!isElementInViewport(tooltipBody)) {
              positionLeft()
              if (!isElementInViewport(tooltipBody)) {
                positionTop()
              }
            }
            break
          case 'left':
            positionLeft()
            if (!isElementInViewport(tooltipBody)) {
              positionRight()
              if (!isElementInViewport(tooltipBody)) {
                positionTop()
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

  const showTooltip = (): void => {
    setVisible(true)
  }
  const hideTooltip = (): void => {
    setVisible(false)
  }

  const wrapperClasses = classnames('usa-tooltip', wrapperclasses)

  const tooltipBodyClasses = classnames('usa-tooltip__body', {
    'is-set': isVisible,
    'usa-tooltip__body--top': effectivePosition === 'top',
    'usa-tooltip__body--bottom': effectivePosition === 'bottom',
    'usa-tooltip__body--right': effectivePosition === 'right',
    'usa-tooltip__body--left': effectivePosition === 'left',
    'is-visible': isShown, // isShown is set after positioning updated, to prevent jitter when position changes
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
        onMouseEnter: showTooltip,
        onMouseOver: showTooltip,
        onFocus: showTooltip,
        onMouseLeave: hideTooltip,
        onBlur: hideTooltip,
        onKeyDown: hideTooltip,
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
          aria-hidden={!isVisible}
          style={positionStyles}>
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
          onMouseEnter={showTooltip}
          onMouseOver={showTooltip}
          onFocus={showTooltip}
          onMouseLeave={hideTooltip}
          onBlur={hideTooltip}
          onKeyDown={hideTooltip}>
          {children}
        </button>
        <span
          data-testid="tooltipBody"
          title={label}
          id={tooltipID.current}
          ref={tooltipBodyRef}
          className={tooltipBodyClasses}
          role="tooltip"
          aria-hidden={!isVisible}
          style={positionStyles}>
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
