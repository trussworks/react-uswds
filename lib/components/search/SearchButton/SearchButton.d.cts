import { default as React } from 'react';

export type SearchLocalization = {
    buttonText: string;
};
export type SearchButtonProps = {
    size?: 'big' | 'small';
    className?: string;
    i18n?: SearchLocalization;
    buttonAriaLabel?: string;
};
declare const SearchButton: ({ size, className, i18n, buttonAriaLabel, }: SearchButtonProps) => React.ReactElement;
export default SearchButton;
