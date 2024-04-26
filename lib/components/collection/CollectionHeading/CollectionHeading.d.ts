import { HeadingLevel } from '../../../types/headingLevel.js';
import { default as React } from 'react';

export type CollectionHeadingProps = {
    headingLevel: HeadingLevel;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
declare const CollectionHeading: ({ headingLevel, className, children, ...props }: CollectionHeadingProps) => React.ReactElement;
export default CollectionHeading;
