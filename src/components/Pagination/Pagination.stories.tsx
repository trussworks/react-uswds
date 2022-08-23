import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Pagination } from './Pagination'

export default {
  title: 'Components/Pagination',
  component: Pagination,
  argTypes: {
    currentPage: { control: 'number' },
    maxSlots: { control: 'number' },
    pathname: { control: 'string' },
  },
} as ComponentMeta<typeof Pagination>

const pathname = '/test-pathname'
const Template: ComponentStory<typeof Pagination> = (args) => (
  <Pagination
    totalPages={24}
    currentPage={args.currentPage}
    maxSlots={args.maxSlots}
    pathname={args.pathname}
  />
)

export const Sandbox = Template.bind({})
Sandbox.args = {
  currentPage: 10,
  maxSlots: 7,
}

export const Default = (): React.ReactElement => (
  <Pagination pathname={pathname} totalPages={10} currentPage={10} />
)

export const ThreePagesFirst = (): React.ReactElement => (
  <Pagination pathname={pathname} totalPages={3} currentPage={1} />
)
export const ThreePages = (): React.ReactElement => (
  <Pagination pathname={pathname} totalPages={3} currentPage={2} />
)
export const ThreePagesLast = (): React.ReactElement => (
  <Pagination pathname={pathname} totalPages={3} currentPage={3} />
)

export const SevenPages = (): React.ReactElement => (
  <Pagination pathname={pathname} totalPages={7} currentPage={4} />
)

export const EightPagesFirst = (): React.ReactElement => (
  <Pagination pathname={pathname} totalPages={8} currentPage={1} />
)

export const EightPagesFour = (): React.ReactElement => (
  <Pagination pathname={pathname} totalPages={8} currentPage={4} />
)

export const EightPagesFive = (): React.ReactElement => (
  <Pagination pathname={pathname} totalPages={8} currentPage={5} />
)

export const EightPagesSix = (): React.ReactElement => (
  <Pagination pathname={pathname} totalPages={8} currentPage={6} />
)

export const EightPagesLast = (): React.ReactElement => (
  <Pagination pathname={pathname} totalPages={8} currentPage={8} />
)

export const NinePagesFive = (): React.ReactElement => (
  <Pagination pathname={pathname} totalPages={9} currentPage={5} />
)

export const TenSlots = (): React.ReactElement => (
  <Pagination
    pathname={pathname}
    totalPages={24}
    currentPage={10}
    maxSlots={10}
  />
)
