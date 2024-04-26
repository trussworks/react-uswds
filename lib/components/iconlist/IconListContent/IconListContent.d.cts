import { ReactElement, ReactNode } from 'react';

export type IconListContentProps = {
    className?: string;
    children?: ReactNode;
} & JSX.IntrinsicElements['div'];
declare const IconListContent: ({ className, children, ...divProps }: IconListContentProps) => ReactElement;
export default IconListContent;
