import { useEffect } from 'react'

import { getScrollbarWidth } from '../modal/utils'

const ACTIVE_CLASS = 'usa-js-mobile-nav--active'

export const useMobileNavScrollLock = (expanded?: boolean): void => {
  useEffect(() => {
    if (!expanded) return

    const { body } = document
    const initialPadding = body.style.paddingRight
    const computedPadding =
      window.getComputedStyle(body).getPropertyValue('padding-right') || '0px'
    const scrollbarWidth = getScrollbarWidth()
    const temporaryPadding = `${
      parseInt(computedPadding.replace(/px/, ''), 10) +
      parseInt(scrollbarWidth.replace(/px/, ''), 10)
    }px`

    body.style.paddingRight = temporaryPadding
    body.classList.add(ACTIVE_CLASS)

    return (): void => {
      body.style.paddingRight = initialPadding
      body.classList.remove(ACTIVE_CLASS)
    }
  }, [expanded])
}
