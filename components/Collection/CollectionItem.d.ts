import React from 'react';
interface CollectionItemProps {
    variantComponent?: React.ReactNode;
}
export declare const CollectionItem: ({ className, children, variantComponent, ...props }: CollectionItemProps & JSX.IntrinsicElements['li']) => React.ReactElement;
export {};
