import React from '../../../../node_modules/react';
interface ModalWrapperProps {
    id: string;
    children: React.ReactNode;
    isVisible: boolean;
    forceAction: boolean;
    handleClose: () => void;
    className?: string;
}
export declare const ModalWrapperForwardRef: React.ForwardRefRenderFunction<HTMLDivElement, ModalWrapperProps & JSX.IntrinsicElements['div']>;
export declare const ModalWrapper: React.ForwardRefExoticComponent<Omit<ModalWrapperProps & React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export default ModalWrapper;
