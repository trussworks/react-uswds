import React from 'react';
type RequiredFormProps = {
    children: React.ReactNode;
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};
type CustomFormProps = {
    className?: string;
    large?: boolean;
    search?: boolean;
};
export type OptionalFormProps = CustomFormProps & JSX.IntrinsicElements['form'];
type FormProps = RequiredFormProps & OptionalFormProps;
export declare const Form: ({ onSubmit, children, className, large, search, ...formProps }: FormProps) => React.ReactElement;
export {};
