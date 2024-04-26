import { SearchFieldProps } from '../SearchField/SearchField.js';
import { FormProps } from '../../forms/Form/Form.js';
import { default as React } from 'react';

export type SearchLocalization = {
    buttonText: string;
};
export type BaseSearchProps = {
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    size?: 'big' | 'small';
    className?: string;
    inputName?: string;
    inputId?: string;
    placeholder?: string;
    label?: React.ReactNode;
    i18n?: SearchLocalization;
    buttonAriaLabel?: string;
    inputProps?: SearchFieldProps['inputProps'];
};
export type SearchProps = BaseSearchProps & FormProps;
declare const Search: ({ onSubmit, size, className, placeholder, inputName, label, inputId, i18n, buttonAriaLabel, inputProps, defaultValue, ...formProps }: SearchProps) => React.ReactElement;
export default Search;
