import { default as React } from 'react';

declare const _default: {
    title: string;
    component: ({ onSubmit, children, className, large, search, ...formProps }: import('./Form').FormProps) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
    parameters: {
        docs: {
            description: {
                component: string;
            };
        };
    };
};
export default _default;
export declare const TextInputForm: () => React.ReactElement;
export declare const NameForm: () => React.ReactElement;
export declare const AddressForm: () => React.ReactElement;
export declare const SignInForm: () => React.ReactElement;
export declare const PasswordResetForm: () => React.ReactElement;
