import React from 'react'
import { render } from '@testing-library/react'
import { Breadcrumb } from '../Breadcrumb/Breadcrumb'
import { BreadcrumbBar } from './BreadcrumbBar'
import { BreadcrumbLink } from '../BreadcrumbLink/BreadcrumbLink'

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

  it('renders properly with BreadcrumbLinks', () => {
    const { getByRole, queryByText } = render(
      <BreadcrumbBar>
        <Breadcrumb>
          <BreadcrumbLink href="#">{testParentPageName}</BreadcrumbLink>
        </Breadcrumb>
        <Breadcrumb current>{testPageName}</Breadcrumb>
      </BreadcrumbBar>
    )
    expect(queryByText(testParentPageName)).toBeInTheDocument()
    expect(queryByText(testPageName)).toBeInTheDocument()
    expect(getByRole('list')).toHaveClass('usa-breadcrumb__list')
  })

  it('renders properly with Breadcrumbs using custom elements', () => {
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
      <BreadcrumbBar>
        <Breadcrumb>
          <BreadcrumbLink<CustomLinkProps> to="#" asCustom={CustomLink}>
            {testParentPageName}
          </BreadcrumbLink>
        </Breadcrumb>
        <Breadcrumb current>{testPageName}</Breadcrumb>
      </BreadcrumbBar>
    )
    expect(queryByText(testParentPageName)).toBeInTheDocument()
    expect(queryByText(testPageName)).toBeInTheDocument()
    expect(getByRole('list')).toHaveClass('usa-breadcrumb__list')
  })
})
