import React from 'react';
interface AlertProps {
    type?: 'success' | 'warning' | 'error' | 'info';
    heading?: React.ReactNode;
    children?: React.ReactNode;
}
export declare const Alert: (props: AlertProps) => React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
export default Alert;
