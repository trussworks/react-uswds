import React from 'react';
interface ButtonProps {
    type: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    children: React.ReactNode;
    secondary?: boolean;
    base?: boolean;
    accent?: boolean;
    outline?: boolean;
    inverse?: boolean;
    big?: boolean;
    unstyled?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
export declare const Button: (props: ButtonProps) => React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
export default Button;
