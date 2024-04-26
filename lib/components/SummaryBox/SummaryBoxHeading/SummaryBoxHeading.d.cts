import { HeadingLevel } from '../../../types/headingLevel.js';
import { default as React, ReactNode } from 'react';

export type SummaryBoxHeadingProps = {
    children: ReactNode;
    className?: string;
    headingLevel: HeadingLevel;
} & JSX.IntrinsicElements['h1'];
declare const SummaryBoxHeading: ({ children, className, headingLevel, ...h3Props }: SummaryBoxHeadingProps) => React.ReactElement;
export default SummaryBoxHeading;
