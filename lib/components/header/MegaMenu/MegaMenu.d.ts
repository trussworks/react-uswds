import { NavListProps } from '../NavList/NavList.js';
import { default as React } from 'react';

export type MegaMenuProps = {
    items: React.ReactNode[][];
    isOpen: boolean;
} & NavListProps;
declare const MegaMenu: ({ items, isOpen, className, ...navListProps }: MegaMenuProps) => React.ReactElement;
export default MegaMenu;
