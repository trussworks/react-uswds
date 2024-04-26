import { default as React } from 'react';

declare const _default: {
    title: string;
    component: ({ children, className, error, ...props }: import('./FormGroup').FormGroupProps) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
    parameters: {
        docs: {
            description: {
                component: string;
            };
        };
    };
};
export default _default;
export declare const TextInputFormGroup: () => React.ReactElement;
export declare const TextInputErrorFormGroup: () => React.ReactElement;
