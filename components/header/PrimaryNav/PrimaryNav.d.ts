import React from 'react';
type PrimaryNavProps = {
    items: React.ReactNode[];
    onToggleMobileNav?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    mobileExpanded?: boolean;
};
export declare const PrimaryNav: ({ items, onToggleMobileNav, mobileExpanded, children, className, ...navProps }: PrimaryNavProps & JSX.IntrinsicElements['nav']) => React.ReactElement;
export default PrimaryNav;
