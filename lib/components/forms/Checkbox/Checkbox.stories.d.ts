import { default as React } from 'react';

declare const _default: {
    title: string;
    component: ({ id, name, className, label, inputRef, tile, labelDescription, ...inputProps }: import('./Checkbox').CheckboxProps) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
    parameters: {
        docs: {
            description: {
                component: string;
            };
        };
    };
};
export default _default;
export declare const DefaultCheckbox: () => React.ReactElement;
export declare const Checked: () => React.ReactElement;
export declare const Disabled: () => React.ReactElement;
export declare const WithRichLabel: () => React.ReactElement;
export declare const WithLabelDescription: () => React.ReactElement;
export declare const Tile: () => React.ReactElement;
export declare const TileWithLabelDescription: () => React.ReactElement;
