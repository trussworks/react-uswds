import React from 'react'
import { render } from '@testing-library/react'

import { SiteAlert } from './SiteAlert'

describe('SiteAlert component', () => {
  it('renders without errors', () => {
    const { getByTestId } = render(<SiteAlert />)
    expect(getByTestId('siteAlert')).toBeInTheDocument()
  })
})
