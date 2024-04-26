import { default as React } from 'react';

declare const _default: {
    title: string;
    component: ({ isBig, className, placeholder, defaultValue, inputName, label, inputId, inputProps, ...props }: import('./SearchField').SearchFieldProps) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
    parameters: {
        docs: {
            description: {
                component: string;
            };
        };
    };
};
export default _default;
export declare const DefaultSearchField: () => React.ReactElement;
export declare const BigSearchField: () => React.ReactElement;
