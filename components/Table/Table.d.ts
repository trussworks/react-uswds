import React from 'react';
type TableProps = {
    bordered?: boolean;
    caption?: React.ReactNode;
    children: React.ReactNode;
    className?: string;
    fullWidth?: boolean;
    fixed?: boolean;
    scrollable?: boolean;
    striped?: boolean;
    compact?: boolean;
    stackedStyle?: 'none' | 'default' | 'headers';
};
export declare const Table: ({ bordered, caption, children, className, fullWidth, fixed, scrollable, striped, compact, stackedStyle, }: TableProps) => React.ReactElement;
export default Table;
