import { ButtonProps } from '../../Button/Button.js';
import { default as React } from 'react';

export type LanguageSelectorButtonProps = {
    label: string;
    labelAttr?: string;
    isOpen?: boolean;
    onToggle: () => void;
} & Omit<ButtonProps, 'children'>;
declare const LanguageSelectorButton: ({ label, labelAttr, isOpen, onToggle, className, ...buttonProps }: LanguageSelectorButtonProps) => React.ReactElement;
export default LanguageSelectorButton;
