import { ComboBoxRef } from './ComboBox';
import { default as React } from 'react';

declare const _default: {
    title: string;
    component: React.ForwardRefExoticComponent<import('./ComboBox').ComboBoxProps & React.RefAttributes<ComboBoxRef>>;
    parameters: {
        docs: {
            description: {
                component: string;
            };
        };
    };
};
export default _default;
export declare const DefaultComboBoxWithPropOptions: () => React.ReactElement;
export declare const WithDefaultValue: () => React.ReactElement;
export declare const WithLabel: () => React.ReactElement;
export declare const Disabled: () => React.ReactElement;
export declare const WithOtherFields: () => React.ReactElement;
export declare const ExposedRefMethods: () => React.ReactElement;
export declare const CustomInputChangeHandler: () => React.ReactElement;
