import React from '../../../../node_modules/react';
import { ContainerSizes } from '../types';
type GridContainerProps = {
    containerSize?: ContainerSizes;
    className?: string;
    children: React.ReactNode;
};
interface WithCustomGridContainerProps<T> {
    asCustom: React.FunctionComponent<T>;
}
export type DefaultGridContainerProps = GridContainerProps;
export type CustomGridContainerProps<T> = GridContainerProps & WithCustomGridContainerProps<T>;
export declare function isCustomProps<T>(props: DefaultGridContainerProps | CustomGridContainerProps<T>): props is CustomGridContainerProps<T>;
export declare function GridContainer(props: DefaultGridContainerProps): React.ReactElement;
export declare function GridContainer<T>(props: CustomGridContainerProps<T>): React.ReactElement;
export {};
