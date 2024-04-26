import { default as React } from 'react';

export type ModalWindowProps = {
    modalId: string;
    children: React.ReactNode;
    handleClose: () => void;
    className?: string;
    isLarge?: boolean;
    forceAction?: boolean;
} & JSX.IntrinsicElements['div'];
export declare const ModalWindowForwardRef: React.ForwardRefRenderFunction<HTMLDivElement, ModalWindowProps>;
declare const ModalWindow: React.ForwardRefExoticComponent<Omit<ModalWindowProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
export default ModalWindow;
