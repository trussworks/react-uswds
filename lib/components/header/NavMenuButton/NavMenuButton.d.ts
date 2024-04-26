import { default as React } from 'react';

export type NavMenuButtonProps = {
    label: React.ReactNode;
} & JSX.IntrinsicElements['button'];
declare const NavMenuButton: ({ label, onClick, ...buttonProps }: NavMenuButtonProps) => React.ReactElement;
export default NavMenuButton;
