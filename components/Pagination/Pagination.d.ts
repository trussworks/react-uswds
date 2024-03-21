import React from '../../../node_modules/react';
type PaginationProps = {
    pathname: string;
    totalPages?: number;
    currentPage: number;
    maxSlots?: number;
    onClickNext?: () => void;
    onClickPrevious?: () => void;
    onClickPageNumber?: (event: React.MouseEvent<HTMLButtonElement>, page: number) => void;
};
export declare const Pagination: ({ pathname, totalPages, currentPage, className, maxSlots, onClickPrevious, onClickNext, onClickPageNumber, ...props }: PaginationProps & JSX.IntrinsicElements['nav']) => React.ReactElement;
export {};
