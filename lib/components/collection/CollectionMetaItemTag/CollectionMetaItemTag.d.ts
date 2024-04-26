import { default as React } from 'react';

export type CollectionMetaItemTagProps = {
    tagStyle?: 'new' | 'default';
} & JSX.IntrinsicElements['li'];
declare const CollectionMetaItemTag: ({ className, children, tagStyle, ...props }: CollectionMetaItemTagProps) => React.ReactElement;
export default CollectionMetaItemTag;
