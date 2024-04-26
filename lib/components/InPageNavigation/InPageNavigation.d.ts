import { HeadingLevel } from '../../types/headingLevel.js';
import { default as React } from 'react';

export type InPageNavigationProps = {
    className?: string;
    content: JSX.Element;
    headingLevel?: HeadingLevel;
    mainProps?: JSX.IntrinsicElements['main'];
    navProps?: JSX.IntrinsicElements['nav'];
    rootMargin?: string;
    scrollOffset?: string;
    threshold?: number;
    title?: string;
} & Omit<JSX.IntrinsicElements['div'], 'content'>;
declare const InPageNavigation: ({ className, content, headingLevel, mainProps, navProps, rootMargin, scrollOffset, threshold, title, ...divProps }: InPageNavigationProps) => React.ReactElement;
export default InPageNavigation;
