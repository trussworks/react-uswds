import React from 'react'
import { render } from '@testing-library/react'

import { IdentifierLinks } from './IdentifierLinks'
import { IdentifierLinkItem } from '../IdentifierLinkItem/IdentifierLinkItem'
import { IdentifierLink } from '../IdentifierLink/IdentifierLink'

const testPageName = 'Test Page'

describe('IdentifierLinks component', () => {
  it('renders without errors', () => {
    const { getByRole, queryByText } = render(
      <IdentifierLinks>
        <IdentifierLinkItem>{testPageName}</IdentifierLinkItem>
      </IdentifierLinks>
    )
    expect(getByRole('listitem')).toHaveClass(
      'usa-identifier__required-links-item'
    )
    expect(queryByText('Test Page')).toBeInTheDocument()
  })

  it('renders properly with IdentifierLinkItem and IdentifierLink components', () => {
    const { getAllByRole, queryByText } = render(
      <IdentifierLinks>
        <IdentifierLinkItem>
          <IdentifierLink href="#">{testPageName}</IdentifierLink>
        </IdentifierLinkItem>
        <IdentifierLinkItem>
          <IdentifierLink href="#">Second Test Page</IdentifierLink>
        </IdentifierLinkItem>
        <IdentifierLinkItem>
          <IdentifierLink href="#">Third Test Page</IdentifierLink>
        </IdentifierLinkItem>
      </IdentifierLinks>
    )
    expect(getAllByRole('link')).toHaveLength(3)
    expect(queryByText('Test Page')).toBeInTheDocument()
  })

  it('renders properly with subcomponents using custom elements', () => {
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
      <IdentifierLinks>
        <IdentifierLinkItem>
          <IdentifierLink<CustomLinkProps> to="#" asCustom={CustomLink}>
            {testPageName}
          </IdentifierLink>
        </IdentifierLinkItem>
      </IdentifierLinks>
    )
    expect(queryByText('Test Page')).toBeInTheDocument()
    expect(getByRole('link')).toBeInTheDocument()
    expect(getByRole('list')).toBeInTheDocument()
  })
})
