import React, { ReactElement } from 'react';
import { IdentifierLinkItemProps } from '../IdentifierLinkItem/IdentifierLinkItem';
interface IdentifierLinksProps {
    children: ReactElement<IdentifierLinkItemProps> | ReactElement<IdentifierLinkItemProps>[];
    className?: string;
    navProps?: JSX.IntrinsicElements['nav'];
    listProps?: JSX.IntrinsicElements['ul'];
}
export declare const IdentifierLinks: ({ children, className, navProps, listProps, }: IdentifierLinksProps) => React.ReactElement;
export default IdentifierLinks;
