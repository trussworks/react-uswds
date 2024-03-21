import React from '../../../node_modules/react';
interface USWDSIconProps {
    focusable?: boolean;
    role?: string;
    size?: 3 | 4 | 5 | 6 | 7 | 8 | 9;
    className?: string;
}
export type IconProps = USWDSIconProps & JSX.IntrinsicElements['svg'];
export declare const makeUSWDSIcon: (Component: React.ComponentType<IconProps>) => React.FunctionComponent;
export {};
