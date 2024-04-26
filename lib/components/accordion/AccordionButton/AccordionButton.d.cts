import { default as React } from 'react';

export type AccordionButtonProps = {
    expanded: boolean;
    id: string;
    className?: string;
} & JSX.IntrinsicElements['button'];
declare const AccordionButton: ({ children, id, expanded, className, ...props }: AccordionButtonProps) => React.ReactElement;
export default AccordionButton;
