import { default as Tooltip } from './Tooltip';
import { default as React } from 'react';

declare const _default: {
    title: string;
    component: typeof Tooltip;
    parameters: {
        happo: {
            targets: string[];
            beforeScreenshot: () => void;
            waitFor: <E extends Element>() => E | null;
        };
        docs: {
            description: {
                component: string;
            };
        };
    };
};
export default _default;
export declare const TooltipDefault: () => React.ReactElement;
export declare const TooltipTop: () => React.ReactElement;
export declare const TooltipBottom: () => React.ReactElement;
export declare const TooltipRight: () => React.ReactElement;
export declare const TooltipLeft: () => React.ReactElement;
export declare const TooltipWithUtilityClass: () => React.ReactElement;
export declare const CustomComponent: () => React.ReactElement;
export declare const TooltipTopLeftWrap: () => React.ReactElement;
export declare const TooltipBottomLeftWrap: () => React.ReactElement;
export declare const TooltipTopRightWrap: () => React.ReactElement;
export declare const TooltipBottomRightWrap: () => React.ReactElement;
