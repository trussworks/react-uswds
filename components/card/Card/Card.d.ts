import React from 'react';
import { GridLayoutProp } from '../../grid/Grid/Grid';
type CardProps = {
    layout?: 'standardDefault' | 'flagDefault' | 'flagMediaRight';
    headerFirst?: boolean;
    containerProps?: React.HTMLAttributes<HTMLDivElement>;
};
export declare const Card: ({ layout, headerFirst, children, className, gridLayout, containerProps, ...liProps }: CardProps & JSX.IntrinsicElements['li'] & GridLayoutProp) => React.ReactElement;
export default Card;
