import React from 'react'
import { render, screen } from '@testing-library/react'
import BannerButtonBase from './BannerButtonBase'

describe('BannerButton component', () => {
  it('renders properly', () => {
    render(<BannerButtonBase isOpen={false}>Button Text</BannerButtonBase>)

    const button = screen.getByRole('button')

    expect(screen.getByText('Button Text')).toBeInTheDocument()
    expect(button).toHaveClass('usa-accordion__button usa-banner__button')
    expect(button).toHaveAttribute('aria-expanded', 'false')
  })

  it('Allows custom classes to be passed in', () => {
    render(
      <BannerButtonBase isOpen={false} className="button-class">
        Button Text
      </BannerButtonBase>
    )

    const button = screen.getByRole('button')

    expect(button).toHaveClass(
      'usa-accordion__button usa-banner__button button-class'
    )
    expect(button).toHaveAttribute('aria-expanded', 'false')
  })
})
