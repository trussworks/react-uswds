import { ReactElement, ReactNode } from 'react';

export type IconListIconProps = {
    className?: string;
    children: ReactNode;
} & JSX.IntrinsicElements['div'];
declare const IconListIcon: ({ className, children, ...divProps }: IconListIconProps) => ReactElement;
export default IconListIcon;
