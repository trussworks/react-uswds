import { default as React } from 'react';

export type ButtonProps = {
    type?: 'button' | 'submit' | 'reset';
    children: React.ReactNode;
    secondary?: boolean;
    base?: boolean;
    accentStyle?: 'cool' | 'warm';
    outline?: boolean;
    inverse?: boolean;
    size?: 'big';
    unstyled?: boolean;
} & JSX.IntrinsicElements['button'];
declare const Button: React.ForwardRefExoticComponent<Omit<ButtonProps, "ref"> & React.RefAttributes<HTMLButtonElement>>;
export default Button;
