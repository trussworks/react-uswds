import { default as React } from 'react';

declare const _default: {
    title: string;
    component: ({ className, children, ...divProps }: import('./InputPrefix').InputPrefixProps) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
    parameters: {
        docs: {
            description: {
                component: string;
            };
        };
    };
};
export default _default;
export declare const InputWithTextInputPrefix: () => React.ReactElement;
export declare const InputWithTextInputPrefixError: () => React.ReactElement;
export declare const InputWithIconInputPrefix: () => React.ReactElement;
