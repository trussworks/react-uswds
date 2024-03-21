import React from '../../../node_modules/react';
import { ModalRef } from './Modal';
import { ButtonProps } from '../Button/Button';
type ModalToggleButtonProps = {
    modalRef: React.RefObject<ModalRef>;
    opener?: boolean;
    closer?: boolean;
};
export declare const ModalToggleButton: ({ modalRef, children, opener, closer, ...props }: ModalToggleButtonProps & Omit<ButtonProps, 'type'> & JSX.IntrinsicElements['button']) => React.ReactElement<HTMLButtonElement>;
export {};
