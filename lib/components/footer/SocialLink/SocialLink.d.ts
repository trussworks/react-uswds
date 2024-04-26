import { default as React } from 'react';

export type SocialLinkProps = {
    name: 'Facebook' | 'Twitter' | 'YouTube' | 'Instagram' | 'RSS';
} & JSX.IntrinsicElements['a'];
declare const SocialLink: ({ name, ...props }: SocialLinkProps) => React.ReactElement;
export default SocialLink;
