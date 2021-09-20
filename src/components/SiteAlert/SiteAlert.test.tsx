/*  eslint-disable jsx-a11y/anchor-is-valid, react/jsx-key */
import React from 'react'
import { render } from '@testing-library/react'

import { Link } from '../Link/Link'

import { SiteAlert } from './SiteAlert'

const testChildren = (
  <p className="usa-alert__text">
    some default text&nbsp;
    <Link href="#">with a link</Link>.
  </p>
)

const testDefaultProps = {
  heading: 'test heading',
  children: testChildren,
}

const testChildrenWithList = (
  <ul>
    <li>
      some default text&nbsp;
      <Link href="#">with a link&nbsp;</Link>
    </li>
    <li>
      another list item&nbsp;
      <Link href="#">with a link</Link>
    </li>
    <li>another list item, no link</li>
  </ul>
)

describe('SiteAlert component', () => {
  it('renders without errors', () => {
    const { getByTestId, getByRole } = render(
      <SiteAlert variant="info" {...testDefaultProps} />
    )

    expect(getByTestId('siteAlert')).toBeInTheDocument()
    expect(getByRole('link')).toBeInTheDocument()
  })

  it('accepts a className', () => {
    const { getByTestId } = render(
      <SiteAlert
        variant="info"
        className="custom-class-name"
        {...testDefaultProps}
      />
    )

    expect(getByTestId('siteAlert')).toHaveClass(
      'usa-site-alert usa-site-alert--info custom-class-name'
    )
  })

  it('accepts a custom aria-label', () => {
    const { getByTestId } = render(
      <SiteAlert
        variant="emergency"
        aria-label="custom aria label"
        {...testDefaultProps}
      />
    )

    expect(getByTestId('siteAlert')).toHaveAttribute(
      'aria-label',
      'custom aria label'
    )
  })

  it('renders a passed in heading', () => {
    const { getByRole, queryByText } = render(
      <SiteAlert variant="info" {...testDefaultProps} />
    )

    const heading = getByRole('heading')
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveClass('usa-alert__heading')
    expect(queryByText('test heading')).toBeInTheDocument()
  })

  it('renders emergency site alert without errors', () => {
    const { getByTestId } = render(
      <SiteAlert variant="emergency" {...testDefaultProps} />
    )

    expect(getByTestId('siteAlert')).toHaveClass(
      'usa-site-alert usa-site-alert--emergency'
    )
  })

  it('renders passed in link', () => {
    const { getByRole } = render(
      <SiteAlert variant="info">{testChildren}</SiteAlert>
    )

    expect(getByRole('link')).toBeInTheDocument()
    expect(getByRole('link')).toHaveClass('usa-link')
  })

  it('renders a passed in list', () => {
    const { getAllByRole } = render(
      <SiteAlert variant="emergency">{testChildrenWithList}</SiteAlert>
    )
    expect(getAllByRole('link')).toHaveLength(2)
  })

  it('renders slim and no icon when passed both, and does not apply no-header class', () => {
    const { getByTestId } = render(
      <SiteAlert variant="info" slim={true} showIcon={false}>
        {testChildren}
      </SiteAlert>
    )
    expect(getByTestId('siteAlert')).toHaveClass(
      'usa-site-alert usa-site-alert--info usa-site-alert--no-icon usa-site-alert--slim'
    )
    expect(getByTestId('siteAlert')).not.toHaveClass(
      'usa-site-alert--no-heading'
    )
  })

  it('wraps a child string in a <p> tag', () => {
    const { getByText } = render(
      <SiteAlert variant="info">Test alert text</SiteAlert>
    )

    expect(getByText('Test alert text')).toHaveClass('usa-alert__text')
    expect(getByText('Test alert text').tagName).toEqual('P')
  })

  it('does not wrap a single child element', () => {
    const { getByText } = render(
      <SiteAlert variant="info">
        <strong className="test-element-class-name">Test alert text</strong>
      </SiteAlert>
    )

    const childElement = getByText('Test alert text')
    const parentElement = childElement.parentElement

    expect(childElement).not.toHaveClass('usa-alert__text')
    expect(childElement).toHaveClass('test-element-class-name')
    expect(parentElement).not.toHaveClass('usa-alert__text')
    expect(parentElement).toHaveClass('usa-alert__body')
  })

  it('renders, but does not wrap, multiple child elements', () => {
    const { getByText } = render(
      <SiteAlert variant="info">
        {[
          <strong key={0} className="test-main-class-name">
            Test alert text
          </strong>,
          <em key={1} className="test-subtext-class-name">
            Test alert subtext
          </em>,
        ]}
      </SiteAlert>
    )

    const childElement = getByText('Test alert subtext')
    const parentElement = childElement.parentElement

    expect(childElement).not.toHaveClass('usa-alert__text')
    expect(parentElement?.childNodes.length).toEqual(2)
    expect(parentElement).not.toHaveClass('usa-alert__text')
  })
})
