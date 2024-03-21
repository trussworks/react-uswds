import React from '../../../../node_modules/react';
type NavDropDownButtonProps = {
    label: string;
    menuId: string;
    isOpen: boolean;
    onToggle: () => void;
    isCurrent?: boolean;
};
export declare const NavDropDownButton: ({ label, menuId, isOpen, onToggle, isCurrent, className, ...buttonProps }: NavDropDownButtonProps & JSX.IntrinsicElements['button']) => React.ReactElement;
export default NavDropDownButton;
