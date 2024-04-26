import { default as React } from 'react';

export type InputPrefixProps = {
    className?: string;
    children: React.ReactNode;
} & JSX.IntrinsicElements['div'];
declare const InputPrefix: ({ className, children, ...divProps }: InputPrefixProps) => React.ReactElement;
export default InputPrefix;
