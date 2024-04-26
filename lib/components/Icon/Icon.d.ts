import { default as React } from 'react';

export interface USWDSIconProps {
    focusable?: boolean;
    role?: string;
    size?: 3 | 4 | 5 | 6 | 7 | 8 | 9;
    className?: string;
}
export type IconProps = USWDSIconProps & JSX.IntrinsicElements['svg'];
export declare const makeUSWDSIcon: (Component: React.ComponentType<IconProps>) => React.FunctionComponent;
