import React from '../../../../node_modules/react';
type StorybookArguments = {
    onClick: (value: string) => void;
    onKeyDown: (event: React.KeyboardEvent<Element>) => void;
    onMouseMove: (hoverDate: Date) => void;
};
export declare const defaultDay: (argTypes: StorybookArguments) => React.ReactElement;
export declare const disabled: (argTypes: StorybookArguments) => React.ReactElement;
export declare const selected: (argTypes: StorybookArguments) => React.ReactElement;
export declare const focused: (argTypes: StorybookArguments) => React.ReactElement;
export declare const previousMonth: (argTypes: StorybookArguments) => React.ReactElement;
export declare const sameMonth: (argTypes: StorybookArguments) => React.ReactElement;
export declare const nextMonth: (argTypes: StorybookArguments) => React.ReactElement;
export declare const today: (argTypes: StorybookArguments) => React.ReactElement;
export declare const isRangeDate: (argTypes: StorybookArguments) => React.ReactElement;
export declare const isRangeStart: (argTypes: StorybookArguments) => React.ReactElement;
export declare const isRangeEnd: (argTypes: StorybookArguments) => React.ReactElement;
export declare const isWithinRange: (argTypes: StorybookArguments) => React.ReactElement;
export {};
