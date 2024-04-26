import { TextInputProps } from '../../forms/TextInput/TextInput.js';
import { SetOptional } from 'type-fest';
import { default as React } from 'react';

export type SearchFieldProps = {
    isBig?: boolean;
    className?: string;
    inputName?: string;
    inputId?: string;
    placeholder?: string;
    defaultValue?: React.ReactNode;
    label?: React.ReactNode;
    inputProps?: SetOptional<TextInputProps, 'id' | 'name'>;
} & JSX.IntrinsicElements['div'];
declare const SearchField: ({ isBig, className, placeholder, defaultValue, inputName, label, inputId, inputProps, ...props }: SearchFieldProps) => React.ReactElement;
export default SearchField;
