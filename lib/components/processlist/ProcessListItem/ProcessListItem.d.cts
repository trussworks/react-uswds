import { default as React } from 'react';

export type ProcessListItemProps = {
    className?: string;
    children?: React.ReactNode;
} & JSX.IntrinsicElements['li'];
declare const ProcessListItem: ({ className, children, ...liProps }: ProcessListItemProps) => React.ReactElement;
export default ProcessListItem;
