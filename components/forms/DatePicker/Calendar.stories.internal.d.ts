import React from 'react';
type StorybookArguments = {
    handleSelectDate: (value: string) => void;
    setStatuses: (statuses: string[]) => void;
};
export declare const defaultCalendar: (argTypes: StorybookArguments) => React.ReactElement;
export declare const givenDate: (argTypes: StorybookArguments) => React.ReactElement;
export declare const selectedDate: (argTypes: StorybookArguments) => React.ReactElement;
export declare const minAndMax: (argTypes: StorybookArguments) => React.ReactElement;
export declare const rangeDate: (argTypes: StorybookArguments) => React.ReactElement;
export {};
