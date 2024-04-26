import { HeadingLevel } from '../../../types/headingLevel.js';
import { default as React } from 'react';

export interface BaseProcessListHeadingProps {
    type: string;
    className?: string;
    children?: React.ReactNode;
}
export interface HeadingProcessListHeadingProps extends BaseProcessListHeadingProps {
    type: HeadingLevel;
}
export interface ParagraphProcessListHeadingProps extends BaseProcessListHeadingProps {
    type: 'p';
}
export type ProcessListHeadingAsHeadingProps = HeadingProcessListHeadingProps & JSX.IntrinsicElements['h1'];
export type ProcessListHeadingAsParagraphProps = ParagraphProcessListHeadingProps & JSX.IntrinsicElements['p'];
export type ProcessListHeadingProps = ProcessListHeadingAsHeadingProps | ProcessListHeadingAsParagraphProps;
declare const ProcessListHeading: ({ type, className, children, ...headingProps }: ProcessListHeadingProps) => React.ReactElement;
export default ProcessListHeading;
