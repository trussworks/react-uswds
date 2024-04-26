import { default as React } from 'react';

export type CardBodyProps = {
    exdent?: boolean;
} & JSX.IntrinsicElements['div'];
declare const CardBody: ({ exdent, children, className, ...bodyProps }: CardBodyProps) => React.ReactElement;
export default CardBody;
