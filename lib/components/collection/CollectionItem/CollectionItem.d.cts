import { default as React } from 'react';

export type CollectionItemProps = {
    variantComponent?: React.ReactNode;
} & JSX.IntrinsicElements['li'];
declare const CollectionItem: ({ className, children, variantComponent, ...props }: CollectionItemProps) => React.ReactElement;
export default CollectionItem;
