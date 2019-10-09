import React from 'react';
interface TableProps {
    bordered?: boolean;
    caption?: React.ReactNode;
    children: React.ReactNode;
}
export declare const Table: (props: TableProps) => React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
export default Table;
