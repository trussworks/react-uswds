import { default as React } from 'react';

export type FooterExtendedNavListSectionProps = {
    isOpen: boolean;
    links: React.ReactNode[];
    onToggle?: () => void;
};
declare const FooterExtendedNavListSection: ({ isOpen, links, onToggle, }: FooterExtendedNavListSectionProps) => React.ReactElement;
export default FooterExtendedNavListSection;
