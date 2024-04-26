import { HeadingLevel } from '../../../types/headingLevel.js';
import { default as React } from 'react';

export interface AccordionItemProps {
    title: React.ReactNode | string;
    content: React.ReactNode;
    expanded: boolean;
    id: string;
    className?: string;
    headingLevel: HeadingLevel;
    handleToggle?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
declare const AccordionItem: ({ title, id, content, expanded, className, headingLevel, handleToggle, }: AccordionItemProps) => React.ReactElement;
export default AccordionItem;
