import React, { useState } from 'react'
import { Pagination } from './Pagination'
import type { Meta, StoryFn, StoryObj } from '@storybook/react-vite'

const pathname = '/test-pathname'

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
  args: {
    pathname,
    currentPage: 1,
  },
  argTypes: {
    currentPage: {
      control: { type: 'number', min: 1 },
    },
    maxSlots: {
      control: { type: 'number', min: 1 },
    },
    totalPages: {
      control: { type: 'number', min: 1 },
    },
  },
}
export default meta
type Story = StoryObj<typeof Pagination>

const Template: StoryFn<typeof Pagination> = (args) => {
  const argPage =
    args.totalPages !== undefined
      ? Math.min(args.currentPage, args.totalPages)
      : args.currentPage

  const [current, setCurrentPage] = useState<number>(argPage)

  const [prevArgPage, setPrevArgPage] = useState(argPage)
  if (argPage !== prevArgPage) {
    setPrevArgPage(argPage)
    setCurrentPage(argPage)
  }

  const handleNext = () => {
    const nextPage = current + 1
    setCurrentPage(nextPage)
  }

  const handlePrevious = () => {
    const prevPage = current - 1
    setCurrentPage(prevPage)
  }

  const handlePageNumber = (
    _event: React.MouseEvent<HTMLButtonElement>,
    pageNum: number
  ) => {
    setCurrentPage(pageNum)
  }

  return (
    <Pagination
      totalPages={args.totalPages}
      currentPage={current}
      maxSlots={args.maxSlots}
      pathname={args.pathname}
      onClickNext={handleNext}
      onClickPrevious={handlePrevious}
      onClickPageNumber={handlePageNumber}
    />
  )
}

export const Sandbox: Story = {
  render: Template,
  args: {
    currentPage: 10,
    maxSlots: 7,
  },
}

export const Basic: Story = {
  render: Template,
  args: {
    currentPage: 10,
    totalPages: 10,
  },
}

export const Unbounded: Story = {
  render: Template,
  args: { currentPage: 10 },
}

export const ThreePagesFirst: Story = {
  render: Template,
  args: { currentPage: 1, totalPages: 3 },
}

export const ThreePages: Story = {
  render: Template,
  args: { currentPage: 2, totalPages: 3 },
}

export const ThreePagesLast: Story = {
  render: Template,
  args: { currentPage: 3, totalPages: 3 },
}

export const SevenPages: Story = {
  render: Template,
  args: { currentPage: 4, totalPages: 7 },
}

export const EightPagesFirst: Story = {
  render: Template,
  args: { currentPage: 1, totalPages: 8 },
}

export const EightPagesFour: Story = {
  render: Template,
  args: { currentPage: 4, totalPages: 8 },
}

export const EightPagesFive: Story = {
  render: Template,
  args: { currentPage: 5, totalPages: 8 },
}

export const EightPagesSix: Story = {
  render: Template,
  args: { currentPage: 6, totalPages: 8 },
}

export const EightPagesLast: Story = {
  render: Template,
  args: { currentPage: 8, totalPages: 8 },
}

export const NinePagesFive: Story = {
  render: Template,
  args: { currentPage: 5, totalPages: 9 },
}

export const TenSlots: Story = {
  render: Template,
  args: { currentPage: 10, totalPages: 24, maxSlots: 10 },
}
