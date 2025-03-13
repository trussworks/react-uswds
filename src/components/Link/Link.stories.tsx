import React, { type JSX } from 'react'
import { Link } from './Link'

export default {
  title: 'Components/Link',
  component: Link,
  parameters: {
    docs: {
      description: {
        component: `
Based on Typography guide: https://designsystem.digital.gov/components/typography/#links
`,
      },
    },
  },
}

export const Default = (): JSX.Element => (
  <p>
    <Link href={'#'}> This</Link> is a text link.
  </p>
)

export const Visited = (): JSX.Element => (
  <p>
    <Link className="usa-color-text-visited" href={'#'}>
      This
    </Link>
    &nbsp;is a visited link.
  </p>
)

export const DarkBackground = (): JSX.Element => (
  <div className="usa-dark-background" style={{ padding: '10px' }}>
    <p>
      <Link href={'#'}>This</Link> is a text link on a dark background
    </p>
  </div>
)

export const ExternalLink = (): JSX.Element => (
  <p>
    This is a link that goes to an&nbsp;
    <Link variant="external" href={'http://www.truss.works'}>
      external website
    </Link>
    .
  </p>
)

export const NavLink = (): JSX.Element => (
  <p>
    This is a&nbsp;
    <Link variant="nav" href={'#'}>
      NavLink
    </Link>
  </p>
)

export const StyledAsButton = (): JSX.Element => (
  <p>
    <Link
      className="usa-button"
      variant="unstyled"
      allowSpacebarActivation
      href={'#'}>
      This
    </Link>
    is a link styled to look like a button; it can be activated with the
    spacebar.
  </p>
)

export const CustomComponentLink = (): JSX.Element => {
  type MockLinkProps = React.PropsWithChildren<{
    to: string
    className: string
  }> &
    JSX.IntrinsicElements['a']

  const CustomLink: React.FunctionComponent<MockLinkProps> = ({
    to,
    className,
    children,
    ...linkProps
  }: MockLinkProps): JSX.Element => (
    <a href={to} className={className} {...linkProps}>
      {children}
    </a>
  )

  return (
    <p>
      <Link<MockLinkProps>
        className="abc"
        asCustom={CustomLink}
        to="http://www.truss.works">
        This
      </Link>
      &nbsp;is a custom component link.
    </p>
  )
}
