import React from '../../../../node_modules/react';
import { StepIndicatorStepProps } from '../StepIndicatorStep/StepIndicatorStep';
import { HeadingLevel } from '../../../types/headingLevel';
type StepIndicatorProps = {
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
export declare const StepIndicator: (props: StepIndicatorProps) => React.ReactElement;
export {};
