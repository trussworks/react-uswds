import React from '../../../../node_modules/react';
type StorybookArguments = {
    handleSelectYear: (year: number) => void;
    setStatuses: (statuses: string[]) => void;
};
export declare const yearPicker: (argTypes: StorybookArguments) => React.ReactElement;
export declare const withMinAndMaxInCurrentChunk: (argTypes: StorybookArguments) => React.ReactElement;
export declare const withMinInCurrentChunk: (argTypes: StorybookArguments) => React.ReactElement;
export declare const withMaxInCurrentChunk: (argTypes: StorybookArguments) => React.ReactElement;
export {};
