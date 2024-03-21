import React from '../../../node_modules/react';
import { HeadingLevel } from '../../types/headingLevel';
export interface AccordionItemProps {
    title: React.ReactNode | string;
    content: React.ReactNode;
    expanded: boolean;
    id: string;
    className?: string;
    headingLevel: HeadingLevel;
    handleToggle?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
type AccordionProps = {
    bordered?: boolean;
    multiselectable?: boolean;
    items: AccordionItemProps[];
    className?: string;
};
export declare const AccordionItem: ({ title, id, content, expanded, className, headingLevel, handleToggle, }: AccordionItemProps) => React.ReactElement;
export declare const Accordion: ({ bordered, items, className, multiselectable, }: AccordionProps & JSX.IntrinsicElements['div']) => React.ReactElement;
export default Accordion;
