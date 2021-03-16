import React, {
  createElement,
  ForwardRefExoticComponent,
  ReactElement,
  ReactNode,
  RefObject,
  useEffect,
  useRef,
  useState,
} from 'react'
import classnames from 'classnames'
import { isElementInViewport } from './utils'

type TooltipProps<T> = {
  label: string
  position?: 'top' | 'bottom' | 'left' | 'right' | undefined
  className?: string
  wrapperclasses?: string
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
  const tooltipBodyRef = useRef<HTMLElement>(null)
  const tooltipID = useRef(
    `tooltip-${Math.floor(Math.random() * 900000) + 100000}`
  )

  const [isVisible, setVisible] = useState(false)

  const useTooltip = (
    triggerElementRef: RefObject<HTMLElement>,
    position: 'top' | 'bottom' | 'left' | 'right' | undefined
  ): void => {
    useEffect(() => {
      let tooltipPosition = position

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
         * Position the tooltip body when the trigger is hovered
         * Removes old positioning classnames and reapplies. This allows
         * positioning to change in case the user resizes browser or DOM manipulation
         * causes tooltip to get clipped from viewport
         *
         * @param {string} setPos - can be "top", "bottom", "right", "left"
         */
        const setPositionClass = (
          setPos: 'top' | 'bottom' | 'left' | 'right'
        ): void => {
          tooltipBody.classList.remove(`usa-tooltip__body--${tooltipPosition}`)
          tooltipPosition = setPos
          tooltipBody.classList.add(`usa-tooltip__body--${setPos}`)
        }

        // Apply additional class names to wrapper element
        if (props.wrapperclasses) {
          const classesArray = props.wrapperclasses.split(' ')
          classesArray.forEach((classname) => wrapper.classList.add(classname))
        }

        /**
         * Positions tooltip at the top
         * We check if the element is in the viewport so we know whether or not we
         * need to constrain the width
         * @param {HTMLElement} e - this is the tooltip body
         */
        const positionTop = (e: HTMLElement): void => {
          setPositionClass('top')
          e.style.marginLeft = `${adjustHorizontalCenter}px`
          if (!isElementInViewport(e)) {
            e.classList.add('usa-tooltip__body--wrap')
          }
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
          setPositionClass('bottom')
          e.style.marginLeft = `${adjustHorizontalCenter}px`
          if (!isElementInViewport(e)) {
            e.classList.add('usa-tooltip__body--wrap')
          }
          e.style.marginTop = `${
            adjustToEdgeY + offsetForTopMargin + offsetForTopPadding
          }px`
        }
        /**
         * Positions tooltip at the right
         */
        const positionRight = (e: HTMLElement): void => {
          setPositionClass('right')
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
          setPositionClass('left')
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
    }, [isVisible])
  }

  if (isCustomProps(props)) {
    const triggerElementRef = useRef<HTMLElement>(null)
    const { label, position, asCustom, children, ...remainingProps } = props
    const customProps: FCProps = (remainingProps as unknown) as FCProps

    const tooltipClasses = classnames('usa-tooltip__body', {
      'is-set': isVisible,
      'usa-tooltip__body--top': position === 'top',
      'usa-tooltip__body--bottom': position === 'bottom',
      'usa-tooltip__body--right': position === 'right',
      'usa-tooltip__body--left': position === 'left',
      'is-visible': isVisible,
    })
    const activateTooltip = (): void => {
      setVisible(true)
    }
    const deactivateTooltip = (): void => {
      setVisible(false)
    }

    useTooltip(triggerElementRef, position)

    const triggerElement = createElement(
      asCustom,
      {
        ref: triggerElementRef,
        'data-testid': 'triggerElement',
        onMouseEnter: () => activateTooltip(),
        onMouseOver: () => activateTooltip(),
        onFocus: () => activateTooltip(),
        onMouseLeave: () => deactivateTooltip(),
        onBlur: () => deactivateTooltip(),
        onKeyDown: () => deactivateTooltip(),
        ...customProps,
      },
      children
    )

    return (
      <span
        data-testid="tooltipWrapper"
        ref={wrapperRef}
        className="usa-tooltip"
        role="tooltip">
        {triggerElement}
        <span
          data-testid="tooltipBody"
          title={label}
          id={tooltipID.current}
          ref={tooltipBodyRef}
          className={tooltipClasses}>
          {label}
        </span>
      </span>
    )
  } else {
    const triggerElementRef = useRef<HTMLButtonElement>(null)
    const { label, position, children, ...remainingProps } = props
    const tooltipClasses = classnames('usa-tooltip__body', {
      'is-set': isVisible,
      'usa-tooltip__body--top': position === 'top',
      'usa-tooltip__body--bottom': position === 'bottom',
      'usa-tooltip__body--right': position === 'right',
      'usa-tooltip__body--left': position === 'left',
      'is-visible': isVisible,
    })

    const activateTooltip = (): void => {
      setVisible(true)
    }
    const deactivateTooltip = (): void => {
      setVisible(false)
    }

    useTooltip(triggerElementRef, position)
    return (
      <span
        data-testid="tooltipWrapper"
        ref={wrapperRef}
        className="usa-tooltip"
        role="tooltip">
        <button
          {...remainingProps}
          data-testid="triggerElement"
          ref={triggerElementRef}
          aria-describedby={tooltipID.current}
          type="button"
          className="usa-button usa-tooltip__trigger"
          title={label}
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
          className={tooltipClasses}>
          {label}
        </span>
      </span> // the span that wraps the element with have the tooltip class
    )
  }
}
Tooltip.defaultProps = {
  position: 'top',
}

Tooltip.DisplayName = 'Tooltip'
