import React from 'react';
type SocialLinksProps = {
    links: React.ReactNode[];
};
type SocialLinkProps = {
    name: 'Facebook' | 'Twitter' | 'YouTube' | 'Instagram' | 'RSS';
};
export declare const SocialLinks: ({ className, links, }: SocialLinksProps & JSX.IntrinsicElements['div']) => React.ReactElement;
export declare const SocialLink: ({ name, ...props }: SocialLinkProps & JSX.IntrinsicElements['a']) => React.ReactElement;
export {};
