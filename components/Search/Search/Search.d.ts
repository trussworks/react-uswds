import React from '../../../../node_modules/react';
import { OptionalFormProps } from '../../forms/Form/Form';
import { OptionalTextInputProps } from '../../forms/TextInput/TextInput';
type SearchLocalization = {
    buttonText: string;
};
type SearchInputProps = {
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    size?: 'big' | 'small';
    className?: string;
    inputName?: string;
    inputId?: string;
    placeholder?: string;
    label?: React.ReactNode;
    i18n?: SearchLocalization;
    buttonAriaLabel?: string;
    inputProps?: OptionalTextInputProps;
};
export declare const Search: ({ onSubmit, size, className, placeholder, inputName, label, inputId, i18n, buttonAriaLabel, inputProps, ...formProps }: SearchInputProps & OptionalFormProps) => React.ReactElement;
export default Search;
