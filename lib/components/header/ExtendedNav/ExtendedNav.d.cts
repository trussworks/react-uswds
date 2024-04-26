import { default as React } from 'react';

export type ExtendedNavProps = {
    primaryItems: React.ReactNode[];
    secondaryItems: React.ReactNode[];
    onToggleMobileNav?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    mobileExpanded?: boolean;
} & JSX.IntrinsicElements['nav'];
declare const ExtendedNav: ({ primaryItems, secondaryItems, mobileExpanded, children, className, onToggleMobileNav, ...navProps }: ExtendedNavProps) => React.ReactElement;
export default ExtendedNav;
