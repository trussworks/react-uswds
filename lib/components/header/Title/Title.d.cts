import { default as React } from 'react';

export type TitleProps = {
    children: React.ReactNode;
} & JSX.IntrinsicElements['div'];
declare const Title: ({ className, children, ...divProps }: TitleProps) => React.ReactElement;
export default Title;
