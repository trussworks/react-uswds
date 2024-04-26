import { CustomLinkProps, DefaultLinkProps } from '../../Link/Link.js';
import { default as React } from 'react';

export type BreadcrumbDefaultLinkProps = DefaultLinkProps;
export type BreadcrumbCustomLinkProps<T> = CustomLinkProps<T>;
export type BreadcrumbLinkProps<T = DefaultLinkProps> = DefaultLinkProps | CustomLinkProps<T>;
export default function BreadcrumbLink(props: BreadcrumbLinkProps): React.ReactElement;
export default function BreadcrumbLink<T>(props: CustomLinkProps<T>): React.ReactElement;
