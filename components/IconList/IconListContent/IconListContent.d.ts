import { ReactElement, ReactNode } from 'react';
interface IconListContentProps {
    className?: string;
    children?: ReactNode;
}
export declare const IconListContent: ({ className, children, ...divProps }: IconListContentProps & JSX.IntrinsicElements['div']) => ReactElement;
export default IconListContent;
