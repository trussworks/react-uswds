import { LanguageDefinition } from './LanguageSelector';
import { default as React } from 'react';

declare const _default: {
    title: string;
    component: ({ label, langs, small, className, displayLang, ...divProps }: import('./LanguageSelector').LanguageSelectorProps) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
    argTypes: {
        displayLang: {
            control: string;
        };
        small: {
            control: string;
        };
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
export declare const LanguagesDisplayPropSandbox: import('@storybook/types').AnnotatedStoryFn<import("@storybook/react").ReactRenderer, {
    label?: string | undefined;
    langs: LanguageDefinition[];
    small?: boolean | undefined;
    className?: string | undefined;
    displayLang?: string | undefined;
} & React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement>>;
export declare const LanguagesDisplayMoreThanTwoLanguagesPropSandbox: import('@storybook/types').AnnotatedStoryFn<import("@storybook/react").ReactRenderer, {
    label?: string | undefined;
    langs: LanguageDefinition[];
    small?: boolean | undefined;
    className?: string | undefined;
    displayLang?: string | undefined;
} & React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement>>;
type StorybookArguments = {
    small?: boolean;
};
export declare const TwoLanguagesAsALink: (argTypes: StorybookArguments) => React.ReactElement;
export declare const TwoLanguagesAsAButton: (argTypes: StorybookArguments) => React.ReactElement;
export declare const MoreThanTwoLanguagesAsALink: (argTypes: StorybookArguments) => React.ReactElement;
export declare const MoreThanTwoLanguagesAsAButton: (argTypes: StorybookArguments) => React.ReactElement;
export declare const CustomClass: (argTypes: StorybookArguments) => React.ReactElement;
