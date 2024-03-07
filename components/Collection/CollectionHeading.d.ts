import React from 'react';
import { HeadingLevel } from '../../types/headingLevel';
interface CollectionHeadingProps {
    headingLevel: HeadingLevel;
}
export declare const CollectionHeading: ({ headingLevel, className, children, ...props }: CollectionHeadingProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => React.ReactElement;
export {};
