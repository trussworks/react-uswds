import { render, screen } from '@testing-library/react'
import { BannerIcon } from './BannerIcon'

describe('BannerIcon Component', () => {
  it('renders properly', () => {
    render(<BannerIcon alt="A banner icon" />)

    const bannerIcon = screen.getByRole('img', { hidden: true })

    expect(bannerIcon).toHaveClass('usa-banner__icon usa-media-block__img')
    expect(bannerIcon).toHaveAttribute('aria-hidden', 'true')
    expect(bannerIcon).toHaveAttribute('alt', 'A banner icon')
  })

  it('Allows custom classes to be passed in', () => {
    render(<BannerIcon alt="A banner icon" className="img-class" />)

    const bannerIcon = screen.getByRole('img', { hidden: true })

    expect(bannerIcon).toHaveClass(
      'usa-banner__icon usa-media-block__img img-class'
    )
  })
})
