import { LanguageSelectorProps } from '../LanguageSelector/LanguageSelector.js';

export type LanguageSelectorDropdownProps = LanguageSelectorProps & JSX.IntrinsicElements['div'];
declare const LanguageSelectorDropdown: ({ label, langs, small, className, displayLang, ...divProps }: LanguageSelectorDropdownProps) => import("react/jsx-runtime").JSX.Element;
export default LanguageSelectorDropdown;
