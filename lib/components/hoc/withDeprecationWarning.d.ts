import { ComponentType } from 'react';

declare function withDeprecationWarning<P extends JSX.IntrinsicAttributes>(Component: ComponentType<P>, warning: string): (props: P) => JSX.Element;
export default withDeprecationWarning;
