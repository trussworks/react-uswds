import { default as React } from 'react';

export type InputSuffixProps = {
    className?: string;
    children: React.ReactNode;
} & JSX.IntrinsicElements['div'];
declare const InputSuffix: ({ className, children, ...divProps }: InputSuffixProps) => React.ReactElement;
export default InputSuffix;
