import { default as React } from 'react';

declare const _default: {
    title: string;
    component: ({ className, inputRef, textPreposition, textUnit, ...inputProps }: import('./RangeInput').RangeInputProps) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
    parameters: {
        docs: {
            description: {
                component: string;
            };
        };
    };
};
export default _default;
export declare const DefaultRange: () => React.ReactElement;
export declare const CustomRange: () => React.ReactElement;
export declare const DataListRange: () => React.ReactElement;
export declare const WithUnitAndPreposition: () => React.ReactElement;
