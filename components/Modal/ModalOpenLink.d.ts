import React from 'react';
import { ModalRef } from './Modal';
import { CustomLinkProps, DefaultLinkProps } from '../Link/Link';
type ModalOpenLinkProps = {
    modalRef: React.RefObject<ModalRef>;
};
export declare function ModalOpenLink(props: DefaultLinkProps & ModalOpenLinkProps): React.ReactElement;
export declare function ModalOpenLink<T>(props: CustomLinkProps<T> & ModalOpenLinkProps): React.ReactElement;
export {};
