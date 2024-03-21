import { ForwardRefExoticComponent, ReactElement, ReactNode } from '../../../node_modules/react';
type TooltipProps<T> = {
    label: ReactNode;
    title?: string;
    position?: 'top' | 'bottom' | 'left' | 'right' | undefined;
    wrapperclasses?: string;
    className?: string;
    children: ReactNode;
} & T;
interface WithCustomTooltipProps<T> {
    asCustom: ForwardRefExoticComponent<T>;
}
export type DefaultTooltipProps = TooltipProps<JSX.IntrinsicElements['button']>;
export type CustomTooltipProps<T> = TooltipProps<T> & WithCustomTooltipProps<T>;
export declare function isCustomProps<T>(props: DefaultTooltipProps | CustomTooltipProps<T>): props is CustomTooltipProps<T>;
export declare function Tooltip(props: DefaultTooltipProps): ReactElement;
export declare function Tooltip<T>(props: CustomTooltipProps<T>): ReactElement;
export declare namespace Tooltip {
    var defaultProps: {
        position: string;
    };
}
export {};
