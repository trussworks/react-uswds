import React from 'react';
interface ModalComponentProps {
    id: string;
    children: React.ReactNode;
    className?: string;
    isLarge?: boolean;
    forceAction?: boolean;
    modalRoot?: string;
    renderToPortal?: boolean;
    isInitiallyOpen?: boolean;
}
export type ModalProps = ModalComponentProps & JSX.IntrinsicElements['div'];
export type ModalRef = {
    modalId: string;
    modalIsOpen: boolean;
    toggleModal: (event?: React.MouseEvent, open?: boolean) => boolean;
};
export declare const ModalForwardRef: React.ForwardRefRenderFunction<ModalRef, ModalProps>;
export declare const Modal: React.ForwardRefExoticComponent<Omit<ModalProps, "ref"> & React.RefAttributes<ModalRef>>;
export default Modal;
