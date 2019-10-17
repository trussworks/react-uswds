import React from 'react';
interface TagProps {
    children: React.ReactNode;
    background?: string;
}
export declare const Tag: (props: TagProps) => React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
export default Tag;
