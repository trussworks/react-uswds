import { default as React } from 'react';

export type ValidationItemProps = {
    children: React.ReactNode;
    id: string;
    isValid: boolean;
} & JSX.IntrinsicElements['li'];
declare const ValidationItem: ({ children, className, isValid, ...liProps }: ValidationItemProps) => React.ReactElement;
export default ValidationItem;
