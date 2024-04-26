import { ModalRef } from './Modal';
import { default as React } from 'react';

declare const _default: {
    title: string;
    component: React.ForwardRefExoticComponent<Omit<import('./Modal').ModalProps, "ref"> & React.RefAttributes<ModalRef>>;
    parameters: {
        docs: {
            description: {
                component: string;
            };
        };
    };
};
export default _default;
export declare const DefaultModal: () => React.ReactElement;
export declare const LargeModal: () => React.ReactElement;
export declare const ForceActionModal: () => React.ReactElement;
export declare const CustomFocusElementModal: () => React.ReactElement;
export declare const InitiallyOpenModal: () => React.ReactElement;
