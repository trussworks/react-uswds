import { render, screen, fireEvent } from '@testing-library/react'

import { Pagination } from './Pagination'

describe('Pagination component', () => {
  const testPages = 24
  const testThreePages = 3
  const testSevenPages = 7
  const testPathname = '/test-pathname'

  it('renders pagination for a list of pages', () => {
    render(
      <Pagination
        totalPages={testPages}
        currentPage={10}
        pathname={testPathname}
      />
    )
    expect(screen.getByRole('navigation')).toBeInTheDocument()

    expect(screen.getByLabelText('Previous page')).toHaveAttribute(
      'href',
      `${testPathname}?page=9`
    )
    expect(screen.getByLabelText('Page 1')).toHaveAttribute(
      'href',
      `${testPathname}?page=1`
    )
    expect(screen.getByLabelText('Page 9')).toHaveAttribute(
      'href',
      `${testPathname}?page=9`
    )
    expect(screen.getByLabelText('Page 10')).toHaveAttribute(
      'href',
      `${testPathname}?page=10`
    )
    expect(screen.getByLabelText('Page 10')).toHaveAttribute(
      'aria-current',
      'page'
    )
    expect(screen.getByLabelText('Page 11')).toHaveAttribute(
      'href',
      `${testPathname}?page=11`
    )
    expect(screen.getByLabelText('Page 24')).toHaveAttribute(
      'href',
      `${testPathname}?page=24`
    )
    expect(screen.getByLabelText('Next page')).toHaveAttribute(
      'href',
      `${testPathname}?page=11`
    )
  })

  it('only renders the maximum number of slots', () => {
    render(
      <Pagination
        totalPages={testPages}
        currentPage={10}
        pathname={testPathname}
      />
    )
    expect(screen.getAllByRole('listitem')).toHaveLength(9) // overflow slots don't count
  })

  it('renders pagination when the first page is current', () => {
    render(
      <Pagination
        totalPages={testPages}
        currentPage={1}
        pathname={testPathname}
      />
    )
    expect(screen.queryByLabelText('Previous page')).not.toBeInTheDocument()
    expect(screen.queryByLabelText('Next page')).toBeInTheDocument()
    expect(screen.getByLabelText('Page 1')).toHaveAttribute(
      'aria-current',
      'page'
    )
  })

  it('renders pagination when the last page is current', () => {
    render(
      <Pagination
        totalPages={testPages}
        currentPage={24}
        pathname={testPathname}
      />
    )
    expect(screen.queryByLabelText('Previous page')).toBeInTheDocument()
    expect(screen.queryByLabelText('Next page')).not.toBeInTheDocument()
    expect(screen.getByLabelText('Page 24')).toHaveAttribute(
      'aria-current',
      'page'
    )
  })

  it('renders overflow at the beginning and end when current page is in the middle', () => {
    render(
      <Pagination
        totalPages={testPages}
        currentPage={10}
        pathname={testPathname}
      />
    )
    expect(screen.getByLabelText('Previous page')).toHaveAttribute(
      'href',
      `${testPathname}?page=9`
    )
    expect(screen.getByLabelText('Page 1')).toHaveAttribute(
      'href',
      `${testPathname}?page=1`
    )
    expect(screen.getByLabelText('Page 9')).toHaveAttribute(
      'href',
      `${testPathname}?page=9`
    )
    expect(screen.getByLabelText('Page 10')).toHaveAttribute(
      'href',
      `${testPathname}?page=10`
    )
    expect(screen.getByLabelText('Page 10')).toHaveAttribute(
      'aria-current',
      'page'
    )
    expect(screen.getByLabelText('Page 11')).toHaveAttribute(
      'href',
      `${testPathname}?page=11`
    )
    expect(screen.getByLabelText('Page 24')).toHaveAttribute(
      'href',
      `${testPathname}?page=24`
    )
    expect(screen.getByLabelText('Next page')).toHaveAttribute(
      'href',
      `${testPathname}?page=11`
    )
    expect(screen.getAllByText('…')).toHaveLength(2)
  })

  it('renders overflow at the end when at the beginning of the pages', () => {
    render(
      <Pagination
        totalPages={testPages}
        currentPage={3}
        pathname={testPathname}
      />
    )

    expect(screen.getByLabelText('Previous page')).toHaveAttribute(
      'href',
      `${testPathname}?page=2`
    )
    expect(screen.getByLabelText('Page 1')).toHaveAttribute(
      'href',
      `${testPathname}?page=1`
    )
    expect(screen.getByLabelText('Page 2')).toHaveAttribute(
      'href',
      `${testPathname}?page=2`
    )
    expect(screen.getByLabelText('Page 3')).toHaveAttribute(
      'href',
      `${testPathname}?page=3`
    )
    expect(screen.getByLabelText('Page 3')).toHaveAttribute(
      'aria-current',
      'page'
    )
    expect(screen.getByLabelText('Page 4')).toHaveAttribute(
      'href',
      `${testPathname}?page=4`
    )
    expect(screen.getByLabelText('Page 5')).toHaveAttribute(
      'href',
      `${testPathname}?page=5`
    )
    expect(screen.getByLabelText('Page 24')).toHaveAttribute(
      'href',
      `${testPathname}?page=24`
    )
    expect(screen.getByLabelText('Next page')).toHaveAttribute(
      'href',
      `${testPathname}?page=4`
    )
    expect(screen.getAllByText('…')).toHaveLength(1)
  })

  it('renders overflow at the beginning when at the end of the pages', () => {
    render(
      <Pagination
        totalPages={testPages}
        currentPage={21}
        pathname={testPathname}
      />
    )

    expect(screen.getByLabelText('Previous page')).toHaveAttribute(
      'href',
      `${testPathname}?page=20`
    )
    expect(screen.getByLabelText('Page 1')).toHaveAttribute(
      'href',
      `${testPathname}?page=1`
    )
    expect(screen.getByLabelText('Page 20')).toHaveAttribute(
      'href',
      `${testPathname}?page=20`
    )
    expect(screen.getByLabelText('Page 21')).toHaveAttribute(
      'href',
      `${testPathname}?page=21`
    )
    expect(screen.getByLabelText('Page 21')).toHaveAttribute(
      'aria-current',
      'page'
    )
    expect(screen.getByLabelText('Page 22')).toHaveAttribute(
      'href',
      `${testPathname}?page=22`
    )
    expect(screen.getByLabelText('Page 23')).toHaveAttribute(
      'href',
      `${testPathname}?page=23`
    )
    expect(screen.getByLabelText('Page 24')).toHaveAttribute(
      'href',
      `${testPathname}?page=24`
    )
    expect(screen.getByLabelText('Next page')).toHaveAttribute(
      'href',
      `${testPathname}?page=22`
    )
    expect(screen.getAllByText('…')).toHaveLength(1)
  })

  it("doesn't render last page when unbounded", () => {
    const randomPage = Math.random() * 1000
    render(<Pagination currentPage={randomPage} pathname={testPathname} />)
    expect(screen.getByLabelText(`Page ${randomPage + 1}`)).toHaveAttribute(
      'href',
      `${testPathname}?page=${randomPage + 1}`
    )
  })

  it('can click onClickNext, onClickPrevious and onClickPagenumber', () => {
    const mockOnClickNext = vi.fn()
    const mockOnClickPrevious = vi.fn()
    const mockOnClickPageNumber = vi.fn()

    const { getByTestId, getAllByTestId } = render(
      <Pagination
        totalPages={testPages}
        currentPage={21}
        pathname={testPathname}
        onClickPrevious={mockOnClickPrevious}
        onClickNext={mockOnClickNext}
        onClickPageNumber={mockOnClickPageNumber}
      />
    )

    fireEvent.click(getByTestId('pagination-next'))
    expect(mockOnClickNext).toHaveBeenCalledTimes(1)

    fireEvent.click(getByTestId('pagination-previous'))
    expect(mockOnClickPrevious).toHaveBeenCalledTimes(1)

    const allPageNumbers = getAllByTestId('pagination-page-number')
    fireEvent.click(allPageNumbers[0])
    expect(mockOnClickPageNumber).toHaveBeenCalledTimes(1)
  })

  describe('for fewer pages than the max slots', () => {
    it('renders pagination with no overflow 1', () => {
      render(
        <Pagination
          totalPages={testThreePages}
          currentPage={2}
          pathname={testPathname}
        />
      )
      expect(screen.getAllByRole('listitem')).toHaveLength(5)
      expect(screen.queryAllByText('…')).toHaveLength(0)
    })

    it('renders pagination with no overflow 2', () => {
      render(
        <Pagination
          totalPages={testSevenPages}
          currentPage={4}
          pathname={testPathname}
        />
      )
      expect(screen.getAllByRole('listitem')).toHaveLength(9)
      expect(screen.queryAllByText('…')).toHaveLength(0)
    })
  })

  describe('with a custom slot number passed in', () => {
    it('only renders the maximum number of slots', () => {
      render(
        <Pagination
          totalPages={testPages}
          currentPage={10}
          pathname={testPathname}
          maxSlots={10}
        />
      )
      expect(screen.getAllByRole('listitem')).toHaveLength(12)
    })
  })
})
