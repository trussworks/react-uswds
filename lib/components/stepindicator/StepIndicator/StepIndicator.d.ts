import { HeadingLevel } from '../../../types/headingLevel.js';
import { StepIndicatorStepProps } from '../StepIndicatorStep/StepIndicatorStep.js';
import { default as React } from 'react';

export type StepIndicatorProps = {
    showLabels?: boolean;
    counters?: 'none' | 'default' | 'small';
    centered?: boolean;
    children: React.ReactElement<StepIndicatorStepProps>[];
    className?: string;
    divProps?: JSX.IntrinsicElements['div'];
    listProps?: JSX.IntrinsicElements['ol'];
    headingProps?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
    headingLevel: HeadingLevel;
    stepText?: string;
    ofText?: string;
};
declare const StepIndicator: ({ showLabels, counters, centered, children, className, divProps, listProps, headingProps, headingLevel, stepText, ofText, }: StepIndicatorProps) => React.ReactElement;
export default StepIndicator;
