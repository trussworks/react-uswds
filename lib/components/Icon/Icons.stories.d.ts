import { default as React } from 'react';

type StorybookArgs = {
    size: 3 | 4 | 5 | 6 | 7 | 8 | 9;
};
declare const _default: {
    title: string;
    parameters: {
        docs: {
            description: {
                component: string;
            };
        };
    };
    argTypes: {
        size: {
            control: {
                type: string;
                options: number[];
            };
        };
    };
    args: {
        size: number;
    };
};
export default _default;
export declare const AllIcons: (args: StorybookArgs) => React.ReactElement;
