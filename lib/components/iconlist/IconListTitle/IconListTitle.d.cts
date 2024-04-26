import { HeadingLevel } from '../../../types/headingLevel.js';
import { default as React, ReactElement } from 'react';

export interface BaseIconListTitleProps {
    type: string;
    children: React.ReactNode;
    className?: string;
}
export interface HeadingIconListTitleProps extends BaseIconListTitleProps {
    type: HeadingLevel;
}
export interface ParagraphIconListTitleProps extends BaseIconListTitleProps {
    type: 'p';
}
export type IconListHeadingTitleProps = HeadingIconListTitleProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
export type IconListParagraphTitleProps = ParagraphIconListTitleProps & JSX.IntrinsicElements['p'];
export type IconListTitleProps = IconListParagraphTitleProps | IconListHeadingTitleProps;
declare const IconListTitle: ({ type, children, className, ...props }: IconListTitleProps) => ReactElement;
export default IconListTitle;
