import React from 'react';
type IdentifierProps = {
    className?: string;
    children: React.ReactNode;
};
export declare const Identifier: ({ className, children, ...divProps }: IdentifierProps & JSX.IntrinsicElements['div']) => React.ReactElement;
export default Identifier;
