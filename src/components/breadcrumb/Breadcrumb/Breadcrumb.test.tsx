/*  eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { render } from '@testing-library/react'
import { Breadcrumb } from './Breadcrumb'

const testPageName = 'Test Page'

describe('Breadcrumb component', () => {
  it('renders without errors', () => {
    const { getByRole, queryByText } = render(
      <Breadcrumb>{testPageName}</Breadcrumb>
    )
    expect(queryByText(testPageName)).toBeInTheDocument()
    expect(getByRole('listitem')).toHaveClass('usa-breadcrumb__list-item')
  }),
    it('renders properly with custom elements passesd in', () => {
      const { getByRole, queryByText } = render(
        <Breadcrumb>
          <a href="#">{testPageName}</a>
        </Breadcrumb>
      )
      expect(queryByText(testPageName)).toBeInTheDocument()
      expect(getByRole('listitem')).toHaveClass('usa-breadcrumb__list-item')
    }),
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
