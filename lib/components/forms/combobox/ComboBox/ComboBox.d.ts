import { SelectProps } from '../../Select/Select.js';
import { ComboBoxInputProps } from '../ComboBoxInput/ComboBoxInput.js';
import { default as React } from 'react';

export interface ComboBoxOption {
    value: string;
    label: string;
}
export interface CustomizableFilter {
    filter: string;
    extras?: Record<string, string>;
}
export type ComboBoxProps = {
    id: string;
    name: string;
    className?: string;
    options: ComboBoxOption[];
    defaultValue?: string;
    disabled?: boolean;
    onChange: (val?: string) => void;
    assistiveHint?: string;
    noResults?: string;
    inputProps?: ComboBoxInputProps;
    selectProps?: Omit<SelectProps, 'name'> & {
        name?: string;
    };
    ulProps?: JSX.IntrinsicElements['ul'];
    customFilter?: CustomizableFilter;
    disableFiltering?: boolean;
};
export type ComboBoxRef = {
    focus: () => void;
    clearSelection: () => void;
};
export declare const ComboBoxForwardRef: React.ForwardRefRenderFunction<ComboBoxRef, ComboBoxProps>;
declare const ComboBox: React.ForwardRefExoticComponent<ComboBoxProps & React.RefAttributes<ComboBoxRef>>;
export default ComboBox;
