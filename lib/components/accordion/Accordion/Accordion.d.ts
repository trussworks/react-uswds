import { AccordionItemProps } from '../AccordionItem/AccordionItem.js';
import { default as React } from 'react';

export type AccordionProps = {
    bordered?: boolean;
    multiselectable?: boolean;
    items: AccordionItemProps[];
    className?: string;
} & JSX.IntrinsicElements['div'];
declare const Accordion: ({ bordered, items, className, multiselectable, ...props }: AccordionProps) => React.ReactElement;
export default Accordion;
