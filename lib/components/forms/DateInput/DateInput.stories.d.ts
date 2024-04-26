import { default as React } from 'react';

declare const _default: {
    title: string;
    component: ({ id, name, label, unit, maxLength, minLength, className, ...inputProps }: import('./DateInput').DateInputElementProps) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
    parameters: {
        docs: {
            description: {
                component: string;
            };
        };
    };
};
export default _default;
export declare const MonthDateInput: () => React.ReactElement;
export declare const DayDateInput: () => React.ReactElement;
export declare const YearDateInput: () => React.ReactElement;
export declare const DateOfBirthExample: () => React.ReactElement;
