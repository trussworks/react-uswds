import React from 'react'
import { render } from '@testing-library/react'

import { SiteAlert } from './SiteAlert'

const testChildren = <p>some default text</p>
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

    expect(getByTestId('siteAlert')).toHaveClass('usa-site-alert-emergency')
  })
})
