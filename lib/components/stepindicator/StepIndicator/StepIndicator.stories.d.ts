import { default as React } from 'react';

declare const _default: {
    title: string;
    component: ({ showLabels, counters, centered, children, className, divProps, listProps, headingProps, headingLevel, stepText, ofText, }: import('../StepIndicator/StepIndicator').StepIndicatorProps) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
    parameters: {
        docs: {
            description: {
                component: string;
            };
        };
    };
    argTypes: {
        stepText: {
            control: string;
        };
        ofText: {
            control: string;
        };
    };
    args: {
        stepText: string;
        ofText: string;
    };
};
export default _default;
type StorybookArguments = {
    stepText: string;
    ofText: string;
};
export declare const DefaultStepIndicator: (args: StorybookArguments) => React.ReactElement;
export declare const NoLabels: (args: StorybookArguments) => React.ReactElement;
export declare const Centered: (args: StorybookArguments) => React.ReactElement;
export declare const Counters: (args: StorybookArguments) => React.ReactElement;
export declare const SmallCounters: (args: StorybookArguments) => React.ReactElement;
export declare const DifferentHeadingLevel: (args: StorybookArguments) => React.ReactElement;
