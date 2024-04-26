import { GridItemProps, BreakpointKeys } from '../types.js';
import { default as React } from 'react';

export type GridBreakpointProps = GridItemProps & {
    [P in BreakpointKeys]?: GridItemProps;
};
export type BaseGridProps<T> = GridBreakpointProps & {
    className?: string;
} & T;
export type GridLayoutProps = {
    gridLayout?: GridBreakpointProps;
};
export interface WithCustomGridProps<T> {
    asCustom: React.FunctionComponent<T>;
}
export type DefaultGridProps = BaseGridProps<JSX.IntrinsicElements['div']>;
export type CustomGridProps<T> = BaseGridProps<React.PropsWithChildren<T>> & WithCustomGridProps<React.PropsWithChildren<T>>;
export type GridProps<T = DefaultGridProps> = DefaultGridProps | CustomGridProps<T>;
export type omittedProps = 'mobile' | 'tablet' | 'desktop' | 'widescreen' | 'mobileLg' | 'tabletLg' | 'desktopLg' | 'children' | 'className' | 'row' | 'col' | 'gap' | 'offset';
export default function Grid(props: DefaultGridProps): React.ReactElement;
export default function Grid<T>(props: CustomGridProps<T>): React.ReactElement;
