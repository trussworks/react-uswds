import { default as React } from 'react';

declare const _default: {
    title: string;
    component: ({ bordered, items, className, multiselectable, ...props }: import('./Accordion').AccordionProps) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
    parameters: {
        docs: {
            description: {
                component: string;
            };
        };
    };
};
export default _default;
export declare const Borderless: () => React.ReactElement;
export declare const Bordered: () => React.ReactElement;
export declare const Multiselectable: () => React.ReactElement;
export declare const CustomTitles: () => React.ReactElement;
