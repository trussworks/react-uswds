import React from 'react';
export interface IdentifierLinkItemProps {
    children: React.ReactNode;
    className?: string;
}
export declare const IdentifierLinkItem: ({ children, className, ...listItemProps }: IdentifierLinkItemProps & JSX.IntrinsicElements['li']) => React.ReactElement;
