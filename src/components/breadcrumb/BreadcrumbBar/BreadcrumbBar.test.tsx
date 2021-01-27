/*  eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { render } from '@testing-library/react'
import { Breadcrumb } from '../Breadcrumb/Breadcrumb'
import { BreadcrumbBar } from './BreadcrumbBar'
import { Link } from '../../Link/Link'

const testPageName = 'Test Page'
const testParentPageName = 'Test Parent Page'

describe('BreadcrumbBar component', () => {
  it('renders without errors', () => {
    const { getByRole, queryByText } = render(
      <BreadcrumbBar>
        <Breadcrumb>{testParentPageName}</Breadcrumb>
        <Breadcrumb current>{testPageName}</Breadcrumb>
      </BreadcrumbBar>
    )
    expect(queryByText(testParentPageName)).toBeInTheDocument()
    expect(queryByText(testPageName)).toBeInTheDocument()
    expect(getByRole('list')).toHaveClass('usa-breadcrumb__list')
  })

  it('renders properly with Breadcrumbs using custom elements', () => {
    const { getByRole, queryByText } = render(
      <BreadcrumbBar>
        <Breadcrumb>
          <Link href="#">{testParentPageName}</Link>
        </Breadcrumb>
        <Breadcrumb current>{testPageName}</Breadcrumb>
      </BreadcrumbBar>
    )
    expect(queryByText(testParentPageName)).toBeInTheDocument()
    expect(queryByText(testPageName)).toBeInTheDocument()
    expect(getByRole('list')).toHaveClass('usa-breadcrumb__list')
  })
})
