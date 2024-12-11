import { render, screen } from '@testing-library/react'
import { BannerButton } from './BannerButton'

describe('BannerButton component', () => {
  it('renders properly', () => {
    render(<BannerButton isOpen={false}>Button Text</BannerButton>)

    const button = screen.getByRole('button')
    const buttonText = screen.getByText('Button Text')

    expect(button).toHaveClass('usa-accordion__button usa-banner__button')
    expect(button).toHaveAttribute('aria-expanded', 'false')
    expect(buttonText).toHaveClass('usa-banner__button-text')
  })

  it('Allows custom classes to be passed in', () => {
    render(
      <BannerButton
        isOpen={false}
        className="button-class"
        spanProps={{ className: 'span-class' }}>
        Button Text
      </BannerButton>
    )

    const button = screen.getByRole('button')
    const buttonText = screen.getByText('Button Text')

    expect(button).toHaveClass(
      'usa-accordion__button usa-banner__button button-class'
    )
    expect(button).toHaveAttribute('aria-expanded', 'false')
    expect(buttonText).toHaveClass('usa-banner__button-text span-class')
  })

  it('renders properly with "open" state', () => {
    render(<BannerButton isOpen>Button Text</BannerButton>)

    const button = screen.getByRole('button')

    expect(button).toHaveAttribute('aria-expanded', 'true')
  })
})
