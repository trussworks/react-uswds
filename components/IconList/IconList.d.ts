import React, { ReactElement } from 'react';
interface IconListProps {
    children: React.ReactNode;
    className?: string;
}
export declare const IconList: ({ children, className, }: IconListProps & JSX.IntrinsicElements['ul']) => ReactElement;
export default IconList;
