import { default as React } from 'react';

export type IdentifierProps = {
    className?: string;
    children: React.ReactNode;
} & JSX.IntrinsicElements['div'];
declare const Identifier: ({ className, children, ...divProps }: IdentifierProps) => React.ReactElement;
export default Identifier;
