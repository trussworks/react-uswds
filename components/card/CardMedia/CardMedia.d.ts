import React from 'react';
interface CardMediaProps {
    exdent?: boolean;
    inset?: boolean;
    imageClass?: string;
    children: React.ReactNode;
}
export declare const CardMedia: ({ exdent, inset, imageClass, children, className, ...mediaProps }: CardMediaProps & JSX.IntrinsicElements['div']) => React.ReactElement;
export default CardMedia;
