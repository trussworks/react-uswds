import { default as React } from 'react';

export type RequiredFormProps = {
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};
export type CustomFormProps = {
    className?: string;
    large?: boolean;
    search?: boolean;
};
export type OptionalFormProps = CustomFormProps & JSX.IntrinsicElements['form'];
export type FormProps = RequiredFormProps & OptionalFormProps;
declare const Form: ({ onSubmit, children, className, large, search, ...formProps }: FormProps) => React.ReactElement;
export default Form;
