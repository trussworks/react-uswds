import { default as React } from 'react';

declare const _default: {
    title: string;
    component: ({ bordered, caption, children, className, fullWidth, fixed, scrollable, striped, compact, stackedStyle, ...props }: import('./Table').TableProps) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
    parameters: {
        docs: {
            description: {
                component: string;
            };
        };
    };
    argTypes: {
        bordered: {
            control: {
                type: string;
            };
        };
        striped: {
            control: {
                type: string;
            };
        };
        stackedStyle: {
            control: {
                type: string;
                options: string[];
            };
        };
    };
    args: {
        stackedStyle: string;
    };
};
export default _default;
type StorybookArguments = {
    bordered: boolean;
    striped: boolean;
    stackedStyle: 'default' | 'headers';
};
export declare const Bordered: () => React.ReactElement;
export declare const Borderless: () => React.ReactElement;
export declare const BorderedWithCaption: () => React.ReactElement;
export declare const BorderlessWithCaption: () => React.ReactElement;
export declare const ContentWidth: () => React.ReactElement;
export declare const FullWidth: () => React.ReactElement;
export declare const Fixed: () => React.ReactElement;
export declare const Scrollable: () => React.ReactElement;
export declare const Striped: {
    render: (argTypes: StorybookArguments) => React.ReactElement;
};
export declare const Compact: {
    render: (argTypes: StorybookArguments) => React.ReactElement;
};
export declare const StackedStylesDemo: {
    render: (argTypes: StorybookArguments) => React.ReactElement;
    parameters: {
        viewport: {
            defaultViewport: string;
        };
    };
};
