import React from '../../../node_modules/react';
type ButtonGroupProps = {
    children: React.ReactNode;
    className?: string;
    type?: 'default' | 'segmented';
} & JSX.IntrinsicElements['ul'];
export declare const ButtonGroup: ({ className, children, type, ...restProps }: ButtonGroupProps) => React.ReactElement;
export default ButtonGroup;
