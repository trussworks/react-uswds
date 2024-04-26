import { default as React } from 'react';

export type PaginationPageProps = {
    pathname: string;
    page: number;
    isCurrent?: boolean;
    onClickPageNumber?: (event: React.MouseEvent<HTMLButtonElement>, page: number) => void;
} & JSX.IntrinsicElements['li'];
declare const PaginationPage: ({ page, isCurrent, pathname, onClickPageNumber, className, ...props }: PaginationPageProps) => import("react/jsx-runtime").JSX.Element;
export default PaginationPage;
