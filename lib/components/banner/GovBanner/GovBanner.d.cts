import { Language, TLD } from './utils.js';
import { BannerProps } from '../Banner/Banner.js';
import { ReactElement } from 'react';

export type GovBannerProps = {
    tld?: TLD;
    language?: Language;
} & BannerProps;
declare const GovBanner: ({ tld, language, className, ...sectionProps }: GovBannerProps) => ReactElement;
export default GovBanner;
