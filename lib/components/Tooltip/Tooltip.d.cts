import { ForwardRefExoticComponent, ReactElement, ReactNode } from 'react';

export type BaseTooltipProps<T> = {
    label: ReactNode;
    title?: string;
    position?: 'top' | 'bottom' | 'left' | 'right' | undefined;
    wrapperclasses?: string;
    className?: string;
    children: ReactNode;
} & T;
export interface WithCustomTooltipProps<T> {
    asCustom: ForwardRefExoticComponent<T>;
}
export type DefaultTooltipProps = BaseTooltipProps<JSX.IntrinsicElements['button']>;
export type CustomTooltipProps<T> = BaseTooltipProps<T> & WithCustomTooltipProps<T>;
export type TooltipProps<T> = DefaultTooltipProps | CustomTooltipProps<T>;
declare function Tooltip(props: DefaultTooltipProps): ReactElement;
declare function Tooltip<T>(props: CustomTooltipProps<T>): ReactElement;
declare namespace Tooltip {
    var defaultProps: {
        position: string;
    };
}
export default Tooltip;
