import { default as React } from 'react';

export type StyledLinkProps<T> = {
    variant?: 'external' | 'unstyled' | 'nav';
    className?: string;
    children: React.ReactNode;
    allowSpacebarActivation?: boolean;
} & T;
export interface WithDefaultLinkProps {
    href: string;
}
export interface WithCustomLinkProps<T> {
    asCustom: React.FunctionComponent<T>;
}
export type DefaultLinkProps = StyledLinkProps<JSX.IntrinsicElements['a']> & WithDefaultLinkProps;
export type CustomLinkProps<T> = StyledLinkProps<T> & WithCustomLinkProps<T>;
export type LinkProps<T = DefaultLinkProps> = DefaultLinkProps | CustomLinkProps<T>;
export default function Link(props: DefaultLinkProps): React.ReactElement;
export default function Link<T>(props: CustomLinkProps<T>): React.ReactElement;
