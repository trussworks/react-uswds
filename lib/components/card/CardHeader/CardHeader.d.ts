import { default as React } from 'react';

export type CardHeaderProps = {
    exdent?: boolean;
} & JSX.IntrinsicElements['header'];
declare const CardHeader: ({ exdent, children, className, ...headerProps }: CardHeaderProps) => React.ReactElement;
export default CardHeader;
