import React from 'react';
export type ModalHook = {
    isOpen: boolean;
    toggleModal: (e?: React.MouseEvent, open?: boolean) => boolean;
};
export declare const useModal: (isInitiallyOpen?: boolean) => ModalHook;
export declare const getScrollbarWidth: () => string;
