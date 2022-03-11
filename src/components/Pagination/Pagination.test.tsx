import React from 'react'
import { render, fireEvent } from '@testing-library/react'

jest.mock('../../deprecation')
import { Pagination } from './Pagination'

describe('Pagination component', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders without errors', () => {
    const { queryByTestId } = render(
      <Pagination id="pagination" totalPageCount={10} />
    )
    expect(queryByTestId('pagination')).toBeInTheDocument()
  })

  it('renders range correctly when total pages > range and selection causes breaks', () => {
    const { getByText, getAllByText } = render(
      <Pagination id="pagination" totalPageCount={10} initialSelected={4} />
    )
    expect(getByText(1)).toBeInTheDocument()
    expect(getByText(4)).toBeInTheDocument()
    expect(getByText(5)).toBeInTheDocument()
    expect(getByText(6)).toBeInTheDocument()
    expect(getByText(10)).toBeInTheDocument()
    expect(getAllByText('...').length).toBe(2)
  })

  it('renders range correctly when total pages > range and selection is at the beginning of set', () => {
    const { getByText } = render(
      <Pagination id="pagination" totalPageCount={10} initialSelected={1} />
    )
    expect(getByText(1)).toBeInTheDocument()
    expect(getByText(2)).toBeInTheDocument()
    expect(getByText(3)).toBeInTheDocument()
    expect(getByText(4)).toBeInTheDocument()
    expect(getByText(5)).toBeInTheDocument()
    expect(getByText('...')).toBeInTheDocument()
    expect(getByText(10)).toBeInTheDocument()
  })

  it('renders range correctly when total pages > range and selection is at the end of set', () => {
    const { getByText } = render(
      <Pagination id="pagination" totalPageCount={10} initialSelected={9} />
    )
    expect(getByText(1)).toBeInTheDocument()
    expect(getByText('...')).toBeInTheDocument()
    expect(getByText(6)).toBeInTheDocument()
    expect(getByText(7)).toBeInTheDocument()
    expect(getByText(8)).toBeInTheDocument()
    expect(getByText(9)).toBeInTheDocument()
    expect(getByText(10)).toBeInTheDocument()
  })

  it('replaces breaks with page', () => {
    const { getByText } = render(
      <Pagination id="pagination" totalPageCount={10} initialSelected={3} />
    )
    expect(getByText(1)).toBeInTheDocument()
    expect(getByText(2)).toBeInTheDocument()
    expect(getByText(3)).toBeInTheDocument()
    expect(getByText(4)).toBeInTheDocument()
    expect(getByText(5)).toBeInTheDocument()
    expect(getByText('...')).toBeInTheDocument()
    expect(getByText(10)).toBeInTheDocument()
  })

  it('renders range correctly when total pages <= range', () => {
    const { getByText, queryByText } = render(
      <Pagination id="pagination" totalPageCount={3} />
    )
    expect(getByText(1)).toBeInTheDocument()
    expect(getByText(2)).toBeInTheDocument()
    expect(getByText(3)).toBeInTheDocument()
    expect(queryByText('...')).toBeNull()
  })

  it('implements an onPageChange handler', () => {
    const onPageChange = jest.fn()
    const { getByText } = render(
      <Pagination
        id="pagination"
        totalPageCount={10}
        onPageChange={onPageChange}
      />
    )

    fireEvent.click(getByText('2'))
    expect(onPageChange).toHaveBeenCalledTimes(1)
  })

  it('next button sets new selected page', () => {
    const onPageChange = jest.fn()
    const { getByText } = render(
      <Pagination
        id="pagination"
        totalPageCount={10}
        onPageChange={onPageChange}
      />
    )

    fireEvent.click(getByText('Next'))
    expect(getByText('2')).toHaveClass('usa-current')
  })

  it('next button hidden', () => {
    const onPageChange = jest.fn()
    const { queryByText } = render(
      <Pagination
        id="pagination"
        totalPageCount={10}
        onPageChange={onPageChange}
        initialSelected={9}
      />
    )

    expect(queryByText('Next')).toBeNull()
  })

  it('previous button sets new selected page', () => {
    const onPageChange = jest.fn()
    const { getByText } = render(
      <Pagination
        id="pagination"
        totalPageCount={10}
        onPageChange={onPageChange}
        initialSelected={9}
      />
    )

    fireEvent.click(getByText('Previous'))
    expect(getByText('9')).toHaveClass('usa-current')
  })

  it('previous button hidden', () => {
    const onPageChange = jest.fn()
    const { queryByText } = render(
      <Pagination
        id="pagination"
        totalPageCount={10}
        onPageChange={onPageChange}
      />
    )

    expect(queryByText('Previous')).toBeNull()
  })

  it('accepts additional custom class names', () => {
    const { getByTestId } = render(
      <Pagination id="pagination" totalPageCount={10} className="customClass" />
    )
    expect(getByTestId('pagination')).toHaveClass('usa-pagination')
    expect(getByTestId('pagination')).toHaveClass('customClass')
  })
})
