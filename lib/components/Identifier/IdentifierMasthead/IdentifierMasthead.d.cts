import { default as React } from 'react';

export type IdentifierMastheadProps = {
    className?: string;
    children?: React.ReactNode;
} & JSX.IntrinsicElements['section'];
declare const IdentifierMasthead: ({ className, children, ...sectionProps }: IdentifierMastheadProps) => React.ReactElement;
export default IdentifierMasthead;
