import { default as React } from 'react';

export type StepIndicatorStepProps = {
    label: string;
    status?: 'complete' | 'current' | 'incomplete';
    className?: string;
} & JSX.IntrinsicElements['li'];
declare const StepIndicatorStep: ({ label, status, className, ...liProps }: StepIndicatorStepProps) => React.ReactElement;
export default StepIndicatorStep;
