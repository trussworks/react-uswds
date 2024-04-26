import { default as React } from 'react';

declare const _default: {
    title: string;
    component: ({ basic, extended, basicWithMegaMenu, children, showMobileOverlay, className, ...headerProps }: import('./Header').HeaderProps) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
    parameters: {
        docs: {
            description: {
                component: string;
            };
        };
    };
};
export default _default;
export declare const BasicHeader: () => React.ReactElement;
export declare const BasicHeaderWithMegaMenu: () => React.ReactElement;
export declare const ExtendedHeader: () => React.ReactElement;
export declare const ExtendedHeaderWithMegaMenu: () => React.ReactElement;
