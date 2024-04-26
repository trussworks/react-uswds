import { TextInputProps } from '../TextInput/TextInput.js';
import { default as React } from 'react';

export type TextInputMaskProps = TextInputProps & {
    mask: string;
    charset?: string;
};
declare const TextInputMask: ({ id, className, mask, value: externalValue, defaultValue, charset, onChange, ...inputProps }: TextInputMaskProps) => React.ReactElement;
export default TextInputMask;
