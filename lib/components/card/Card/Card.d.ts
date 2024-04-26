import { GridLayoutProps } from '../../grid/Grid/Grid.js';
import { default as React } from 'react';

export type CardProps = {
    layout?: 'standardDefault' | 'flagDefault' | 'flagMediaRight';
    headerFirst?: boolean;
    containerProps?: React.HTMLAttributes<HTMLDivElement>;
} & JSX.IntrinsicElements['li'] & GridLayoutProps;
declare const Card: ({ layout, headerFirst, children, className, gridLayout, containerProps, ...liProps }: CardProps) => React.ReactElement;
export default Card;
