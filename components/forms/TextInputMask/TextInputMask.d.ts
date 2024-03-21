import React from '../../../../node_modules/react';
import { TextInputProps } from '../TextInput/TextInput';
export type AllProps = TextInputProps & {
    mask: string;
    charset?: string;
};
export declare const TextInputMask: ({ id, className, mask, value: externalValue, defaultValue, charset, onChange, ...inputProps }: AllProps) => React.ReactElement;
export default TextInputMask;
