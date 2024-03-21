import { ReactElement } from '../../../../node_modules/react';
type BannerButtonProps = {
    isOpen: boolean;
    spanProps?: JSX.IntrinsicElements['span'];
};
export declare const BannerButton: ({ isOpen, children, className, spanProps, ...buttonProps }: BannerButtonProps & JSX.IntrinsicElements['button']) => ReactElement;
export {};
