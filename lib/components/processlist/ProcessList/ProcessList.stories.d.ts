import { default as React } from 'react';

declare const _default: {
    title: string;
    component: ({ className, children, ...listProps }: import('./ProcessList').ProcessListProps) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
    parameters: {
        docs: {
            description: {
                component: string;
            };
        };
    };
};
export default _default;
export declare const ProcessListDefault: () => React.ReactElement;
export declare const ProcessListNoTextCustomSizing: () => React.ReactElement;
export declare const ProcessListCustomSizing: () => React.ReactElement;
