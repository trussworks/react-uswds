import { ReactElement } from 'react';

export type BannerProps = {
    divProps?: JSX.IntrinsicElements['div'];
} & JSX.IntrinsicElements['section'];
declare const Banner: ({ children, divProps, className, ...sectionProps }: BannerProps) => ReactElement;
export default Banner;
