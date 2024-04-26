import { GridProps } from '../../grid/Grid/Grid.js';
import { default as React } from 'react';

export type ExtendedNavLinksType = React.ReactNode[][];
export type FooterExtendedNavListProps = {
    isMobile?: boolean;
    nestedLinks: ExtendedNavLinksType;
} & GridProps;
declare const FooterExtendedNavList: ({ isMobile, nestedLinks, ...props }: FooterExtendedNavListProps) => React.ReactElement;
export default FooterExtendedNavList;
