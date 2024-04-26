import { default as React } from 'react';

export type LogoProps = {
    size?: 'big' | 'medium' | 'slim';
    heading?: React.ReactNode;
    image: React.ReactNode;
} & JSX.IntrinsicElements['div'];
declare const Logo: ({ size, heading, image, className, ...props }: LogoProps) => React.ReactElement;
export default Logo;
