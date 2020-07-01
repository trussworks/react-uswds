import React from 'react'
import { Link } from './Link'

export default {
  title: 'Link',
  parameters: {
    info: `Link component

    Based on Typography guide: https://designsystem.digital.gov/components/typography/#links`,
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

export const StyledAsButton = (): React.ReactElement => (
  <p>
    <Link className="usa-button" variant="unstyled" href={'#'}>
      This
    </Link>
    is a link styled to look like a button.
  </p>
)

export const CustomComponentLink = (): React.ReactElement => {
  type MockLinkProps = {
    to: string
  } & JSX.IntrinsicElements['a']

  const CustomLink: React.FunctionComponent<MockLinkProps> = ({
    to,
    children,
  }: MockLinkProps): React.ReactElement => (
    <a data-testid="customComponent" href={to}>
      {children}
    </a>
  )

  return (
    <p>
      <Link<MockLinkProps> asCustom={CustomLink} to={'http://www.truss.works'}>
        This
      </Link>
      &nbsp;is a custom component link.
    </p>
  )
}
