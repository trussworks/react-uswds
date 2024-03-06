import React from 'react';
type SearchLocalization = {
    buttonText: string;
};
type SearchButtonProps = {
    size?: 'big' | 'small';
    className?: string;
    i18n?: SearchLocalization;
    buttonAriaLabel?: string;
};
export declare const SearchButton: ({ size, className, i18n, buttonAriaLabel, }: SearchButtonProps) => React.ReactElement;
export default SearchButton;
