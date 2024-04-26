import { default as React } from 'react';

export type ComboBoxInputProps = {
    focused?: boolean;
} & JSX.IntrinsicElements['input'];
declare const ComboBoxInput: ({ focused, ...inputProps }: ComboBoxInputProps) => React.ReactElement;
export default ComboBoxInput;
