import React from 'react'
import { render } from '@testing-library/react'

import { GovBanner } from './GovBanner'

describe('GovBanner component', () => {
  it('renders without errors', () => {
    const { queryByTestId } = render(<GovBanner />)

    const banner = queryByTestId('govBanner')
    expect(banner).toBeInTheDocument()
    expect(banner).toHaveAttribute(
      'aria-label',
      'Official website of the United States government'
    )
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
    expect(queryByTestId('govBanner')).toBeInTheDocument()
  })

  describe('static content', () => {
    it('renders consistently with default props', () => {
      const { container } = render(<GovBanner />)
      expect(container.firstChild).toMatchSnapshot()
    })

    it('renders consistently in English for .gov sites', () => {
      const { container } = render(<GovBanner language="english" tld=".gov" />)
      expect(container.firstChild).toMatchSnapshot()
    })

    it('renders consistently in English for .mil sites', () => {
      const { container } = render(<GovBanner language="english" tld=".mil" />)
      expect(container.firstChild).toMatchSnapshot()
    })

    it('renders consistently in Spanish for .gov sites', () => {
      const { container } = render(<GovBanner language="spanish" tld=".gov" />)
      expect(container.firstChild).toMatchSnapshot()
    })

    it('renders consistently in Spanish for .mil sites', () => {
      const { container } = render(<GovBanner language="spanish" tld=".mil" />)
      expect(container.firstChild).toMatchSnapshot()
    })
  })
})
