import { default as React } from 'react';

export type TableProps = {
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
} & JSX.IntrinsicElements['table'];
declare const Table: ({ bordered, caption, children, className, fullWidth, fixed, scrollable, striped, compact, stackedStyle, ...props }: TableProps) => React.ReactElement;
export default Table;
