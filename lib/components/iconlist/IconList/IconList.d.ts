import { default as React, ReactElement } from 'react';

export type IconListProps = {
    children: React.ReactNode;
    className?: string;
} & JSX.IntrinsicElements['ul'];
declare const IconList: ({ children, className, ...props }: IconListProps) => ReactElement;
export default IconList;
