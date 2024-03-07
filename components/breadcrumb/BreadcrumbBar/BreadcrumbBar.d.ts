import React, { ReactElement } from 'react';
import { BreadcrumbProps } from '../Breadcrumb/Breadcrumb';
type BreadcrumbBarProps = {
    children: ReactElement<BreadcrumbProps> | ReactElement<BreadcrumbProps>[];
    variant?: 'default' | 'wrap';
    className?: string;
    navProps?: JSX.IntrinsicElements['nav'];
    listProps?: JSX.IntrinsicElements['ol'];
};
export declare const BreadcrumbBar: ({ variant, children, className, navProps, listProps, }: BreadcrumbBarProps) => React.ReactElement;
export {};
