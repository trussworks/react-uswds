import { DefaultLinkProps, CustomLinkProps, StyledLinkProps } from './Link.js';

export declare function isCustomProps<T>(props: DefaultLinkProps | CustomLinkProps<T>): props is CustomLinkProps<T>;
export declare const handleKeyDown: (e: React.KeyboardEvent) => void;
export declare function linkClasses<T>(variant: StyledLinkProps<T>['variant'], className: StyledLinkProps<T>['className']): string | undefined;
