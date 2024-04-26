import { default as React } from 'react';

export type SummaryBoxProps = {
    children?: React.ReactNode;
    className?: string;
} & JSX.IntrinsicElements['div'];
declare const SummaryBox: ({ children, className, ...divProps }: SummaryBoxProps) => React.ReactElement;
export default SummaryBox;
