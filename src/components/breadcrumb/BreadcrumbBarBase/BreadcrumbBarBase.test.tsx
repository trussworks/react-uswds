import React from 'react'
import { render } from '@testing-library/react'
import BreadcrumbBarBase from './BreadcrumbBarBase'

describe('BreadcrumbBar component', () => {
  it('renders without errors', () => {
    const { getByLabelText } = render(<BreadcrumbBarBase />)
    expect(getByLabelText('Breadcrumbs')).toBeInTheDocument()
  })

  it('accepts className prop', () => {
    const { getByLabelText } = render(<BreadcrumbBarBase className="myClass" />)
    expect(getByLabelText('Breadcrumbs')).toHaveClass('myClass')
  })
})
