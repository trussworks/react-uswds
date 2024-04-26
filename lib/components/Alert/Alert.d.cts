import { HeadingLevel } from '../../types/headingLevel.js';
import { default as React } from 'react';

export type AlertProps = {
    type?: 'success' | 'warning' | 'error' | 'info';
    heading?: React.ReactNode;
    headingLevel: HeadingLevel;
    children?: React.ReactNode;
    cta?: React.ReactNode;
    slim?: boolean;
    noIcon?: boolean;
    validation?: boolean;
} & JSX.IntrinsicElements['div'];
declare const Alert: ({ type, heading, headingLevel, cta, children, slim, noIcon, className, validation, ...props }: AlertProps) => React.ReactElement;
export default Alert;
