import { default as React } from 'react';

export type HeaderProps = {
    basic?: boolean;
    extended?: boolean;
    basicWithMegaMenu?: boolean;
    children: React.ReactNode;
    showMobileOverlay?: boolean;
} & JSX.IntrinsicElements['header'];
declare const Header: ({ basic, extended, basicWithMegaMenu, children, showMobileOverlay, className, ...headerProps }: HeaderProps) => React.ReactElement;
export default Header;
