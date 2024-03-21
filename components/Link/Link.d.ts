import React from '../../../node_modules/react';
type StyledLinkProps<T> = {
    variant?: 'external' | 'unstyled' | 'nav';
    className?: string;
    children: React.ReactNode;
    allowSpacebarActivation?: boolean;
} & T;
interface WithDefaultLinkProps {
    href: string;
}
interface WithCustomLinkProps<T> {
    asCustom: React.FunctionComponent<T>;
}
export type DefaultLinkProps = StyledLinkProps<JSX.IntrinsicElements['a']> & WithDefaultLinkProps;
export type CustomLinkProps<T> = StyledLinkProps<T> & WithCustomLinkProps<T>;
export declare function isCustomProps<T>(props: DefaultLinkProps | CustomLinkProps<T>): props is CustomLinkProps<T>;
export declare function Link(props: DefaultLinkProps): React.ReactElement;
export declare function Link<T>(props: CustomLinkProps<T>): React.ReactElement;
export {};
