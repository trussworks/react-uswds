import { default as React } from 'react';

declare const _default: {
    title: string;
    component: ({ id, name, onChange, label, defaultValue, disabled, minTime, maxTime, step, hint, className, ...props }: import('./TimePicker').TimePickerProps) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
    argTypes: {
        onsubmit: {
            action: string;
        };
        disabled: {
            control: {
                type: string;
            };
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
    onSubmit: () => void;
    disabled: boolean;
};
export declare const CompleteTimePicker: (argTypes: StorybookArguments) => React.ReactElement;
export declare const DefaultTimePicker: (argTypes: StorybookArguments) => React.ReactElement;
export declare const WithMinAndMaxTimes: (argTypes: StorybookArguments) => React.ReactElement;
export declare const WithDefaultValue: (argTypes: StorybookArguments) => React.ReactElement;
