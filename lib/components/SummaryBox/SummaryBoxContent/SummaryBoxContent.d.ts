import { default as React } from 'react';

export type SummaryBoxTextProps = {
    children?: React.ReactNode;
    className?: string;
} & JSX.IntrinsicElements['div'];
declare const SummaryBoxContent: ({ children, className, ...divProps }: SummaryBoxTextProps) => React.ReactElement;
export default SummaryBoxContent;
