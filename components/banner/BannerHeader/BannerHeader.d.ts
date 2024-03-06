import { ReactElement, ReactNode } from 'react';
type BannerHeaderProps = {
    isOpen: boolean;
    flagImg: ReactNode;
    innerDivProps?: JSX.IntrinsicElements['div'];
    headerText: ReactNode;
    headerTextProps?: JSX.IntrinsicElements['p'];
    headerActionText: ReactNode;
    headerActionProps?: JSX.IntrinsicElements['p'];
};
export declare const BannerHeader: ({ children, isOpen, flagImg, innerDivProps, headerText, headerTextProps, headerActionText, headerActionProps, className, ...headerProps }: BannerHeaderProps & JSX.IntrinsicElements['header']) => ReactElement;
export {};
