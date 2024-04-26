import { NavListProps } from '../NavList/NavList.js';
import { default as React } from 'react';

export type MenuProps = {
    items: React.ReactNode[];
    isOpen: boolean;
    type?: 'primary' | 'secondary' | 'subnav' | 'megamenu' | 'footerSecondary' | 'language';
} & NavListProps;
declare const Menu: ({ className, items, isOpen, type, ...navListProps }: MenuProps) => React.ReactElement;
export default Menu;
