import { default as React } from 'react';

declare const _default: {
    title: string;
    component: ({ children, className, condensed, ...ulProps }: import('./Collection').CollectionProps) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
    parameters: {
        docs: {
            description: {
                component: string;
            };
        };
    };
};
export default _default;
export declare const CollectionWithDefaultItems: () => React.ReactElement;
export declare const CollectionWithThumbnailItems: () => React.ReactElement;
export declare const CollectionWithHeadingItems: () => React.ReactElement;
export declare const CollectionWithMixedItems: () => React.ReactElement;
export declare const CondensedCollection: () => React.ReactElement;
