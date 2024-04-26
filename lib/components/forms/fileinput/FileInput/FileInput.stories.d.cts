import { FileInputRef } from './FileInput';
import { default as React } from 'react';

declare const _default: {
    title: string;
    component: React.ForwardRefExoticComponent<Omit<import('./FileInput').FileInputProps, "ref"> & React.RefAttributes<FileInputRef>>;
    argTypes: {
        onChange: {
            action: string;
        };
        onDrop: {
            action: string;
        };
    };
    parameters: {
        docs: {
            description: {
                component: string;
            };
        };
    };
};
export default _default;
type StorybookArguments = {
    onChange: (event: React.ChangeEvent<Element>) => void;
    onDrop: React.DragEventHandler<Element>;
};
export declare const SingleFileInput: () => React.ReactElement;
export declare const AcceptTextAndPDF: () => React.ReactElement;
export declare const AcceptImages: () => React.ReactElement;
export declare const MultipleFilesInput: () => React.ReactElement;
export declare const WithError: () => React.ReactElement;
export declare const Disabled: () => React.ReactElement;
export declare const WithRefAndCustomHandlers: {
    render: (argTypes: StorybookArguments) => React.ReactElement;
};
export declare const CustomText: () => React.ReactElement;
