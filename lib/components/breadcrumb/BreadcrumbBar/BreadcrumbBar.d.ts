import { BreadcrumbProps } from '../Breadcrumb/Breadcrumb.js';
import { default as React, ReactElement } from 'react';

export type BreadcrumbBarProps = {
    children: ReactElement<BreadcrumbProps> | ReactElement<BreadcrumbProps>[];
    variant?: 'default' | 'wrap';
    className?: string;
    navProps?: JSX.IntrinsicElements['nav'];
    listProps?: JSX.IntrinsicElements['ol'];
};
declare const BreadcrumbBar: ({ variant, children, className, navProps, listProps, }: BreadcrumbBarProps) => React.ReactElement;
export default BreadcrumbBar;
