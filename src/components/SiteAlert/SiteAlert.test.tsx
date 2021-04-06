import React from 'react'
import { render } from '@testing-library/react'

import { SiteAlert } from './SiteAlert'

const testChildren = <p>some default text</p>
const testChildrenWithLink = (
  <p className="usa-alert__text">
    some default text <a href="#link">with a link</a>.
  </p>
)
const testDefaultProps = {
  heading: 'test heading',
  children: testChildren,
}

describe('SiteAlert component', () => {
  it('renders without errors', () => {
    const { getByTestId, queryByText } = render(
      <SiteAlert variant="info" {...testDefaultProps} />
    )

    expect(getByTestId('siteAlert')).toBeInTheDocument()
    expect(queryByText('some default text')).toBeInTheDocument()
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

    expect(getByTestId('siteAlert')).toHaveClass(
      'usa-site-alert usa-site-alert--emergency'
    )
  })

  it('renders passed in links', () => {
    const { getByRole } = render(
      <SiteAlert variant="info">{testChildrenWithLink}</SiteAlert>
    )

    expect(getByRole('link')).toBeInTheDocument()
  })
})
