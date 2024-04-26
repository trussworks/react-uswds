import { default as React } from 'react';

export type CollectionProps = {
    condensed?: boolean;
} & JSX.IntrinsicElements['ul'];
declare const Collection: ({ children, className, condensed, ...ulProps }: CollectionProps) => React.ReactElement;
export default Collection;
