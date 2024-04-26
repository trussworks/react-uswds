import { default as React } from 'react';

declare const _default: import('@storybook/types').ComponentAnnotations<import("@storybook/react").ReactRenderer, {
    pathname: string;
    totalPages?: number | undefined;
    currentPage: number;
    maxSlots?: number | undefined;
    onClickNext?: (() => void) | undefined;
    onClickPrevious?: (() => void) | undefined;
    onClickPageNumber?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>, page: number) => void) | undefined;
} & React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement>>;
export default _default;
export declare const Sandbox: {
    render: import('@storybook/types').AnnotatedStoryFn<import("@storybook/react").ReactRenderer, {
        pathname: string;
        totalPages?: number | undefined;
        currentPage: number;
        maxSlots?: number | undefined;
        onClickNext?: (() => void) | undefined;
        onClickPrevious?: (() => void) | undefined;
        onClickPageNumber?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>, page: number) => void) | undefined;
    } & React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement>>;
    args: {
        currentPage: number;
        maxSlots: number;
    };
};
export declare const Default: () => React.ReactElement;
export declare const Unbounded: () => React.ReactElement;
export declare const ThreePagesFirst: () => React.ReactElement;
export declare const ThreePages: () => React.ReactElement;
export declare const ThreePagesLast: () => React.ReactElement;
export declare const SevenPages: () => React.ReactElement;
export declare const EightPagesFirst: () => React.ReactElement;
export declare const EightPagesFour: () => React.ReactElement;
export declare const EightPagesFive: () => React.ReactElement;
export declare const EightPagesSix: () => React.ReactElement;
export declare const EightPagesLast: () => React.ReactElement;
export declare const NinePagesFive: () => React.ReactElement;
export declare const TenSlots: () => React.ReactElement;
