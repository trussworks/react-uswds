import React from 'react';
export type ButtonProps = {
    type: 'button' | 'submit' | 'reset';
    children: React.ReactNode;
    secondary?: boolean;
    base?: boolean;
    accentStyle?: 'cool' | 'warm';
    outline?: boolean;
    inverse?: boolean;
    size?: 'big';
    unstyled?: boolean;
};
export declare const Button: ({ type, children, secondary, base, accentStyle, outline, inverse, size, unstyled, onClick, className, ...defaultProps }: ButtonProps & JSX.IntrinsicElements['button']) => React.ReactElement;
export default Button;
