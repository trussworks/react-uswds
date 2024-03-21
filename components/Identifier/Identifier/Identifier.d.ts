import React from '../../../../node_modules/react';
type IdentifierProps = {
    className?: string;
    children: React.ReactNode;
};
export declare const Identifier: ({ className, children, ...divProps }: IdentifierProps & JSX.IntrinsicElements['div']) => React.ReactElement;
export default Identifier;
