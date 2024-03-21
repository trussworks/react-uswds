import React from '../../../../node_modules/react';
type ExtendedNavProps = {
    primaryItems: React.ReactNode[];
    secondaryItems: React.ReactNode[];
    onToggleMobileNav?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    mobileExpanded?: boolean;
};
export declare const ExtendedNav: ({ primaryItems, secondaryItems, mobileExpanded, children, className, onToggleMobileNav, ...navProps }: ExtendedNavProps & JSX.IntrinsicElements['nav']) => React.ReactElement;
export default ExtendedNav;
