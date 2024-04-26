import { ReactElement } from 'react';

export type BannerFlagProps = JSX.IntrinsicElements['img'];
declare const BannerFlag: ({ alt, className, ...imgProps }: BannerFlagProps) => ReactElement;
export default BannerFlag;
