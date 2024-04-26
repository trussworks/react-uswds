import { default as React } from 'react';

export type IdentifierLogosProps = {
    children: React.ReactNode;
    className?: string;
} & JSX.IntrinsicElements['div'];
declare const IdentifierLogos: ({ children, className, ...divProps }: IdentifierLogosProps) => React.ReactElement;
export default IdentifierLogos;
