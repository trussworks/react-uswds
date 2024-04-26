import { default as React } from 'react';

export type TagProps = {
    children: React.ReactNode;
    background?: string;
} & JSX.IntrinsicElements['span'];
declare const Tag: ({ children, background, className, ...spanProps }: TagProps) => React.ReactElement;
export default Tag;
