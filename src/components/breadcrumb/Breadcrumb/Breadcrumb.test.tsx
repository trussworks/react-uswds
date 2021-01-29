import React from 'react'
import { render } from '@testing-library/react'
import { Breadcrumb } from './Breadcrumb'
import { Link } from '../../Link/Link'
import { BreadcrumbLink } from '../BreadcrumbLink/BreadcrumbLink'

const testPageName = 'Test Page'

describe('Breadcrumb component', () => {
  it('renders without errors', () => {
    const { getByRole, queryByText } = render(
      <Breadcrumb>{testPageName}</Breadcrumb>
    )
    expect(queryByText(testPageName)).toBeInTheDocument()
    expect(getByRole('listitem')).toHaveClass('usa-breadcrumb__list-item')
  })

  it('renders properly with BreadcrumbLinks', () => {
    const { getByRole, queryByText } = render(
      <Breadcrumb>
        <BreadcrumbLink href="#">{testPageName}</BreadcrumbLink>
      </Breadcrumb>
    )
    expect(queryByText(testPageName)).toBeInTheDocument()
    expect(getByRole('listitem')).toHaveClass('usa-breadcrumb__list-item')
  })

  it('renders properly with custom elements passesd in', () => {
    const { getByRole, queryByText } = render(
      <Breadcrumb>
        <Link href="#">{testPageName}</Link>
      </Breadcrumb>
    )
    expect(queryByText(testPageName)).toBeInTheDocument()
    expect(getByRole('listitem')).toHaveClass('usa-breadcrumb__list-item')
  })

  it("renders the appropriate class when defined as 'current'", () => {
    const { getByRole, queryByText } = render(
      <Breadcrumb current>{testPageName}</Breadcrumb>
    )
    expect(queryByText(testPageName)).toBeInTheDocument()
    expect(getByRole('listitem')).toHaveClass(
      'usa-breadcrumb__list-item usa-current'
    )
  })
})
