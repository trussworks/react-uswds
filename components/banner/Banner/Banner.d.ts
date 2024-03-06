import { ReactElement } from 'react';
type BannerProps = {
    divProps?: JSX.IntrinsicElements['div'];
};
export declare const Banner: ({ children, divProps, className, ...sectionProps }: BannerProps & JSX.IntrinsicElements['section']) => ReactElement;
export {};
