import { render } from '@testing-library/react'
import { BannerContent } from './BannerContent'

describe('BannerContent Component', () => {
  it('renders properly', () => {
    const { container } = render(
      <BannerContent isOpen={false}>content</BannerContent>
    )

    const bannerContent = container.querySelector('div')

    expect(bannerContent).toHaveClass(
      'usa-banner__content usa-accordion__content'
    )
    expect(bannerContent).toHaveTextContent('content')
    expect(bannerContent).toHaveProperty('hidden', true)
  })

  it('Allows custom classes to be passed in', () => {
    const { container } = render(
      <BannerContent isOpen={false} className="div-class">
        content
      </BannerContent>
    )

    const bannerContent = container.querySelector('div')

    expect(bannerContent).toHaveClass(
      'usa-banner__content usa-accordion__content div-class'
    )
    expect(bannerContent).toHaveTextContent('content')
    expect(bannerContent).toHaveProperty('hidden', true)
  })

  it('renders properly with "open" state', () => {
    const { container } = render(<BannerContent isOpen>content</BannerContent>)

    const bannerContent = container.querySelector('div')

    expect(bannerContent).toHaveProperty('hidden', false)
  })
})
