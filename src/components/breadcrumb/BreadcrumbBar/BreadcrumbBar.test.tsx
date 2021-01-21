/*  eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { render } from '@testing-library/react'
import { Breadcrumb } from '../Breadcrumb/Breadcrumb'
import { BreadcrumbBar } from './BreadcrumbBar'
import { LinkingBreadcrumb } from '../LinkingBreadcrumb/LinkingBreadcrumb'

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
  }),
    it('renders properly using the built-in LinkingBreadcrumb', () => {
      const { getByRole, queryByText } = render(
        <BreadcrumbBar>
          <LinkingBreadcrumb href="#">{testParentPageName}</LinkingBreadcrumb>
          <Breadcrumb current>{testPageName}</Breadcrumb>
        </BreadcrumbBar>
      )
      expect(queryByText(testParentPageName)).toBeInTheDocument()
      expect(queryByText(testPageName)).toBeInTheDocument()
      expect(getByRole('list')).toHaveClass('usa-breadcrumb__list')
    }),
    it('renders properly with Breadcrumbs using custom elements', () => {
      const { getByRole, queryByText } = render(
        <BreadcrumbBar>
          <Breadcrumb>
            <a href="#">{testParentPageName}</a>
          </Breadcrumb>
          <Breadcrumb current>{testPageName}</Breadcrumb>
        </BreadcrumbBar>
      )
      expect(queryByText(testParentPageName)).toBeInTheDocument()
      expect(queryByText(testPageName)).toBeInTheDocument()
      expect(getByRole('list')).toHaveClass('usa-breadcrumb__list')
    })
})
