import React from '../../../../node_modules/react';
import { GridItemProps, BreakpointKeys } from '../types';
export type GridProps = GridItemProps & {
    [P in BreakpointKeys]?: GridItemProps;
};
export type GridComponentProps<T> = GridProps & {
    className?: string;
} & T;
export type GridLayoutProp = {
    gridLayout?: GridProps;
};
interface WithCustomGridProps<T> {
    asCustom: React.FunctionComponent<T>;
}
export type DefaultGridProps = GridComponentProps<JSX.IntrinsicElements['div']>;
export type CustomGridProps<T> = GridComponentProps<React.PropsWithChildren<T>> & WithCustomGridProps<React.PropsWithChildren<T>>;
type omittedProps = 'mobile' | 'tablet' | 'desktop' | 'widescreen' | 'mobileLg' | 'tabletLg' | 'desktopLg' | 'children' | 'className' | 'row' | 'col' | 'gap' | 'offset';
export declare function isCustomProps<T>(props: Omit<DefaultGridProps, omittedProps> | Omit<CustomGridProps<T>, omittedProps>): props is Omit<CustomGridProps<T>, omittedProps>;
export declare const getGridClasses: (itemProps?: GridItemProps, breakpoint?: BreakpointKeys) => string;
export declare const applyGridClasses: (gridLayout: GridProps) => string;
export declare function Grid(props: DefaultGridProps): React.ReactElement;
export declare function Grid<T>(props: CustomGridProps<T>): React.ReactElement;
export {};
