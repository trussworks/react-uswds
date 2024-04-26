import { default as React } from 'react';

declare const _default: {
    title: string;
    component: ({ id, name, className, maxLength, value, defaultValue, isTextArea, getCharacterCount, getMessage, ...remainingProps }: import('./CharacterCount').CharacterCountProps) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
    parameters: {
        docs: {
            description: {
                component: string;
            };
        };
    };
};
export default _default;
export declare const TextInput: () => React.ReactElement;
export declare const Textarea: () => React.ReactElement;
declare const withCustomCharacterCount: {
    (): React.ReactElement;
    parameters: {
        happo: {
            delay: number;
        };
    };
};
export { withCustomCharacterCount };
