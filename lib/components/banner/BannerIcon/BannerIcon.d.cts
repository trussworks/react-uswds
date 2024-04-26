import { ReactElement } from 'react';

export type BannerIconProps = JSX.IntrinsicElements['img'];
declare const BannerIcon: ({ src, alt, className, ...imgProps }: BannerIconProps) => ReactElement;
export default BannerIcon;
