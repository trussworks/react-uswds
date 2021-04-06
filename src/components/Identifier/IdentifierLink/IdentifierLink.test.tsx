import React from 'react'
import { render } from '@testing-library/react'
import { IdentifierLink } from './IdentifierLink'

const testPageName = 'Test Page'

describe('IdentifierLink component', () => {
  it('renders without errors', () => {
    const { getByRole, queryByText } = render(
      <IdentifierLink href="#">{testPageName}</IdentifierLink>
    )
    expect(queryByText(testPageName)).toBeInTheDocument()
    expect(getByRole('link')).toHaveClass(
      'usa-identifier__required-link usa-link'
    )
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
      <IdentifierLink<CustomLinkProps>
        to="#"
        className="custom-class"
        asCustom={CustomLink}>
        {testPageName}
      </IdentifierLink>
    )
    expect(queryByText(testPageName)).toBeInTheDocument()
    expect(getByRole('link')).toHaveClass(
      'custom-class usa-identifier__required-link usa-link'
    )
  })
})
