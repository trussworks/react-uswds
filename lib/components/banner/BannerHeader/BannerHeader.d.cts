import { ReactElement, ReactNode } from 'react';

export type BannerHeaderProps = {
    isOpen: boolean;
    flagImg: ReactNode;
    innerDivProps?: JSX.IntrinsicElements['div'];
    headerText: ReactNode;
    headerTextProps?: JSX.IntrinsicElements['p'];
    headerActionText: ReactNode;
    headerActionProps?: JSX.IntrinsicElements['p'];
} & JSX.IntrinsicElements['header'];
declare const BannerHeader: ({ children, isOpen, flagImg, innerDivProps, headerText, headerTextProps, headerActionText, headerActionProps, className, ...headerProps }: BannerHeaderProps) => ReactElement;
export default BannerHeader;
