import { ReactElement } from 'react';

export type BannerContentProps = {
    isOpen: boolean;
} & JSX.IntrinsicElements['div'];
declare const BannerContent: ({ children, isOpen, className, ...divProps }: BannerContentProps) => ReactElement;
export default BannerContent;
