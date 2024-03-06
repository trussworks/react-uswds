import { ComponentType } from 'react';
export declare function withDeprecationWarning<P extends JSX.IntrinsicAttributes>(Component: ComponentType<P>, warning: string): (props: P) => JSX.Element;
