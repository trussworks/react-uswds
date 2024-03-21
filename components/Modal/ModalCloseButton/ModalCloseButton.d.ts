import React from '../../../../node_modules/react';
interface ModalCloseButtonProps {
    handleClose: () => void;
}
export declare const ModalCloseButton: ({ handleClose, ...buttonProps }: ModalCloseButtonProps & JSX.IntrinsicElements['button']) => React.ReactElement;
export {};
