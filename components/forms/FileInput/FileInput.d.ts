import React from 'react';
type FileInputProps = {
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
};
export type FileInputRef = {
    clearFiles: () => void;
    input: HTMLInputElement | null;
    files: File[];
};
export declare const FileInputForwardRef: React.ForwardRefRenderFunction<FileInputRef, FileInputProps & JSX.IntrinsicElements['input']>;
export declare const FileInput: React.ForwardRefExoticComponent<Omit<FileInputProps & React.ClassAttributes<HTMLInputElement> & React.InputHTMLAttributes<HTMLInputElement>, "ref"> & React.RefAttributes<FileInputRef>>;
export {};
