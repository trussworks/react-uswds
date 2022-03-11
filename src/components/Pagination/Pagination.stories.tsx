import React from 'react'
import { Pagination } from './Pagination'

export default {
  title: 'Components/Pagination',
  component: Pagination,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 2.0 Pagination component

Source: https://designsystem.digital.gov/components/pagination/
`,
      },
    },
  },
}

export const defaultPagination = (): React.ReactElement => (
  <Pagination id="default" totalPageCount={10}></Pagination>
)

export const withInitialPageSelected = (): React.ReactElement => (
  <Pagination id="init" totalPageCount={10} initialSelected={4}></Pagination>
)

export const withPageHandler = (): React.ReactElement => (
  <Pagination
    id="page"
    onPageChange={(args) => alert('index selected: ' + args.selected)}
    totalPageCount={10}
    initialSelected={4}
  ></Pagination>
)

export const customClass = (): React.ReactElement => (
  <Pagination
    id="custom"
    className="custom-class"
    totalPageCount={10}
    initialSelected={4}
  ></Pagination>
)

export const customClassOnPages = (): React.ReactElement => (
  <Pagination
    id="custom"
    pageClassName="custom-class"
    totalPageCount={10}
    initialSelected={4}
  ></Pagination>
)

export const customClassOnPrevious = (): React.ReactElement => (
  <Pagination
    id="custom"
    previousClassName="custom-class"
    totalPageCount={10}
    initialSelected={4}
  ></Pagination>
)

export const customClassOnNext = (): React.ReactElement => (
  <Pagination
    id="custom"
    nextClassName="custom-class"
    totalPageCount={10}
    initialSelected={4}
  ></Pagination>
)
