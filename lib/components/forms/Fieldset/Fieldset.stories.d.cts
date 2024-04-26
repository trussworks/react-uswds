import { default as React } from 'react';

declare const _default: {
    title: string;
    component: ({ children, legend, className, legendStyle, requiredMarker, ...fieldsetProps }: import('./Fieldset').FieldsetProps) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
    parameters: {
        docs: {
            description: {
                component: string;
            };
        };
    };
};
export default _default;
export declare const NameFieldset: () => React.ReactElement;
export declare const CheckboxFieldset: () => React.ReactElement;
export declare const CheckboxFieldsetWithDefaultLegend: () => React.ReactElement;
export declare const RadioFieldset: () => React.ReactElement;
export declare const RadioFieldsetWithDefaultLegend: () => React.ReactElement;
