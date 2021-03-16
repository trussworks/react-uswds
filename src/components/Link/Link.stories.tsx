import React from 'react'
import { Link } from './Link'

export default {
  title: 'Components/Typography/Link',
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

export const Default = (): React.ReactElement => (
  <p>
    <Link href={'#'}> This</Link> is a text link.
  </p>
)

export const Visited = (): React.ReactElement => (
  <p>
    <Link className="usa-color-text-visited" href={'#'}>
      This
    </Link>
    &nbsp;is a visited link.
  </p>
)

export const DarkBackground = (): React.ReactElement => (
  <div className="usa-dark-background" style={{ padding: '10px' }}>
    <p>
      <Link href={'#'}>This</Link> is a text link on a dark background
    </p>
  </div>
)

export const ExternalLink = (): React.ReactElement => (
  <p>
    This is a link that goes to an&nbsp;
    <Link variant="external" href={'http://www.truss.works'}>
      external website
    </Link>
    .
  </p>
)

export const NavLink = (): React.ReactElement => (
  <p>
    This is a&nbsp;
    <Link variant="nav" href={'#'}>
      NavLink
    </Link>
  </p>
)

export const StyledAsButton = (): React.ReactElement => (
  <p>
    <Link className="usa-button" variant="unstyled" href={'#'}>
      This
    </Link>
    is a link styled to look like a button.
  </p>
)

export const CustomComponentLink = (): React.ReactElement => {
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
  }: MockLinkProps): React.ReactElement => (
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
