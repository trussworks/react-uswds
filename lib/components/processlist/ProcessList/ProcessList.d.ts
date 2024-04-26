import { ProcessListItemProps } from '../ProcessListItem/ProcessListItem.js';
import { default as React } from 'react';

export type ProcessListProps = {
    className?: string;
    children: React.ReactElement<ProcessListItemProps>[];
} & JSX.IntrinsicElements['ol'];
declare const ProcessList: ({ className, children, ...listProps }: ProcessListProps) => React.ReactElement;
export default ProcessList;
