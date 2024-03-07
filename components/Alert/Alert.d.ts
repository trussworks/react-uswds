import React from 'react';
import { HeadingLevel } from '../../types/headingLevel';
type AlertProps = {
    type: 'success' | 'warning' | 'error' | 'info';
    heading?: React.ReactNode;
    headingLevel: HeadingLevel;
    children?: React.ReactNode;
    cta?: React.ReactNode;
    slim?: boolean;
    noIcon?: boolean;
    validation?: boolean;
};
export declare const Alert: ({ type, heading, headingLevel, cta, children, slim, noIcon, className, validation, ...props }: AlertProps & React.HTMLAttributes<HTMLDivElement>) => React.ReactElement;
export default Alert;
