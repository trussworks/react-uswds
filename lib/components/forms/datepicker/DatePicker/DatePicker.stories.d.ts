import { ValidationStatus } from '../../../../types/validationStatus';
import { default as React } from 'react';

declare const _default: {
    title: string;
    component: {
        ({ id, name, className, validationStatus, defaultValue, disabled, required, minDate, maxDate, rangeDate, onChange, onBlur, i18n, ...inputProps }: import('./DatePicker').DatePickerProps): React.ReactElement<any, string | React.JSXElementConstructor<any>>;
        defaultProps: {
            minDate: string;
        };
    };
    argTypes: {
        onSubmit: {
            action: string;
        };
        disabled: {
            control: {
                type: string;
            };
        };
        validationStatus: {
            control: {
                type: string;
                options: (string | undefined)[];
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
    onSubmit: React.FormEventHandler<HTMLFormElement>;
    disabled?: boolean;
    validationStatus?: ValidationStatus;
};
export declare const CompleteDatePicker: {
    render: (argTypes: StorybookArguments) => React.ReactElement;
};
export declare const DefaultDatePicker: () => React.ReactElement;
export declare const Disabled: () => React.ReactElement;
export declare const WithDefaultValue: {
    render: () => React.ReactElement;
    parameters: {
        happo: {
            waitForContent: string;
        };
    };
};
declare const withDefaultInvalidValue: () => React.ReactElement;
export { withDefaultInvalidValue };
export declare const WithMinMaxInSameMonth: () => React.ReactElement;
export declare const WithMinMax: () => React.ReactElement;
declare const withRangeDate: {
    (): React.ReactElement;
    parameters: {
        happo: {
            waitForContent: string;
        };
    };
};
export { withRangeDate };
export declare const WithLocalizations: () => React.ReactElement;
