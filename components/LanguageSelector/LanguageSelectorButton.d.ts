import React from '../../../node_modules/react';
type LanguageSelectorButtonProps = {
    label: string;
    labelAttr?: string;
    isOpen?: boolean;
    onToggle: () => void;
};
export declare const LanguageSelectorButton: ({ label, labelAttr, isOpen, onToggle, className, ...buttonProps }: LanguageSelectorButtonProps & JSX.IntrinsicElements['button']) => React.ReactElement;
export default LanguageSelectorButton;
