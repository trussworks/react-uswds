import { ReactElement } from 'react';

export type BannerButtonProps = {
    isOpen: boolean;
    spanProps?: JSX.IntrinsicElements['span'];
} & JSX.IntrinsicElements['button'];
declare const BannerButton: ({ isOpen, children, className, spanProps, ...buttonProps }: BannerButtonProps) => ReactElement;
export default BannerButton;
