import { default as React } from 'react';

export type IdentifierLinkItemProps = {
    children: React.ReactNode;
    className?: string;
} & JSX.IntrinsicElements['li'];
declare const IdentifierLinkItem: ({ children, className, ...listItemProps }: IdentifierLinkItemProps) => React.ReactElement;
export default IdentifierLinkItem;
