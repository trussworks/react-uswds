import { render, screen } from '@testing-library/react'
import { BannerFlag } from './BannerFlag'

describe('BannerFlag Component', () => {
  it('renders properly', () => {
    render(<BannerFlag alt="A flag image" />)

    const bannerFlag = screen.getByRole('img')

    expect(bannerFlag).toHaveClass('usa-banner__header-flag')
  })

  it('Allows custom classes to be passed in', () => {
    render(<BannerFlag alt="A flag image" className="img-class" />)

    const bannerFlag = screen.getByRole('img')

    expect(bannerFlag).toHaveClass('usa-banner__header-flag img-class')
  })
})
