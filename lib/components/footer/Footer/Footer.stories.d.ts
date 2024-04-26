import { default as React } from 'react';

declare const _default: {
    title: string;
    component: ({ size, returnToTop, primary, secondary, ...footerAttributes }: import('./Footer').FooterProps) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
    parameters: {
        docs: {
            description: {
                component: string;
            };
        };
    };
};
export default _default;
export declare const SlimFooter: () => React.ReactElement;
export declare const MediumFooter: () => React.ReactElement;
export declare const BigFooter: () => React.ReactElement;
