import React from 'react';
interface ModalWindowProps {
    modalId: string;
    children: React.ReactNode;
    handleClose: () => void;
    className?: string;
    isLarge?: boolean;
    forceAction?: boolean;
}
export declare const ModalWindowForwardRef: React.ForwardRefRenderFunction<HTMLDivElement, ModalWindowProps & JSX.IntrinsicElements['div']>;
export declare const ModalWindow: React.ForwardRefExoticComponent<Omit<ModalWindowProps & React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export {};
