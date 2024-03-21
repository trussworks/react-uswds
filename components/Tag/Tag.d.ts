import React from '../../../node_modules/react';
type TagProps = {
    children: React.ReactNode;
    background?: string;
};
export declare const Tag: ({ children, background, className, ...spanProps }: TagProps & JSX.IntrinsicElements['span']) => React.ReactElement;
export default Tag;
