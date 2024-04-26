import { default as React } from 'react';

export type NavDropDownButtonProps = {
    label: string;
    menuId: string;
    isOpen: boolean;
    onToggle: () => void;
    isCurrent?: boolean;
} & JSX.IntrinsicElements['button'];
declare const NavDropDownButton: ({ label, menuId, isOpen, onToggle, isCurrent, className, ...buttonProps }: NavDropDownButtonProps) => React.ReactElement;
export default NavDropDownButton;
