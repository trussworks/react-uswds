import { ExtendedNavLinksType } from '../FooterExtendedNavList/FooterExtendedNavList.js';
import { default as React } from 'react';

export type FooterNavProps = {
    size?: 'big' | 'medium' | 'slim';
    isMobile?: boolean;
    links: React.ReactNode[] | ExtendedNavLinksType;
} & JSX.IntrinsicElements['nav'];
declare const FooterNav: ({ className, size, isMobile, links, ...elementAttributes }: FooterNavProps) => React.ReactElement;
export default FooterNav;
