import React from 'react';
interface SummaryBoxTextProps {
    children?: React.ReactNode;
    className?: string;
}
export declare const SummaryBoxContent: ({ children, className, ...divProps }: SummaryBoxTextProps & JSX.IntrinsicElements['div']) => React.ReactElement;
export default SummaryBoxContent;
