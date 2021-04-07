/*  eslint-disable jsx-a11y/anchor-is-valid, react/jsx-key */
import React from 'react'
import { render } from '@testing-library/react'

import { SiteAlert } from './SiteAlert'

const testChildren = (
  <p className="usa-alert__text">
    some default text&nbsp;
    <a className="usa-link" href="#">
      with a link
    </a>
    .
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
      <a className="usa-link" href="#">
        with a link{' '}
      </a>
    </li>
    <li>
      another list item&nbsp;
      <a className="usa-link" href="#">
        with a link
      </a>
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

  it('renders a passed in heading', () => {
    const { getByRole } = render(
      <SiteAlert variant="info" {...testDefaultProps} />
    )

    expect(getByRole('heading')).toBeInTheDocument()
  })

  it('renders emergency site alert without errors', () => {
    const { getByTestId } = render(
      <SiteAlert variant="emergency" {...testDefaultProps} />
    )

    expect
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

  it('renders slim and no icon when passed both', () => {
    const { getByTestId } = render(
      <SiteAlert
        variant="info"
        slim={true}
        showIcon={false}
        aria-label="Site alert">
        {testChildren}
      </SiteAlert>
    )
    expect(getByTestId('siteAlert')).toHaveClass(
      'usa-site-alert usa-site-alert--info usa-site-alert--no-icon usa-site-alert--slim'
    )
  })
})
