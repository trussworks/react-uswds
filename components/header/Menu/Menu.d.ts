import React from '../../../../node_modules/react';
import { NavListProps } from '../NavList/NavList';
type MenuProps = {
    items: React.ReactNode[];
    isOpen: boolean;
    type?: 'primary' | 'secondary' | 'subnav' | 'megamenu' | 'footerSecondary' | 'language';
};
export declare const Menu: ({ className, items, isOpen, type, ...navListProps }: MenuProps & NavListProps) => React.ReactElement;
export default Menu;
