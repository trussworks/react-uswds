import { CustomLinkProps, DefaultLinkProps } from '../../Link/Link.js';
import { ModalRef } from '../Modal/Modal.js';
import { default as React } from 'react';

export type ModalOpenLinkProps = {
    modalRef: React.RefObject<ModalRef>;
};
export type DefaultModalOpenLinkProps = ModalOpenLinkProps & DefaultLinkProps;
export type CustomModalOpenLinkProps<T> = CustomLinkProps<T> & ModalOpenLinkProps;
export default function ModalOpenLink(props: DefaultModalOpenLinkProps): React.ReactElement;
export default function ModalOpenLink<T>(props: CustomModalOpenLinkProps<T>): React.ReactElement;
