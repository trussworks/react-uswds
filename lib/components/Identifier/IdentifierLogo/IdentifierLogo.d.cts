import { default as React } from 'react';

export type IdentifierLogoProps = {
    children: React.ReactNode;
    className?: string;
} & JSX.IntrinsicElements['a'];
declare const IdentifierLogo: ({ children, className, ...anchorProps }: IdentifierLogoProps) => React.ReactElement;
export default IdentifierLogo;
