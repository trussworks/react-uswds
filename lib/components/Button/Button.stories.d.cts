import { default as React } from 'react';

declare const _default: {
    title: string;
    component: React.ForwardRefExoticComponent<Omit<import('./Button').ButtonProps, "ref"> & React.RefAttributes<HTMLButtonElement>>;
    parameters: {
        docs: {
            description: {
                component: string;
            };
        };
    };
};
export default _default;
export declare const DefaultButton: () => React.ReactElement;
export declare const Secondary: () => React.ReactElement;
export declare const AccentCool: () => React.ReactElement;
export declare const AccentWarm: () => React.ReactElement;
export declare const Base: () => React.ReactElement;
export declare const Outline: () => React.ReactElement;
export declare const Inverse: () => React.ReactElement;
export declare const Big: () => React.ReactElement;
export declare const Unstyled: () => React.ReactElement;
export declare const CustomClass: () => React.ReactElement;
export declare const Disabled: () => React.ReactElement;
