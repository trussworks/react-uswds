import { default as React } from 'react';

export type ModalFooterProps = {
    children: React.ReactNode;
    className?: string;
} & JSX.IntrinsicElements['div'];
declare const ModalFooter: ({ children, className, ...divProps }: ModalFooterProps) => React.ReactElement;
export default ModalFooter;
