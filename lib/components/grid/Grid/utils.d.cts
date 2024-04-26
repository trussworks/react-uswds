import { DefaultGridProps, omittedProps, CustomGridProps, GridBreakpointProps } from './Grid.js';
import { GridItemProps, BreakpointKeys } from '../types.js';

export declare function isCustomProps<T>(props: Omit<DefaultGridProps, omittedProps> | Omit<CustomGridProps<T>, omittedProps>): props is Omit<CustomGridProps<T>, omittedProps>;
export declare const getGridClasses: (itemProps?: GridItemProps, breakpoint?: BreakpointKeys) => string;
export declare const applyGridClasses: (gridLayout: GridBreakpointProps) => string;
