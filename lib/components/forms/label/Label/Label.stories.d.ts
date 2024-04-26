import { default as React } from 'react';

declare const _default: {
    title: string;
    component: ({ children, htmlFor, className, error, hint, srOnly, requiredMarker, ...labelProps }: import('./Label').LabelProps) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
    parameters: {
        docs: {
            description: {
                component: string;
            };
        };
    };
};
export default _default;
export declare const DefaultLabel: () => React.ReactElement;
export declare const Error: () => React.ReactElement;
export declare const WithHint: () => React.ReactElement;
export declare const WithRequiredMarker: () => React.ReactElement;
