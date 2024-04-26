import { default as React } from 'react';

declare const _default: {
    title: string;
    component: ({ children, background, className, ...spanProps }: import('./Tag').TagProps) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
    parameters: {
        docs: {
            description: {
                component: string;
            };
        };
    };
};
export default _default;
export declare const DefaultTag: () => React.ReactElement;
export declare const CustomBg: () => React.ReactElement;
export declare const CustomClass: () => React.ReactElement;
