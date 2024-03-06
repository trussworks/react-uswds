import React, { ReactElement } from 'react';
import { HeadingLevel } from '../../../types/headingLevel';
interface BaseIconListTitleProps {
    type: string;
    children: React.ReactNode;
    className?: string;
}
interface HeadingIconListTitleProps extends BaseIconListTitleProps {
    type: HeadingLevel;
}
interface ParagraphIconListTitleProps extends BaseIconListTitleProps {
    type: 'p';
}
type IconListHeadingTitleProps = HeadingIconListTitleProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
type IconListParagraphTitleProps = ParagraphIconListTitleProps & JSX.IntrinsicElements['p'];
export declare const IconListTitle: ({ type, children, className, }: IconListParagraphTitleProps | IconListHeadingTitleProps) => ReactElement;
export default IconListTitle;
