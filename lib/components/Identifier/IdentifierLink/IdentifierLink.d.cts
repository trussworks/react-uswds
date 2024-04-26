import { CustomLinkProps, DefaultLinkProps } from '../../Link/Link.js';
import { default as React } from 'react';

export type IdentifierLinkProps<T = DefaultLinkProps> = DefaultLinkProps | CustomLinkProps<T>;
export default function IdentifierLink(props: DefaultLinkProps): React.ReactElement;
export default function IdentifierLink<T>(props: CustomLinkProps<T>): React.ReactElement;
