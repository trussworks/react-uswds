import React, {
  createElement,
  ForwardRefExoticComponent,
  ReactNode,
  useEffect,
  useRef,
  useState,
  JSX,
} from 'react'
import classnames from 'classnames'

import { isElementInViewport, calculateMarginOffset } from './utils'

type TooltipProps<T> = {
  label: ReactNode
  title?: string
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
const DEFAULT_POSITION = 'top'

// useId was introduced in React 18 - polyfill for older versions
const genId = (): string => {
  if (React.useId) {
    return React.useId()
  } else {
    return `${Math.floor(Math.random() * 900000) + 100000}`
  }
}

export function Tooltip(props: DefaultTooltipProps): JSX.Element
export function Tooltip<T>(props: CustomTooltipProps<T>): JSX.Element
export function Tooltip<
  FCProps extends React.PropsWithChildren<object> = DefaultTooltipProps,
>({
  position = DEFAULT_POSITION,
  wrapperclasses,
  className,
  ...props
}: DefaultTooltipProps | CustomTooltipProps<FCProps>): JSX.Element {
  const triggerElementRef = useRef<HTMLElement & HTMLButtonElement>(null)
  const tooltipBodyRef = useRef<HTMLElement>(null)
  const tooltipID = useRef(`tooltip-${genId()}`)

  const [isVisible, setVisible] = useState(false)
  const [isShown, setIsShown] = useState(false)
  const [effectivePosition, setEffectivePosition] = useState<
    'top' | 'bottom' | 'left' | 'right' | undefined
  >(undefined)
  const [positioningAttempts, setPositionAttempts] = useState(0)
  const [wrapTooltip, setWrapTooltip] = useState(false)
  const [positionStyles, setPositionStyles] = useState({})

  const positionTop = (e: HTMLElement, triggerEl: HTMLElement): void => {
    const topMargin = calculateMarginOffset('top', e.offsetHeight, triggerEl)
    const leftMargin = calculateMarginOffset('left', e.offsetWidth, triggerEl)

    setEffectivePosition('top')
    setPositionStyles({
      left: `50%`,
      top: `-${TRIANGLE_SIZE}px`,
      margin: `-${topMargin}px 0 0 -${leftMargin / 2}px`,
    })
  }

  const positionBottom = (e: HTMLElement, triggerEl: HTMLElement): void => {
    const leftMargin = calculateMarginOffset('left', e.offsetWidth, triggerEl)

    setEffectivePosition('bottom')
    setPositionStyles({
      left: `50%`,
      margin: `${TRIANGLE_SIZE}px 0 0 -${leftMargin / 2}px`,
    })
  }

  const positionRight = (e: HTMLElement, triggerEl: HTMLElement): void => {
    const topMargin = calculateMarginOffset('top', e.offsetHeight, triggerEl)

    setEffectivePosition('right')
    setPositionStyles({
      top: `50%`,
      left: `${triggerEl.offsetLeft + triggerEl.offsetWidth + TRIANGLE_SIZE}px`,
      margin: `-${topMargin / 2}px 0 0 0`,
    })
  }

  const positionLeft = (e: HTMLElement, triggerEl: HTMLElement): void => {
    const topMargin = calculateMarginOffset('top', e.offsetHeight, triggerEl)
    const leftMargin = calculateMarginOffset(
      'left',
      triggerEl.offsetLeft > e.offsetWidth
        ? triggerEl.offsetLeft - e.offsetWidth
        : e.offsetWidth,
      triggerEl
    )

    setEffectivePosition('left')
    setPositionStyles({
      top: `50%`,
      left: `-${TRIANGLE_SIZE}px`,
      margin: `-${topMargin / 2}px 0 0 ${
        triggerEl.offsetLeft > e.offsetWidth ? leftMargin : -leftMargin
      }px`,
    })
  }

  const positions = [positionTop, positionBottom, positionRight, positionLeft]
  const MAX_ATTEMPTS = positions.length

  useEffect(() => {
    // When position/styles change, check if in viewport
    if (isVisible && triggerElementRef.current && tooltipBodyRef.current) {
      const tooltipTrigger = triggerElementRef.current
      const tooltipBody = tooltipBodyRef.current

      const isInViewport = isElementInViewport(tooltipBody)

      if (isInViewport) {
        // We're good, show the tooltip
        setIsShown(true)
      } else {
        // Try the next position
        const attempt = positioningAttempts
        if (attempt < MAX_ATTEMPTS || wrapTooltip === false) {
          setPositionAttempts((a) => a + 1)

          if (attempt < MAX_ATTEMPTS) {
            const pos = positions[parseInt(`${attempt}`)]
            pos(tooltipBody, tooltipTrigger)
          } else {
            // Try wrapping
            setWrapTooltip(true)
            setPositionAttempts(0)
          }
        } else {
          // No visible position found - this may mean your tooltip contents is too long!
          console.warn(
            'No visible position found - this may mean your tooltip contents is too long!'
          )
        }
      }
    }
  }, [effectivePosition, positionStyles, wrapTooltip])

  useEffect(() => {
    if (!isVisible) {
      // Hide tooltip
      setIsShown(false)
      setWrapTooltip(false)
      setPositionAttempts(0)
    } else {
      // Show tooltip
      if (triggerElementRef.current && tooltipBodyRef.current) {
        const tooltipTrigger = triggerElementRef.current
        const tooltipBody = tooltipBodyRef.current

        switch (position) {
          case 'top':
            positionTop(tooltipBody, tooltipTrigger)
            break
          case 'bottom':
            positionBottom(tooltipBody, tooltipTrigger)
            break
          case 'right':
            positionRight(tooltipBody, tooltipTrigger)
            break
          case 'left':
            positionLeft(tooltipBody, tooltipTrigger)
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
    const { label, title, asCustom, children, ...remainingProps } = props
    const customProps: FCProps = remainingProps as unknown as FCProps

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
      <span data-testid="tooltipWrapper" className={wrapperClasses}>
        {triggerElement}
        <span
          data-testid="tooltipBody"
          title={title ?? (typeof label === 'string' ? label : undefined)}
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
    const { label, title, children, ...remainingProps } = props

    const triggerClasses = classnames(
      'usa-button',
      'usa-tooltip__trigger',
      className
    )

    return (
      // the span that wraps the element will have the tooltip class
      <span data-testid="tooltipWrapper" className={wrapperClasses}>
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
          title={title ?? (typeof label === 'string' ? label : undefined)}
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
  }
}
