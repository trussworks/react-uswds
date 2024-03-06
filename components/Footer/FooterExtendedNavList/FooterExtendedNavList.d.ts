import React from 'react';
export type ExtendedNavLinksType = React.ReactNode[][];
type FooterExtendedNavListProps = {
    isMobile?: boolean;
    nestedLinks: ExtendedNavLinksType;
};
export declare const FooterExtendedNavList: ({ className, isMobile, nestedLinks, }: FooterExtendedNavListProps & React.HTMLAttributes<HTMLElement>) => React.ReactElement;
export {};
