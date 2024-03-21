import React from '../../../../node_modules/react';
import { ProcessListItemProps } from '../ProcessListItem/ProcessListItem';
type ProcessListProps = {
    className?: string;
    children: React.ReactElement<ProcessListItemProps>[];
};
export declare const ProcessList: ({ className, children, ...listProps }: ProcessListProps & JSX.IntrinsicElements['ol']) => React.ReactElement;
export default ProcessList;
