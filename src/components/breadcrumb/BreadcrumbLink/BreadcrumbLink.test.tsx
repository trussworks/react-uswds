import React from 'react'
import { render } from '@testing-library/react'
import { BreadcrumbLink } from './BreadcrumbLink'

const testPageName = 'Test Page'

describe('BreadcrumbLink component', () => {
  it('renders without errors', () => {
    const { getByRole, queryByText } = render(
      <BreadcrumbLink href="#">{testPageName}</BreadcrumbLink>
    )
    expect(queryByText(testPageName)).toBeInTheDocument()
    expect(getByRole('link')).toHaveClass('usa-breadcrumb__link')
  })
})
