import React from 'react';
interface ModalCloseButtonProps {
    handleClose: () => void;
}
export declare const ModalCloseButton: ({ handleClose, ...buttonProps }: ModalCloseButtonProps & JSX.IntrinsicElements['button']) => React.ReactElement;
export {};
