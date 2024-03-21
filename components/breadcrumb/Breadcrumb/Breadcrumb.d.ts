import React from '../../../../node_modules/react';
export interface BreadcrumbProps {
    children: React.ReactNode;
    className?: string;
    current?: boolean;
}
export declare const Breadcrumb: ({ children, current, className, ...listItemProps }: BreadcrumbProps & JSX.IntrinsicElements['li']) => React.ReactElement;
