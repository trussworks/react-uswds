import React from '../../../../node_modules/react';
type CustomNavListProps = {
    items: React.ReactNode[];
    type?: 'primary' | 'secondary' | 'subnav' | 'megamenu' | 'footerSecondary' | 'language';
};
export type NavListProps = CustomNavListProps & JSX.IntrinsicElements['ul'];
export declare const NavList: ({ items, type, className, ...ulProps }: NavListProps) => React.ReactElement;
export {};
