import { DefaultGridContainerProps, CustomGridContainerProps, GridContainerProps } from './GridContainer.js';

export declare function isCustomProps<T>(props: DefaultGridContainerProps | CustomGridContainerProps<T>): props is CustomGridContainerProps<T>;
export declare function gridContainerClasses(className: GridContainerProps['className'], containerSize: GridContainerProps['containerSize']): string | undefined;
