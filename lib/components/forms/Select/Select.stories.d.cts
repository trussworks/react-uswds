import { default as React } from 'react';

declare const _default: import('@storybook/types').ComponentAnnotations<import("@storybook/react").ReactRenderer, {
    name: string;
    className?: string | undefined;
    validationStatus?: import("../../..").ValidationStatus | undefined;
    inputRef?: string | React.RefObject<HTMLSelectElement> | ((instance: HTMLSelectElement | null) => void) | null | undefined;
} & React.ClassAttributes<HTMLSelectElement> & React.SelectHTMLAttributes<HTMLSelectElement>>;
export default _default;
export declare const Default: {
    render: import('@storybook/types').AnnotatedStoryFn<import("@storybook/react").ReactRenderer, {
        name: string;
        className?: string | undefined;
        validationStatus?: import("../../..").ValidationStatus | undefined;
        inputRef?: string | React.RefObject<HTMLSelectElement> | ((instance: HTMLSelectElement | null) => void) | null | undefined;
    } & React.ClassAttributes<HTMLSelectElement> & React.SelectHTMLAttributes<HTMLSelectElement>>;
    args: {
        id: string;
        name: string;
    };
};
export declare const WithDefaultValue: {
    render: import('@storybook/types').AnnotatedStoryFn<import("@storybook/react").ReactRenderer, {
        name: string;
        className?: string | undefined;
        validationStatus?: import("../../..").ValidationStatus | undefined;
        inputRef?: string | React.RefObject<HTMLSelectElement> | ((instance: HTMLSelectElement | null) => void) | null | undefined;
    } & React.ClassAttributes<HTMLSelectElement> & React.SelectHTMLAttributes<HTMLSelectElement>>;
    args: {
        id: string;
        name: string;
        defaultValue: string;
    };
};
export declare const Disabled: {
    render: import('@storybook/types').AnnotatedStoryFn<import("@storybook/react").ReactRenderer, {
        name: string;
        className?: string | undefined;
        validationStatus?: import("../../..").ValidationStatus | undefined;
        inputRef?: string | React.RefObject<HTMLSelectElement> | ((instance: HTMLSelectElement | null) => void) | null | undefined;
    } & React.ClassAttributes<HTMLSelectElement> & React.SelectHTMLAttributes<HTMLSelectElement>>;
    args: {
        id: string;
        name: string;
        disabled: boolean;
    };
};
export declare const WithLabel: () => import("react/jsx-runtime").JSX.Element;
export declare const Multiselect: () => import("react/jsx-runtime").JSX.Element;
