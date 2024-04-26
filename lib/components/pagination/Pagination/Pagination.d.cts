import { default as React } from 'react';

export type PaginationProps = {
    pathname: string;
    totalPages?: number;
    currentPage: number;
    maxSlots?: number;
    onClickNext?: () => void;
    onClickPrevious?: () => void;
    onClickPageNumber?: (event: React.MouseEvent<HTMLButtonElement>, page: number) => void;
} & JSX.IntrinsicElements['nav'];
declare const Pagination: ({ pathname, totalPages, currentPage, className, maxSlots, onClickPrevious, onClickNext, onClickPageNumber, ...props }: PaginationProps) => React.ReactElement;
export default Pagination;
