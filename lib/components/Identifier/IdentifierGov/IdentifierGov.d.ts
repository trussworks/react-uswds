import { default as React } from 'react';

export type IdentifierGovProps = {
    children?: React.ReactNode;
    className?: string;
} & JSX.IntrinsicElements['section'];
declare const IdentifierGov: ({ children, className, ...sectionProps }: IdentifierGovProps) => React.ReactElement;
export default IdentifierGov;
