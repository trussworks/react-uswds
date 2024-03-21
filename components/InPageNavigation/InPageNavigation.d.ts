import React from '../../../node_modules/react';
import { HeadingLevel } from '../../types/headingLevel';
type InPageNavigationProps = {
    className?: string;
    content: JSX.Element;
    headingLevel?: HeadingLevel;
    mainProps?: JSX.IntrinsicElements['main'];
    navProps?: JSX.IntrinsicElements['nav'];
    rootMargin?: string;
    scrollOffset?: string;
    threshold?: number;
    title?: string;
};
export declare const InPageNavigation: ({ className, content, headingLevel, mainProps, navProps, rootMargin, scrollOffset, threshold, title, ...divProps }: InPageNavigationProps & Omit<JSX.IntrinsicElements['div'], 'content'>) => React.ReactElement;
export default InPageNavigation;
