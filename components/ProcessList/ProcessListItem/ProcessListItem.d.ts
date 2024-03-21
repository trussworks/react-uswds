import React from '../../../../node_modules/react';
export interface ProcessListItemProps {
    className?: string;
    children?: React.ReactNode;
}
export declare const ProcessListItem: ({ className, children, ...liProps }: ProcessListItemProps & JSX.IntrinsicElements['li']) => React.ReactElement;
export default ProcessListItem;
