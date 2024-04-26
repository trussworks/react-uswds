import { HeadingLevel } from '../../types/headingLevel';
import { default as React } from 'react';

declare const _default: {
    title: string;
    component: ({ className, content, headingLevel, mainProps, navProps, rootMargin, scrollOffset, threshold, title, ...divProps }: import('./InPageNavigation').InPageNavigationProps) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
    argTypes: {
        headingLevel: {
            control: string;
            options: string[];
        };
        rootMargin: {
            control: string;
        };
        threshold: {
            control: {
                type: string;
                min: number;
                max: number;
                step: number;
            };
        };
        title: {
            control: string;
        };
    };
    args: {
        headingLevel: string;
        rootMargin: string;
        threshold: number;
        title: string;
    };
    parameters: {
        docs: {
            description: {
                component: string;
            };
        };
    };
};
export default _default;
type StorybookArguments = {
    headingLevel: HeadingLevel;
    rootMargin: string;
    scrollOffset: string;
    threshold: number;
    title: string;
};
export declare const Default: (argTypes: StorybookArguments) => React.ReactElement;
export declare const ScrollOffset: (argTypes: StorybookArguments) => React.ReactElement;
