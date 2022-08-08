import React from 'react'
import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'

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

  describe('static content', () => {
    it('renders consistently with default props', () => {
      const tree = renderer.create(<GovBanner />).toJSON()
      expect(tree).toMatchSnapshot()
    })

    it('renders consistently in English for .gov sites', () => {
      const tree = renderer
        .create(<GovBanner language="english" tld=".gov" />)
        .toJSON()
      expect(tree).toMatchSnapshot()
    })

    it('renders consistently in English for .mil sites', () => {
      const tree = renderer
        .create(<GovBanner language="english" tld=".mil" />)
        .toJSON()
      expect(tree).toMatchSnapshot()
    })

    it('renders consistently in Spanish for .gov sites', () => {
      const tree = renderer
        .create(<GovBanner language="spanish" tld=".gov" />)
        .toJSON()
      expect(tree).toMatchSnapshot()
    })

    it('renders consistently in Spanish for .mil sites', () => {
      const tree = renderer
        .create(<GovBanner language="spanish" tld=".mil" />)
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
