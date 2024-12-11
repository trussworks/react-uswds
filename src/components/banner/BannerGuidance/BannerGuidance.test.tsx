import { render } from '@testing-library/react'
import { BannerGuidance } from './BannerGuidance'

describe('BannerGuidance Component', () => {
  it('renders properly', () => {
    const { container } = render(<BannerGuidance>content</BannerGuidance>)

    const bannerGuidance = container.querySelector('div')

    expect(bannerGuidance).toHaveClass('usa-banner__guidance')
    expect(bannerGuidance).toHaveTextContent('content')
  })

  it('Allows custom classes to be passed in', () => {
    const { container } = render(
      <BannerGuidance className="div-class">content</BannerGuidance>
    )

    const bannerGuidance = container.querySelector('div')

    expect(bannerGuidance).toHaveClass('usa-banner__guidance div-class')
  })
})
