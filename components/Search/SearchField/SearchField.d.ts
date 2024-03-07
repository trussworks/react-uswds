import React from 'react';
import { OptionalTextInputProps } from '../../forms/TextInput/TextInput';
type SearchFieldProps = {
    isBig?: boolean;
    className?: string;
    inputName?: string;
    inputId?: string;
    placeholder?: string;
    defaultValue?: React.ReactNode;
    label?: React.ReactNode;
    inputProps?: JSX.IntrinsicElements['input'];
};
export declare const SearchField: ({ isBig, className, placeholder, defaultValue, inputName, label, inputId, inputProps, }: SearchFieldProps & OptionalTextInputProps) => React.ReactElement;
export default SearchField;
