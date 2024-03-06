import { ReactElement } from 'react';
type Language = 'english' | 'spanish';
type TLD = '.gov' | '.mil';
type GovBannerProps = {
    tld?: TLD;
    language?: Language;
};
export declare const GovBanner: ({ tld, language, className, ...sectionProps }: GovBannerProps & JSX.IntrinsicElements['section']) => ReactElement;
export default GovBanner;
