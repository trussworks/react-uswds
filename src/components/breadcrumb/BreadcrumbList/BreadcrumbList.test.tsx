import React from 'react'
import { render } from '@testing-library/react'
import BreadcrumbList from './BreadcrumbList'

describe('BreadcrumbBar component', () => {
  it('renders without errors', () => {
    const { getByRole } = render(<BreadcrumbList />)

    expect(getByRole('list')).toHaveClass('usa-breadcrumb__list')
  })

  it('accepts className prop', () => {
    const { getByRole } = render(<BreadcrumbList className="myClass" />)
    expect(getByRole('list')).toHaveClass('myClass')
  })
})
