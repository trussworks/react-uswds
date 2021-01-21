import React from 'react'
import { render } from '@testing-library/react'
import { LinkingBreadcrumb } from './LinkingBreadcrumb'

const testPageName = 'Test Page'

describe('LinkingBreadcrumb component', () => {
  it('renders without errors', () => {
    const { getByRole, queryByText } = render(
      <LinkingBreadcrumb href="#">{testPageName}</LinkingBreadcrumb>
    )
    expect(queryByText(testPageName)).toBeInTheDocument()
    expect(getByRole('listitem')).toHaveClass('usa-breadcrumb__list-item')
    expect(getByRole('link')).toHaveClass('usa-breadcrumb__link')
  })
})
