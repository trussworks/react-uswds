import { default as React } from 'react';

export type IdentifierIdentityProps = {
    children: React.ReactNode;
    domain: string;
    className?: string;
} & JSX.IntrinsicElements['div'];
declare const IdentifierIdentity: ({ children, domain, className, ...divProps }: IdentifierIdentityProps) => React.ReactElement;
export default IdentifierIdentity;
