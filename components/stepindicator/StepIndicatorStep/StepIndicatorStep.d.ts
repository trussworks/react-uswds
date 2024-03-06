import React from 'react';
export interface StepIndicatorStepProps {
    label: string;
    status?: 'complete' | 'current' | 'incomplete';
    className?: string;
}
export declare const StepIndicatorStep: (props: StepIndicatorStepProps & JSX.IntrinsicElements['li']) => React.ReactElement;
