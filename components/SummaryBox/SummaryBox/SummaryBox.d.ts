import React from 'react';
type SummaryBoxProps = {
    children?: React.ReactNode;
    className?: string;
};
export declare const SummaryBox: ({ children, className, ...divProps }: SummaryBoxProps & JSX.IntrinsicElements['div']) => React.ReactElement;
export default SummaryBox;
