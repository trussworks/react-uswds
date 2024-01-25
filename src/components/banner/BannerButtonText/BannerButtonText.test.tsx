import React from 'react'
import { render, screen } from '@testing-library/react'
import BannerButtonText from './BannerButtonText'

describe('BannerButton component', () => {
  it('renders properly', () => {
    render(<BannerButtonText>Button Text</BannerButtonText>)

    const buttonText = screen.getByText('Button Text')

    expect(buttonText).toHaveClass('usa-banner__button-text')
  })

  it('Allows custom classes to be passed in', () => {
    render(
      <BannerButtonText className="span-class">Button Text</BannerButtonText>
    )

    const buttonText = screen.getByText('Button Text')

    expect(buttonText).toHaveClass('usa-banner__button-text span-class')
  })
})
