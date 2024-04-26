import { default as React } from 'react';

export type ModalCloseButtonProps = {
    handleClose: () => void;
} & JSX.IntrinsicElements['button'];
declare const ModalCloseButton: ({ handleClose, ...buttonProps }: ModalCloseButtonProps) => React.ReactElement;
export default ModalCloseButton;
