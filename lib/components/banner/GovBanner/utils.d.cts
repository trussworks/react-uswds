export type Language = 'english' | 'spanish';
export type TLD = '.gov' | '.mil';
export interface GovBannerCopy {
    header: string;
    ariaLabel: string;
    headerAction: string;
    tldSectionHeader: string;
    tldSectionContent: JSX.Element;
    httpsSectionHeader: string;
    httpsSectionContent: JSX.Element;
}
export declare const getCopy: (language: Language, tld: TLD) => GovBannerCopy;
