import { default as React } from 'react';

export type SocialLinksProps = {
    links: React.ReactNode[];
} & JSX.IntrinsicElements['div'];
declare const SocialLinks: ({ className, links, }: SocialLinksProps) => React.ReactElement;
export default SocialLinks;
