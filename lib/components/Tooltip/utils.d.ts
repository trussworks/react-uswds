import { DefaultTooltipProps, CustomTooltipProps } from './Tooltip.js';

export declare const isElementInViewport: (el: HTMLElement, win?: Window & typeof globalThis, docEl?: HTMLElement) => boolean;
/**
 * Calculate margin offset
 * tooltip trigger margin(position) offset + tooltipBody offsetWidth
 * @param {String} marginPosition
 * @param {Number} tooltipBodyOffset
 * @param {HTMLElement} trigger
 */
export declare const calculateMarginOffset: (marginPosition: string, tooltipBodyOffset: number, trigger: HTMLElement) => number;
export declare function isCustomProps<T>(props: DefaultTooltipProps | CustomTooltipProps<T>): props is CustomTooltipProps<T>;
