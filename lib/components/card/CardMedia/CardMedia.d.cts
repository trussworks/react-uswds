import { default as React } from 'react';

export type CardMediaProps = {
    exdent?: boolean;
    inset?: boolean;
    imageClass?: string;
    children: React.ReactNode;
} & JSX.IntrinsicElements['div'];
declare const CardMedia: ({ exdent, inset, imageClass, children, className, ...mediaProps }: CardMediaProps) => React.ReactElement;
export default CardMedia;
