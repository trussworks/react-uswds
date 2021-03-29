import React from 'react'
import { Breadcrumb } from '../Breadcrumb/Breadcrumb'
import { BreadcrumbBar } from './BreadcrumbBar'
import { BreadcrumbLink } from '../BreadcrumbLink/BreadcrumbLink'

export default {
  title: 'Components/Breadcrumb',
  component: BreadcrumbBar,
  subcomponents: { Breadcrumb, BreadcrumbLink },
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 2.0 Breadcrumb component

Provide secondary navigation to help users understand where they are in a website.
    
Source: https://designsystem.digital.gov/components/breadcrumb/
        `,
      },
    },
  },
}

export const DefaultBreadcrumb = (): React.ReactElement => (
  <BreadcrumbBar>
    <Breadcrumb>
      <BreadcrumbLink href="#">
        <span>Home</span>
      </BreadcrumbLink>
    </Breadcrumb>
    <Breadcrumb>
      <BreadcrumbLink href="#">
        <span>Federal Contracting</span>
      </BreadcrumbLink>
    </Breadcrumb>
    <Breadcrumb>
      <BreadcrumbLink href="#">
        <span>Contracting assistance programs</span>
      </BreadcrumbLink>
    </Breadcrumb>
    <Breadcrumb current>
      <span>Women-owned small business federal contracting program</span>
    </Breadcrumb>
  </BreadcrumbBar>
)

export const BreadcrumbWithRdfaMetadata = (): React.ReactElement => {
  const rdfaMetadata = {
    ol: {
      vocab: 'http://schema.org/',
      typeof: 'BreadcrumbList',
    },
    li: {
      property: 'itemListElement',
      typeof: 'ListItem',
    },
    a: {
      property: 'item',
      typeof: 'WebPage',
    },
  }

  return (
    <BreadcrumbBar listProps={{ ...rdfaMetadata.ol }}>
      <Breadcrumb {...rdfaMetadata.li}>
        <BreadcrumbLink href="#" {...rdfaMetadata.a}>
          <span property="name">Home</span>
        </BreadcrumbLink>
        <meta property="position" content="1" />
      </Breadcrumb>
      <Breadcrumb {...rdfaMetadata.li}>
        <BreadcrumbLink href="#" {...rdfaMetadata.a}>
          <span property="name">Federal Contracting</span>
        </BreadcrumbLink>
        <meta property="position" content="2" />
      </Breadcrumb>
      <Breadcrumb {...rdfaMetadata.li}>
        <BreadcrumbLink href="#" {...rdfaMetadata.a}>
          <span property="name">Contracting assistance programs</span>
        </BreadcrumbLink>
        <meta property="position" content="3" />
      </Breadcrumb>
      <Breadcrumb current {...rdfaMetadata.li}>
        <span property="name">
          Women-owned small business federal contracting program
        </span>
        <meta property="position" content="4" />
      </Breadcrumb>
    </BreadcrumbBar>
  )
}

export const WrappingBreadcrumb = (): React.ReactElement => (
  <BreadcrumbBar variant="wrap">
    <Breadcrumb>
      <BreadcrumbLink href="#">
        <span>Home</span>
      </BreadcrumbLink>
    </Breadcrumb>
    <Breadcrumb>
      <BreadcrumbLink href="#">
        <span>Federal Contracting</span>
      </BreadcrumbLink>
    </Breadcrumb>
    <Breadcrumb>
      <BreadcrumbLink href="#">
        <span>Contracting assistance programs</span>
      </BreadcrumbLink>
    </Breadcrumb>
    <Breadcrumb current>
      <span>Women-owned small business federal contracting program</span>
    </Breadcrumb>
  </BreadcrumbBar>
)

export const CustomBreadcrumbLinks = (): React.ReactElement => {
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
    <BreadcrumbBar>
      <Breadcrumb>
        <BreadcrumbLink<MockLinkProps>
          className="abc"
          asCustom={CustomLink}
          to="#">
          Home
        </BreadcrumbLink>
      </Breadcrumb>
      <Breadcrumb>
        <BreadcrumbLink<MockLinkProps>
          className="abc"
          asCustom={CustomLink}
          to="#">
          Federal Contracting
        </BreadcrumbLink>
      </Breadcrumb>
      <Breadcrumb>
        <BreadcrumbLink<MockLinkProps>
          className="abc"
          asCustom={CustomLink}
          to="#">
          Contracting assistance programs
        </BreadcrumbLink>
      </Breadcrumb>
      <Breadcrumb current>
        Women-owned small business federal contracting program
      </Breadcrumb>
    </BreadcrumbBar>
  )
}
