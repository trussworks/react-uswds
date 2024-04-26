import { default as React } from 'react';

export type SideNavProps = {
    items: React.ReactNode[];
    isSubnav?: boolean;
} & JSX.IntrinsicElements['ul'];
declare const SideNav: ({ items, isSubnav, className, ...props }: SideNavProps) => React.ReactElement;
export default SideNav;
