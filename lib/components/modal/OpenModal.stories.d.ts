import { default as React } from 'react';

type StorybookArguments = {
    handleClose: () => void;
};
declare const _default: {
    title: string;
    argTypes: {
        handleClose: () => void;
    };
    parameters: {
        docs: {
            description: {
                component: string;
            };
        };
    };
};
export default _default;
export declare const DefaultModal: {
    render: (argTypes: StorybookArguments) => React.ReactElement;
};
export declare const LargeModal: {
    render: (argTypes: StorybookArguments) => React.ReactElement;
};
export declare const ForceActionModal: {
    render: (argTypes: StorybookArguments) => React.ReactElement;
};
