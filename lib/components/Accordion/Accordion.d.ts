import React from 'react';
interface AccordionItem {
    title: React.ReactNode | string;
    content: React.ReactNode;
    expanded: boolean;
    id: string;
    handleToggle?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
interface AccordionProps {
    bordered?: boolean;
    items: AccordionItem[];
}
export declare const AccordionItem: (props: AccordionItem) => React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
export declare const Accordion: (props: AccordionProps) => React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
export default Accordion;
