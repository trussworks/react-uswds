import React from '../../../../node_modules/react';
type HeaderProps = {
    basic?: boolean;
    extended?: boolean;
    basicWithMegaMenu?: boolean;
    children: React.ReactNode;
    showMobileOverlay?: boolean;
};
export declare const Header: ({ basic, extended, basicWithMegaMenu, children, showMobileOverlay, className, ...headerProps }: HeaderProps & JSX.IntrinsicElements['header']) => React.ReactElement;
export {};
