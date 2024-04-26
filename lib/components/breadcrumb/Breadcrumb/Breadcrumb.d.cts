import { default as React } from 'react';

export type BreadcrumbProps = {
    children: React.ReactNode;
    className?: string;
    current?: boolean;
} & JSX.IntrinsicElements['li'];
declare const Breadcrumb: ({ children, current, className, ...listItemProps }: BreadcrumbProps) => React.ReactElement;
export default Breadcrumb;
