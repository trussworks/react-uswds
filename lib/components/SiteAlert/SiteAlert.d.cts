import { default as React } from 'react';

export type SiteAlertProps = {
    variant: 'info' | 'emergency';
    children: string | React.ReactNode | React.ReactNode[];
    heading?: string;
    showIcon?: boolean;
    slim?: boolean;
    className?: string;
} & JSX.IntrinsicElements['section'];
declare const SiteAlert: ({ variant, children, heading, showIcon, slim, className, ...sectionProps }: SiteAlertProps) => React.ReactElement;
export default SiteAlert;
