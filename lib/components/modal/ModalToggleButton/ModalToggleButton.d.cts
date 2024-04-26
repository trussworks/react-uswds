import { ButtonProps } from '../../Button/Button.js';
import { ModalRef } from '../Modal/Modal.js';
import { default as React } from 'react';

export type ModalToggleButtonProps = {
    modalRef: React.RefObject<ModalRef>;
    opener?: boolean;
    closer?: boolean;
} & Omit<ButtonProps, 'type'> & JSX.IntrinsicElements['button'];
declare const ModalToggleButton: ({ modalRef, children, opener, closer, onClick, ...props }: ModalToggleButtonProps) => React.ReactElement<HTMLButtonElement>;
export default ModalToggleButton;
