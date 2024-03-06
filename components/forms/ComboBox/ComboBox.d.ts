import React from 'react';
export interface ComboBoxOption {
    value: string;
    label: string;
}
export declare enum FocusMode {
    None = 0,
    Input = 1,
    Item = 2
}
export interface CustomizableFilter {
    filter: string;
    extras?: Record<string, string>;
}
type ComboBoxProps = {
    id: string;
    name: string;
    className?: string;
    options: ComboBoxOption[];
    defaultValue?: string;
    disabled?: boolean;
    onChange: (val?: string) => void;
    assistiveHint?: string;
    noResults?: string;
    inputProps?: JSX.IntrinsicElements['input'];
    selectProps?: JSX.IntrinsicElements['select'];
    ulProps?: JSX.IntrinsicElements['ul'];
    customFilter?: CustomizableFilter;
    disableFiltering?: boolean;
};
export type ComboBoxRef = {
    focus: () => void;
    clearSelection: () => void;
};
export declare const ComboBox: React.ForwardRefExoticComponent<ComboBoxProps & React.RefAttributes<ComboBoxRef>>;
export default ComboBox;
