import React, { ComponentProps } from 'react'
import { render, screen } from '@testing-library/react'
import BannerInner from './BannerInner'

describe('BannerHeader Component', () => {
  const renderBannerInner = (props?: ComponentProps<typeof BannerInner>) => {
    render(<BannerInner {...props}>content</BannerInner>)

    const inner = screen.getByTestId('banner-header-inner-div')

    return inner
  }

  it('renders properly', () => {
    const inner = renderBannerInner()

    expect(inner).toHaveClass('usa-banner__inner')
    expect(inner).toHaveTextContent('content')
  })

  it('Allows custom classes to be passed in', () => {
    const inner = renderBannerInner({
      className: 'inner-div-class',
    })

    expect(inner).toHaveClass('usa-banner__inner inner-div-class')
  })
})
