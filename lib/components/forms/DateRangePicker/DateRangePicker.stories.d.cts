import { default as React } from 'react';

declare const _default: {
    title: string;
    component: ({ startDateLabel, startDateHint, startDatePickerProps, endDateLabel, endDateHint, endDatePickerProps, className, ...props }: import('./DateRangePicker').DateRangePickerProps) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
    argTypes: {
        onSubmit: {
            action: string;
        };
        startDatePickerDisabled: {
            control: {
                type: string;
            };
        };
        endDatePickerDisabled: {
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
    args: {
        startDatePickerDisabled: boolean;
        endDatePickerDisabled: boolean;
    };
};
export default _default;
type StorybookArguments = {
    onSubmit: React.FormEventHandler<HTMLFormElement>;
    startDatePickerDisabled: boolean;
    endDatePickerDisabled: boolean;
};
export declare const CompleteDateRangePicker: {
    render: (argTypes: StorybookArguments) => React.ReactElement;
};
export declare const WithDefaultValues: {
    render: (argTypes: StorybookArguments) => React.ReactElement;
};
export declare const WithAllowableRanges: {
    render: (argTypes: StorybookArguments) => React.ReactElement;
};
