import { default as React } from 'react';

export type CardFooterProps = {
    exdent?: boolean;
} & JSX.IntrinsicElements['div'];
declare const CardFooter: ({ exdent, children, className, ...footerProps }: CardFooterProps) => React.ReactElement;
export default CardFooter;
