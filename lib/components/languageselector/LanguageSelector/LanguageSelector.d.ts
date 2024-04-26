import { default as React } from 'react';

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
} & JSX.IntrinsicElements['div'];
declare const LanguageSelector: ({ label, langs, small, className, displayLang, ...divProps }: LanguageSelectorProps) => React.ReactElement;
export default LanguageSelector;
