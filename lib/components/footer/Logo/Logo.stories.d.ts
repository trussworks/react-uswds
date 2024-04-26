import { default as React } from 'react';

declare const _default: {
    title: string;
    component: ({ size, heading, image, className, ...props }: import('./Logo').LogoProps) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
    parameters: {
        docs: {
            description: {
                component: string;
            };
        };
    };
};
export default _default;
export declare const Slim: () => React.ReactElement;
export declare const NoHeading: () => React.ReactElement;
