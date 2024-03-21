import React from '../../../../node_modules/react';
import { HeadingLevel } from '../../../types/headingLevel';
interface BaseProcessListHeadingProps {
    type: string;
    className?: string;
    children?: React.ReactNode;
}
interface HeadingProcessListHeadingProps extends BaseProcessListHeadingProps {
    type: HeadingLevel;
}
interface ParagraphProcessListHeadingProps extends BaseProcessListHeadingProps {
    type: 'p';
}
type ProcessListHeadingProps = HeadingProcessListHeadingProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
type ProcessListParagraphHeadingProps = ParagraphProcessListHeadingProps & JSX.IntrinsicElements['p'];
export declare const ProcessListHeading: ({ type, className, children, ...headingProps }: ProcessListParagraphHeadingProps | ProcessListHeadingProps) => React.ReactElement;
export {};
