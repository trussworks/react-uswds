import { default as React } from 'react';

export type PrimaryNavProps = {
    items: React.ReactNode[];
    onToggleMobileNav?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    mobileExpanded?: boolean;
} & JSX.IntrinsicElements['nav'];
declare const PrimaryNav: ({ items, onToggleMobileNav, mobileExpanded, children, className, ...navProps }: PrimaryNavProps) => React.ReactElement;
export default PrimaryNav;
