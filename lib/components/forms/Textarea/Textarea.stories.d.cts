import { default as React } from 'react';

declare const _default: {
    title: string;
    component: ({ id, name, className, error, success, children, inputRef, ...inputProps }: import('./Textarea').TextareaProps) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
    parameters: {
        docs: {
            description: {
                component: string;
            };
        };
    };
};
export default _default;
export declare const DefaultTextarea: () => React.ReactElement;
export declare const WithDefaultValue: () => React.ReactElement;
export declare const WithPlaceholder: () => React.ReactElement;
export declare const Error: () => React.ReactElement;
export declare const Success: () => React.ReactElement;
export declare const Disabled: () => React.ReactElement;
export declare const Readonly: () => React.ReactElement;
