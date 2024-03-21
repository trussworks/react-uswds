import React from '../../../node_modules/react';
export type LanguageDefinition = {
    label: string;
    label_local?: string;
    attr: string;
    on_click: string | (() => void);
};
export type LanguageSelectorProps = {
    label?: string;
    langs: LanguageDefinition[];
    small?: boolean;
    className?: string;
    displayLang?: string;
};
export declare const LanguageSelector: ({ label, langs, small, className, displayLang, ...divProps }: LanguageSelectorProps & JSX.IntrinsicElements['div']) => React.ReactElement;
export default LanguageSelector;
