import { ReactElement, ReactNode } from 'react';
interface IconListItemProps {
    className?: string;
    children: ReactNode;
}
export declare const IconListItem: ({ className, children, ...liProps }: IconListItemProps & JSX.IntrinsicElements['li']) => ReactElement;
export default IconListItem;
