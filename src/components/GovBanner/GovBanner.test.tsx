import React from 'react'
import { render } from '@testing-library/react'

import { GovBanner } from './GovBanner'

describe('GovBanner component', () => {
  it('renders without errors', () => {
    const { queryByTestId } = render(<GovBanner />)
    expect(queryByTestId('govBanner')).toBeInTheDocument()
  })

  it('renders section attributes passed in through props', () => {
    const { queryByTestId } = render(
      <GovBanner aria-label="Official government website" />
    )
    expect(queryByTestId('govBanner')).toHaveAttribute('aria-label')
  })

  it('renders with language and tld props passed', () => {
    const { queryByTestId } = render(
      <GovBanner language="english" tld=".mil" />
    )
    expect(queryByTestId('govBanner')).toBeInTheDocument
  })
})
