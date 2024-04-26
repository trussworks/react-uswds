import { default as BreadcrumbLink } from '../BreadcrumbLink/BreadcrumbLink';
import { default as React } from 'react';

declare const _default: {
    title: string;
    component: ({ variant, children, className, navProps, listProps, }: import('./BreadcrumbBar').BreadcrumbBarProps) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
    subcomponents: {
        Breadcrumb: ({ children, current, className, ...listItemProps }: import('../Breadcrumb/Breadcrumb').BreadcrumbProps) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
        BreadcrumbLink: typeof BreadcrumbLink;
    };
    parameters: {
        docs: {
            description: {
                component: string;
            };
        };
    };
};
export default _default;
export declare const DefaultBreadcrumb: () => React.ReactElement;
export declare const BreadcrumbWithRdfaMetadata: () => React.ReactElement;
export declare const WrappingBreadcrumb: () => React.ReactElement;
export declare const CustomBreadcrumbLinks: () => React.ReactElement;
