import React from '../../../../node_modules/react';
import { NavListProps } from '../NavList/NavList';
type MegaMenuProps = {
    items: React.ReactNode[][];
    isOpen: boolean;
};
export declare const MegaMenu: ({ items, isOpen, className, ...navListProps }: MegaMenuProps & NavListProps) => React.ReactElement;
export default MegaMenu;
