import React from 'react';
type SiteAlertProps = {
    variant: 'info' | 'emergency';
    children: string | React.ReactNode | React.ReactNode[];
    heading?: string;
    showIcon?: boolean;
    slim?: boolean;
    className?: string;
};
export declare const SiteAlert: ({ variant, children, heading, showIcon, slim, className, ...sectionProps }: SiteAlertProps & JSX.IntrinsicElements['section']) => React.ReactElement;
export default SiteAlert;
