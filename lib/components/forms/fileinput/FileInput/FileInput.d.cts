import { default as React } from 'react';

export type FileInputProps = {
    id: string;
    name: string;
    dragText?: string;
    chooseText?: string;
    errorText?: string;
    disabled?: boolean;
    multiple?: boolean;
    accept?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onDrop?: (e: React.DragEvent) => void;
} & JSX.IntrinsicElements['input'];
export type FileInputRef = {
    clearFiles: () => void;
    input: HTMLInputElement | null;
    files: File[];
};
export declare const FileInputForwardRef: React.ForwardRefRenderFunction<FileInputRef, FileInputProps>;
declare const FileInput: React.ForwardRefExoticComponent<Omit<FileInputProps, "ref"> & React.RefAttributes<FileInputRef>>;
export default FileInput;
