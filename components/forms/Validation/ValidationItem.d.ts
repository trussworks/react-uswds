import React from '../../../../node_modules/react';
type ValidationItemProps = {
    children: React.ReactNode;
    id: string;
    isValid: boolean;
};
export declare const ValidationItem: ({ children, className, isValid, ...liProps }: ValidationItemProps & JSX.IntrinsicElements['li']) => React.ReactElement;
export default ValidationItem;
