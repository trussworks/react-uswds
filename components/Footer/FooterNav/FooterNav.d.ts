import React from 'react';
import { ExtendedNavLinksType } from '../FooterExtendedNavList/FooterExtendedNavList';
type FooterNavProps = {
    size?: 'big' | 'medium' | 'slim';
    isMobile?: boolean;
    links: React.ReactNode[] | ExtendedNavLinksType;
};
export declare const FooterNav: ({ className, size, isMobile, links, ...elementAttributes }: FooterNavProps & React.HTMLAttributes<HTMLElement>) => React.ReactElement;
export {};
