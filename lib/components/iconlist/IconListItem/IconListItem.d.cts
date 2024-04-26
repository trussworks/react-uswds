import { ReactElement, ReactNode } from 'react';

export type IconListItemProps = {
    className?: string;
    children: ReactNode;
} & JSX.IntrinsicElements['li'];
declare const IconListItem: ({ className, children, ...liProps }: IconListItemProps) => ReactElement;
export default IconListItem;
