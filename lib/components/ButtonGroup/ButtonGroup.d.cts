import { default as React } from 'react';

export type ButtonGroupProps = {
    children: React.ReactNode;
    className?: string;
    type?: 'default' | 'segmented';
} & JSX.IntrinsicElements['ul'];
declare const ButtonGroup: ({ className, children, type, ...restProps }: ButtonGroupProps) => React.ReactElement;
export default ButtonGroup;
