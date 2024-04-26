import { default as React } from 'react';

declare const _default: {
    title: string;
    component: ({ className, validationStatus, inputSize, inputRef, ...inputProps }: import('./TextInput').TextInputProps) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
    parameters: {
        docs: {
            description: {
                component: string;
            };
        };
    };
};
export default _default;
export declare const DefaultTextInput: () => React.ReactElement;
export declare const WithDefaultValue: () => React.ReactElement;
export declare const WithPlaceholder: () => React.ReactElement;
export declare const Error: () => React.ReactElement;
export declare const Success: () => React.ReactElement;
export declare const Disabled: () => React.ReactElement;
export declare const Readonly: () => React.ReactElement;
export declare const Password: () => React.ReactElement;
