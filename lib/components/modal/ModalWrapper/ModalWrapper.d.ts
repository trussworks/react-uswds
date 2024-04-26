import { default as React } from 'react';

export type ModalWrapperProps = {
    id: string;
    children: React.ReactNode;
    isVisible: boolean;
    forceAction: boolean;
    handleClose: () => void;
    className?: string;
} & JSX.IntrinsicElements['div'];
export declare const ModalWrapperForwardRef: React.ForwardRefRenderFunction<HTMLDivElement, ModalWrapperProps>;
declare const ModalWrapper: React.ForwardRefExoticComponent<Omit<ModalWrapperProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
export default ModalWrapper;
