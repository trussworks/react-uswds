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
    expect(getByRole('link')).not.toHaveClass('usa-link')
  })

  it('renders with a custom component', () => {
    type CustomLinkProps = React.PropsWithChildren<{
      to: string
      className?: string
    }> &
      JSX.IntrinsicElements['a']

    const CustomLink: React.FunctionComponent<CustomLinkProps> = ({
      to,
      children,
      className,
      ...linkProps
    }: CustomLinkProps): React.ReactElement => (
      <a href={to} className={className} {...linkProps}>
        {children}
      </a>
    )

    const { getByRole, queryByText } = render(
      <BreadcrumbLink<CustomLinkProps>
        to="#"
        className="custom-class"
        asCustom={CustomLink}>
        {testPageName}
      </BreadcrumbLink>
    )
    expect(queryByText(testPageName)).toBeInTheDocument()
    expect(getByRole('link')).toHaveClass('custom-class usa-breadcrumb__link')
    expect(getByRole('link')).not.toHaveClass('usa-link')
  })
})
