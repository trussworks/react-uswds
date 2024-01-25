import React, { ComponentProps } from 'react'
import { render, screen } from '@testing-library/react'
import BannerHeaderBase from './BannerHeaderBase'

describe('BannerHeaderBase Component', () => {
  const renderBannerHeader = ({
    isOpen,
    ...bannerHeaderProps
  }: ComponentProps<typeof BannerHeaderBase>) => {
    render(
      <BannerHeaderBase isOpen={isOpen} {...bannerHeaderProps}>
        content
      </BannerHeaderBase>
    )

    const header = screen.getByRole('banner')

    return header
  }

  it('renders properly', () => {
    const header = renderBannerHeader({ isOpen: false })

    expect(header).toHaveClass('usa-banner__header')
  })

  it('Allows custom classes to be passed in', () => {
    const header = renderBannerHeader({
      isOpen: false,
      className: 'header-class',
    })

    expect(header).toHaveClass('usa-banner__header header-class')
  })

  it('renders properly with "open" state', () => {
    const header = renderBannerHeader({ isOpen: true })

    expect(header).toHaveClass(
      'usa-banner__header usa-banner__header--expanded'
    )
  })

  it('renders properly with "open" state and a custom class passed in', () => {
    const header = renderBannerHeader({
      isOpen: true,
      className: 'header-class',
    })

    expect(header).toHaveClass(
      'usa-banner__header usa-banner__header--expanded header-class'
    )
  })
})
