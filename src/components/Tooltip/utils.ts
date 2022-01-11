export const isElementInViewport = (
  el: HTMLElement,
  win = window,
  docEl = document.documentElement
): boolean => {
  const rect = el.getBoundingClientRect()
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (win.innerHeight || docEl.clientHeight) &&
    rect.right <= (win.innerWidth || docEl.clientWidth)
  )
}

// https://github.com/uswds/uswds/blob/v2.11.2/src/js/components/tooltip.js

/**
 * get margin offset calculations
 *
 * @param {HTMLElement} target - this is the tooltip body
 * @param {String} propertyValue - this is the tooltip body
 */

const offsetMargin = (target: HTMLElement, propertyValue: string) =>
  parseInt(window.getComputedStyle(target).getPropertyValue(propertyValue), 10)

// offsetLeft = the left position, and margin of the element, the left
// padding, scrollbar and border of the offsetParent element
// offsetWidth = The offsetWidth property returns the viewable width of an
// element in pixels, including padding, border and scrollbar, but not
// the margin.

/**
 * Calculate margin offset
 * tooltip trigger margin(position) offset + tooltipBody offsetWidth
 * @param {String} marginPosition
 * @param {Number} tooltipBodyOffset
 * @param {HTMLElement} trigger
 */

export const calculateMarginOffset = (
  marginPosition: string,
  tooltipBodyOffset: number,
  trigger: HTMLElement
): number => {
  const offset =
    offsetMargin(trigger, `margin-${marginPosition}`) > 0
      ? tooltipBodyOffset - offsetMargin(trigger, `margin-${marginPosition}`)
      : tooltipBodyOffset

  return offset
}
