import { default as React } from 'react';

declare const _default: {
    title: string;
    component: ({ children, className, ...ulProps }: import('./ValidationChecklist/ValidationChecklist').ValidationChecklistProps) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
    subcomponents: {
        ValidationItem: ({ children, className, isValid, ...liProps }: import('./ValidationItem/ValidationItem').ValidationItemProps) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
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
export declare const Default: () => React.ReactElement;
