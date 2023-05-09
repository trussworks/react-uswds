import React from 'react'
import { render, screen, within } from '@testing-library/react'
import { BannerLockImage } from './BannerLockImage'

describe('BannerIcon Component', () => {
  it('renders properly', () => {
    const { container } = render(
      <BannerLockImage title="A Lock" description="A picture of a lock" />
    )

    const span = container.querySelector('span')
    const svg = screen.getByRole('img')
    const title = within(svg).getByText('A Lock')
    const description = within(svg).getByText('A picture of a lock')

    expect(span).toHaveClass('icon-lock')
    expect(svg).toHaveClass('usa-banner__lock-image')
    expect(svg).toHaveAttribute('aria-labelledby', 'banner-lock-description')
    expect(title).toHaveProperty('id', 'banner-lock-title')
    expect(description).toHaveProperty('id', 'banner-lock-description')
  })

  it('Allows custom classes to be passed in', () => {
    const { container } = render(
      <BannerLockImage
        title="A Lock"
        description="A picture of a lock"
        className="span-class"
        svgProps={{ className: 'svg-class' }}
      />
    )

    const span = container.querySelector('span')
    const svg = screen.getByRole('img')

    expect(span).toHaveClass('icon-lock span-class')
    expect(svg).toHaveClass('usa-banner__lock-image svg-class')
  })
})
