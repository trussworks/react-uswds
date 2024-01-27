import { useRef, useState, useEffect } from 'react'
import { calculateMarginOffset, isElementInViewport } from './utils'

const TRIANGLE_SIZE = 5

function useTooltip(
  position: 'top' | 'bottom' | 'left' | 'right' | undefined = 'top'
) {
  const triggerElementRef = useRef<HTMLElement>(null)
  const tooltipBodyRef = useRef<HTMLElement>(null)
  const tooltipID = useRef(
    `tooltip-${Math.floor(Math.random() * 900000) + 100000}`
  )

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
        console.log('recalc position')
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

  return {
    tooltipBodyRef,
    triggerElementRef,
    setVisible,
    tooltipID: tooltipID.current,
    isElementInViewport,
    isShown,
    isVisible,
    wrapTooltip,
    positionStyles,
    effectivePosition,
    positionBottom,
    positionLeft,
    positionRight,
    positionTop,
    setIsShown,
    setEffectivePosition,
    setPositionStyles,
    setWrapTooltip,
  }
}

export default useTooltip
