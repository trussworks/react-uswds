import { default as React } from 'react';

export type IdentifierLinksProps = React.PropsWithChildren<{
    className?: string;
    navProps?: JSX.IntrinsicElements['nav'];
    listProps?: JSX.IntrinsicElements['ul'];
}>;
declare const IdentifierLinks: ({ children, className, navProps, listProps, }: IdentifierLinksProps) => React.ReactElement;
export default IdentifierLinks;
