import { default as React } from 'react';

declare const _default: {
    title: string;
    component: ({ className, size, isMobile, links, ...elementAttributes }: import('./FooterNav').FooterNavProps) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
    parameters: {
        docs: {
            description: {
                component: string;
            };
        };
    };
};
export default _default;
export declare const SlimFooterNav: () => React.ReactElement;
export declare const MediumFooterNav: () => React.ReactElement;
export declare const BigFooterNav: {
    render: () => React.ReactElement;
    parameters: {
        happo: {
            waitForContent: string;
        };
    };
};
