import { default as React } from 'react';

declare const _default: {
    title: string;
    component: ({ type, heading, headingLevel, cta, children, slim, noIcon, className, validation, ...props }: import('./Alert').AlertProps) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
    parameters: {
        docs: {
            description: {
                component: string;
            };
        };
    };
};
export default _default;
export declare const Success: () => React.ReactElement;
export declare const Warning: () => React.ReactElement;
export declare const Error: () => React.ReactElement;
export declare const Info: () => React.ReactElement;
export declare const Slim: () => React.ReactElement;
export declare const NoIcon: () => React.ReactElement;
export declare const SlimNoIcon: () => React.ReactElement;
export declare const HeadingLevels: () => React.ReactElement;
export declare const WithCTA: () => React.ReactElement;
export declare const WithValidation: () => React.ReactElement;
