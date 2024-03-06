import React from 'react';
type LogoProps = {
    size?: 'big' | 'medium' | 'slim';
    heading?: React.ReactNode;
    image: React.ReactNode;
};
export declare const Logo: ({ size, heading, image, ...elementAttributes }: LogoProps & React.HtmlHTMLAttributes<HTMLElement>) => React.ReactElement;
export {};
