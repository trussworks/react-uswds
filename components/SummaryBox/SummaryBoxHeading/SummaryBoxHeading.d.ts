import React, { ReactNode } from 'react';
import { HeadingLevel } from '../../../types/headingLevel';
interface SummaryBoxHeadingProps {
    children: ReactNode;
    className?: string;
    headingLevel: HeadingLevel;
}
export declare const SummaryBoxHeading: ({ children, className, headingLevel, ...h3Props }: SummaryBoxHeadingProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => React.ReactElement;
export default SummaryBoxHeading;
