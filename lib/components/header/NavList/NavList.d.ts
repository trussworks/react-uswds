import { default as React } from 'react';

export type CustomNavListProps = {
    items: React.ReactNode[];
    type?: 'primary' | 'secondary' | 'subnav' | 'megamenu' | 'footerSecondary' | 'language';
};
export type NavListProps = CustomNavListProps & JSX.IntrinsicElements['ul'];
declare const NavList: ({ items, type, className, ...ulProps }: NavListProps) => React.ReactElement;
export default NavList;
