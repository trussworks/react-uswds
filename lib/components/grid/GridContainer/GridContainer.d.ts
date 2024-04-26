import { ContainerSizes } from '../types.js';
import { default as React } from 'react';

export interface WithCustomGridContainerProps<T> {
    asCustom: React.FunctionComponent<T>;
}
export type BaseGridContainerProps = {
    containerSize?: ContainerSizes;
    className?: string;
    children: React.ReactNode;
};
export type DefaultGridContainerProps = BaseGridContainerProps;
export type CustomGridContainerProps<T> = BaseGridContainerProps & WithCustomGridContainerProps<T>;
export type GridContainerProps<T = BaseGridContainerProps> = DefaultGridContainerProps | CustomGridContainerProps<T>;
export default function GridContainer(props: DefaultGridContainerProps): React.ReactElement;
export default function GridContainer<T>(props: CustomGridContainerProps<T>): React.ReactElement;
