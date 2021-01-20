/*  eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Breadcrumb } from '../Breadcrumb/Breadcrumb'
import { LinkingBreadcrumb } from '../LinkingBreadcrumb/LinkingBreadcrumb'
import { BreadcrumbBar } from './BreadcrumbBar'

export default {
  title: 'Breadcrumb',
  component: BreadcrumbBar,
  parameters: {
    info: `
    Provide secondary navigation to help users understand where they are in a website.

    Source: https://designsystem.digital.gov/components/breadcrumb/
    `,
  },
}

export const DefaultBreadcrumb = (): React.ReactElement => (
  <BreadcrumbBar>
    <LinkingBreadcrumb href="#">Home</LinkingBreadcrumb>
    <LinkingBreadcrumb href="#">Federal Contracting</LinkingBreadcrumb>
    <LinkingBreadcrumb href="#">
      Contacting assistance programs
    </LinkingBreadcrumb>
    <Breadcrumb current>
      Women-owned small business federal contracting program
    </Breadcrumb>
  </BreadcrumbBar>
)

export const BreadcrumbWithRdfaMetaData = (): React.ReactElement => {
  const rdfaMetaData = {
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
    <BreadcrumbBar listProps={{ ...rdfaMetaData.ol }}>
      <LinkingBreadcrumb
        href="#"
        listItemProps={{ ...rdfaMetaData.li }}
        anchorProps={{ ...rdfaMetaData.a }}>
        <span property="name">Home</span>
        <meta property="position" content="1" />
      </LinkingBreadcrumb>
      <LinkingBreadcrumb
        href="#"
        listItemProps={{ ...rdfaMetaData.li }}
        anchorProps={{ ...rdfaMetaData.a }}>
        <span property="name">Federal Contracting</span>
        <meta property="position" content="2" />
      </LinkingBreadcrumb>
      <LinkingBreadcrumb
        href="#"
        listItemProps={{ ...rdfaMetaData.li }}
        anchorProps={{ ...rdfaMetaData.a }}>
        <span property="name">Contacting assistance programs</span>
        <meta property="position" content="3" />
      </LinkingBreadcrumb>
      <Breadcrumb current listItemProps={{ ...rdfaMetaData.li }}>
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
    <LinkingBreadcrumb href="#">Home</LinkingBreadcrumb>
    <LinkingBreadcrumb href="#">Federal Contracting</LinkingBreadcrumb>
    <LinkingBreadcrumb href="#">
      Contacting assistance programs
    </LinkingBreadcrumb>
    <Breadcrumb current>
      Women-owned small business federal contracting program
    </Breadcrumb>
  </BreadcrumbBar>
)

export const CustomBreadcrumbLinks = (): React.ReactElement => (
  <BreadcrumbBar variant="wrap">
    <Breadcrumb>
      <a href="#">A custom link</a>
    </Breadcrumb>
    <Breadcrumb current>The current page</Breadcrumb>
  </BreadcrumbBar>
)
