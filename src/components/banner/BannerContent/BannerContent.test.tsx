import React from 'react'
import { render } from '@testing-library/react'
import BannerContent from './BannerContent'

describe('BannerContent Component', () => {
  it('renders properly', () => {
    const { container } = render(<BannerContent>content</BannerContent>)

    const bannerContent = container.querySelector('div')

    expect(bannerContent).toHaveClass(
      'usa-banner__content usa-accordion__content'
    )
    expect(bannerContent).toHaveTextContent('content')
    expect(bannerContent).toHaveProperty('hidden', true)
  })

  it('Allows custom classes to be passed in', () => {
    const { container } = render(<BannerContent className="div-class" />)

    const bannerContent = container.querySelector('div')

    expect(bannerContent).toHaveClass(
      'usa-banner__content usa-accordion__content div-class'
    )
  })
})
