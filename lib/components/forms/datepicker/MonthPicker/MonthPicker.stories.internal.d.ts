import { default as React } from 'react';

type StorybookArguments = {
    handleSelectMonth: (value: number) => void;
};
export declare const monthPicker: (argTypes: StorybookArguments) => React.ReactElement;
export declare const withMinAndMax: (argTypes: StorybookArguments) => React.ReactElement;
export {};
